import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const projects = [
    {
      title: "모던 비즈니스 웹사이트",
      description: "깔끔하고 전문적인 기업 웹사이트 디자인",
      image: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4NTQxOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web Design", "UI/UX", "Responsive"],
      category: "웹사이트"
    },
    {
      title: "인터랙티브 비즈니스 웹사이트",
      description: "기업의 신뢰감을 중심으로 한 웹사이트 디자인",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1MDg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web Design", "Interaction", "Responsive"],
      category: "웹사이트"
    },
    {
      title: "핀테크 LP 페이지",
      description: "간편결제 서비스의 LP 페이지 디자인",
      image: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwZGVzaWdufGVufDF8fHx8MTc1ODU5MjcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web Design", "Landing Page", "Fintech"],
      category: "웹사이트"
    },
    {
      title: "모찌런 PPT, 시연영상 디자인",
      description: "AI 일본어 학습 웹서비스 PPT, 영상 디자인",
      image: "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTg1ODI2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Presentation Design", "Motion", "Product Demo"],
      category: "영상"
    },
    {
      title: "홍보영상 디자인",
      description: "기업 홍보용 영상 디자인",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg1Mzc0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Motion Design", "Promotion", "Brand Video"],
      category: "영상"
    },
    {
      title: "디자인 제안서",
      description: "로고, 홈페이지, 영상 등 브랜드 제안서 디자인",
      image: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4NTQxOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Branding", "Logo", "Visual Identity"],
      category: "제안서"
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
              💼 My Works
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            다양한 프로젝트를 통해 쌓아온 경험과 결과물들을 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-500 overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
              
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Floating icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <span className="text-white">🚀</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4 relative z-10">
                <div>
                  <h3 className="text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-purple-300/30 hover:bg-purple-100/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}