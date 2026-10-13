"""Build a portable GitHub Pages artifact using only the Python standard library."""
from pathlib import Path
import shutil
import zipfile
root = Path(__file__).resolve().parents[1]
out = root / 'dist'
out.mkdir(exist_ok=True)
for name in ('index.html', 'styles.css', 'script.js', '.nojekyll'):
    shutil.copy2(root / name, out / name)
shutil.copytree(root / 'assets', out / 'assets', dirs_exist_ok=True)
with zipfile.ZipFile(root / 'portfolio-pages.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
    for path in sorted(out.rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(out))
print('Built dist/ and portfolio-pages.zip')
