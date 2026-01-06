import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "../assets/images/profile.png";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm backdrop-blur-sm border border-purple-300/20">
                  ✨ Web Designer
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl leading-tight">
                안녕하세요!
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  웹디자이너
                </span>
                <br />
                김미래입니다
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                사용자 경험을 중시하는 창의적이고 열정적인 웹디자이너입니다. 
                아름답고 실용적인 디지털 경험을 만들어갑니다.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  <a href="#portfolio">포트폴리오 보기</a></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 border-2 border-purple-300/30 bg-white/10 backdrop-blur-sm hover:bg-purple-50/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <a href="#contact">연락하기</a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative">
                <ImageWithFallback
                  src={profileImage}
                  alt="프로필 사진"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce">
                  <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl opacity-60 animate-float shadow-lg transform rotate-12"></div>
                <div className="absolute -bottom-8 -left-12 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl opacity-40 animate-float delay-500 shadow-lg transform -rotate-12"></div>
                <div className="absolute -top-12 -right-8 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg opacity-50 animate-float delay-1000 shadow-lg transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}