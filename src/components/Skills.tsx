import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "디자인 도구",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Photoshop", level: 90 },
        { name: "Illustrator", level: 90 }
      ]
    },
    {
      title: "개발 기술",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 65 },
      ]
    },
    {
      title: "UX/UI 전문성",
      skills: [
        { name: "사용자 리서치", level: 80 },
        { name: "와이어프레이밍", level: 90 },
        { name: "프로토타이핑", level: 85 },
      ]
    }
  ];

  const softSkills = [
    "창의적 문제 해결",
    "효과적인 커뮤니케이션", 
    "세심한 디테일",
    "최신 트렌드 파악",
    "사용자 중심 사고",
    "협업 및 팀워크"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
              ⚡ Skills & Tools
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            다양한 도구와 기술을 활용하여 최고의 디자인을 구현합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index === 0 ? 'from-purple-600/10 to-pink-600/10' :
                index === 1 ? 'from-blue-600/10 to-cyan-600/10' :
                'from-yellow-600/10 to-orange-600/10'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${
                    index === 0 ? 'from-purple-400 to-pink-600' :
                    index === 1 ? 'from-blue-400 to-cyan-600' :
                    'from-yellow-400 to-orange-600'
                  } bg-opacity-20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">
                      {index === 0 ? '🎨' : index === 1 ? '💻' : '🧠'}
                    </span>
                  </div>
                  <h3 className="text-xl group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="group-hover:text-purple-600 transition-colors duration-300">{skill.name}</span>
                        <span className="text-xs text-muted-foreground bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-white/10 backdrop-blur-sm border border-white/20" 
                        />
                        <div 
                          className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${
                            index === 0 ? 'from-purple-400 to-pink-600' :
                            index === 1 ? 'from-blue-400 to-cyan-600' :
                            'from-yellow-400 to-orange-600'
                          } rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden relative group">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-blue-600/5 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-600 bg-opacity-20 backdrop-blur-sm mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                소프트 스킬
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group/item flex items-center space-x-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 group-hover/item:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover/item:text-purple-600 transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}