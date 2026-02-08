import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const navLinks = [
    { name: "Sobre", id: "sobre" },
    {
      name: "Psicologia sob medida",
      children: [
        { name: "Clínica", id: "camadas" },
        { name: "Instituto", id: "camadas" },
        { name: "Obras", id: "camadas" },
      ]
    },
    { name: "Formação", id: "formacao" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-[#FFFAFA]/95 backdrop-blur-md shadow-sm py-2 border-b border-primary/10"
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          {/* Typographic Logo Construction */}
          <div className="flex items-center">
             <span className="font-script text-3xl text-primary leading-none -mb-1 mr-2 group-hover:opacity-80 transition-opacity">fv</span>
             <div className="flex flex-col">
               <span className="font-display text-lg text-primary leading-none tracking-wide group-hover:text-[#5A9999] transition-colors">FERNANDA DO VALLE</span>
               <span className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.2em] leading-none ml-[2px]">Psicóloga</span>
             </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.name} className="relative group">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider py-2">
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                   <div className="bg-white rounded-lg shadow-xl border border-border/50 p-2 min-w-[180px] flex flex-col gap-1">
                      {link.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => scrollToSection(child.id)}
                          className="text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors font-medium uppercase tracking-wide whitespace-nowrap"
                        >
                          {child.name}
                        </button>
                      ))}
                   </div>
                </div>
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FFFAFA] border-b border-border shadow-lg py-4 flex flex-col items-center space-y-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
             link.children ? (
              <div key={link.name} className="flex flex-col items-center w-full">
                <button 
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-lg font-medium py-2"
                >
                  {link.name}
                  <ChevronDown size={16} className={cn("transition-transform duration-300", mobileDropdownOpen ? "rotate-180" : "")} />
                </button>
                
                {mobileDropdownOpen && (
                  <div className="flex flex-col items-center gap-3 py-2 bg-muted/30 w-full animate-in slide-in-from-top-2">
                    {link.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => scrollToSection(child.id)}
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
             ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium py-2"
              >
                {link.name}
              </button>
             )
          ))}
        </div>
      )}
    </nav>
  );
}
