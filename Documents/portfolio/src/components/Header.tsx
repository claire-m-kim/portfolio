import { Button } from "./ui/button";

export function Header() {
  const navItems = [
    { name: "홈", href: "#home" },
    { name: "소개", href: "#about" },
    { name: "포트폴리오", href: "#portfolio" },
    { name: "스킬", href: "#skills" },
    { name: "연락처", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Portfolio ✨
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-foreground hover:text-purple-600 transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <Button className="md:hidden bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="sm">
          메뉴
        </Button>
      </div>
    </header>
  );
}