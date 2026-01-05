export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Portfolio ✨
            </div>
            <p className="text-white/80">&copy; 2025 김민지 Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8">
            {[
              { name: "홈", href: "#home" },
              { name: "소개", href: "#about" },
              { name: "포트폴리오", href: "#portfolio" },
              { name: "연락처", href: "#contact" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="relative text-white/80 hover:text-white transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <div className="inline-flex items-center space-x-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <span className="text-2xl animate-bounce">✨</span>
            <p className="text-white/90">
              사용자를 위한 아름다운 디지털 경험을 만들어갑니다
            </p>
            <span className="text-2xl animate-bounce delay-300">🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}