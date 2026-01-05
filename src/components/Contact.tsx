import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "이메일",
      value: "web_publisher@naver.com",
      href: "mailto:web_publisher@naver.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "위치",
      value: "서울, 대한민국",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/claire-m-kim/,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
              📬 Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            새로운 프로젝트나 협업 제안이 있으시면 언제든
            연락주세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${
                        index === 0
                          ? "from-purple-400 to-pink-600"
                          : index === 1
                            ? "from-blue-400 to-cyan-600"
                            : "from-yellow-400 to-orange-600"
                      } bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="group-hover:text-purple-600 transition-colors duration-300">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full opacity-40 animate-float delay-500"></div>
            </div>

            <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <h4 className="mb-6 text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                소셜 미디어
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-600 bg-opacity-20 backdrop-blur-sm flex items-center justify-center text-purple-600 hover:bg-opacity-40 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>

            <CardContent className="p-8 relative z-10">
              <h3 className="mb-8 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                메시지 보내기
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-purple-600">
                      이름
                    </label>
                    <Input
                      placeholder="이름을 입력하세요"
                      className="bg-white/10 backdrop-blur-sm border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/20"
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-purple-600">
                      이메일
                    </label>
                    <Input
                      type="email"
                      placeholder="이메일을 입력하세요"
                      className="bg-white/10 backdrop-blur-sm border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-3 text-purple-600">
                    제목
                  </label>
                  <Input
                    placeholder="제목을 입력하세요"
                    className="bg-white/10 backdrop-blur-sm border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/20"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-purple-600">
                    메시지
                  </label>
                  <Textarea
                    placeholder="메시지를 입력하세요"
                    rows={5}
                    className="bg-white/10 backdrop-blur-sm border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/20 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 py-3 text-lg"
                >
                  <span className="mr-2">✉️</span>
                  메시지 보내기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}