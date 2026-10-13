'use strict';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(payload));
}

function text(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, maxLength);
}

function escapeText(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

module.exports = async function contactHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, code: 'method_not_allowed' });
  }

  if (!String(req.headers['content-type'] || '').toLowerCase().includes('application/json')) {
    return sendJson(res, 415, { ok: false, code: 'unsupported_media_type' });
  }

  const configuredOrigin = process.env.CONTACT_SITE_ORIGIN;
  if (!configuredOrigin || !process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    return sendJson(res, 503, { ok: false, code: 'not_configured' });
  }

  const requestOrigin = req.headers.origin;
  let expectedOrigin;
  try { expectedOrigin = new URL(configuredOrigin).origin; } catch {
    return sendJson(res, 503, { ok: false, code: 'not_configured' });
  }
  if (!requestOrigin || requestOrigin !== expectedOrigin) {
    return sendJson(res, 403, { ok: false, code: 'origin_rejected' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (text(body.website, 200)) {
    // Drop bot submissions without ever reporting that a message was delivered.
    return sendJson(res, 400, { ok: false, code: 'invalid_submission' });
  }

  const startedAt = Number(body.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) {
    return sendJson(res, 400, { ok: false, code: 'invalid_submission' });
  }

  const name = text(body.name, 120);
  const email = text(body.email, 254).replace(/[\r\n]/g, '');
  const message = text(body.message, 5000);
  if (name.length < 1 || !EMAIL_PATTERN.test(email) || message.length < 20 || message.length > 5000) {
    return sendJson(res, 400, { ok: false, code: 'invalid_fields' });
  }

  const payload = {
    from: process.env.CONTACT_FROM_EMAIL,
    to: [process.env.CONTACT_TO_EMAIL],
    reply_to: email,
    subject: `Portfolio inquiry from ${name.replace(/[\r\n]/g, ' ').slice(0, 80)}`,
    text: `Name or company: ${name}\nReply email: ${email}\n\n${message}`,
    html: `<p><strong>Name or company:</strong> ${escapeText(name)}</p><p><strong>Reply email:</strong> ${escapeText(email)}</p><p>${escapeText(message).replace(/\n/g, '<br>')}</p>`
  };

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!delivery.ok) return sendJson(res, 502, { ok: false, code: 'delivery_failed' });
    return sendJson(res, 200, { ok: true });
  } catch {
    return sendJson(res, 502, { ok: false, code: 'delivery_failed' });
  }
};
