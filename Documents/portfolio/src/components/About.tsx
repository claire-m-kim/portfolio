import { Card, CardContent } from "./ui/card";

export function About() {
  const experiences = [
    {
      title: "학력",
      content: "디지털디자인학과 졸업 (2022)",
      icon: "🎓",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "경험",
      content: "프리랜서 웹디자인 프로젝트 10+ 완료",
      icon: "💼",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      title: "철학",
      content: "사용자 중심의 직관적인 디자인 추구",
      icon: "💡",
      gradient: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
              👋 About Me
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            디자인을 통해 사용자에게 의미 있는 경험을 제공하고 싶습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  저에 대해 소개합니다
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  안녕하세요! 4년간 디지털 디자인을 공부하며 웹디자인에 대한 열정을 키워왔습니다. 
                  사용자 경험(UX)과 사용자 인터페이스(UI) 디자인에 특히 관심이 많으며, 
                  최신 디자인 트렌드와 기술을 꾸준히 학습하고 있습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  반응형 웹디자인부터 모바일 앱 UI까지 다양한 플랫폼에서의 디자인 경험을 보유하고 있으며, 
                  사용자 중심의 디자인 사고를 바탕으로 문제를 해결하는 것을 좋아합니다.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full opacity-40 animate-float delay-500"></div>
            </div>
          </div>

          <div className="grid gap-6">
            {experiences.map((item, index) => (
              <Card 
                key={index} 
                className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`text-3xl p-3 rounded-2xl bg-gradient-to-r ${item.gradient} bg-opacity-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl group-hover:text-purple-600 transition-colors duration-300">{item.title}</h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}