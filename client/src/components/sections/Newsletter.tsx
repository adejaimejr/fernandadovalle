import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 bg-[#6FB4B4] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-white/90 mb-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-bold tracking-widest uppercase">Newsletter</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-white leading-tight">
                Conteúdo exclusivo para <br/> sua jornada de bem-estar
              </h2>
              <p className="text-white/80 leading-relaxed text-lg font-light">
                Receba artigos, reflexões e novidades sobre psicologia positiva e saúde mental diretamente no seu email.
              </p>
            </div>

            {/* Form */}
            <div className="w-full md:w-auto min-w-[320px]">
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    className="w-full bg-white text-primary border-0 rounded-full h-12 pl-6 pr-4 focus-visible:ring-2 focus-visible:ring-white/50 placeholder:text-muted-foreground/60 shadow-lg"
                  />
                </div>
                <Button className="w-full bg-[#F5C518] hover:bg-[#D4A500] text-secondary-foreground font-bold rounded-full h-12 shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  Inscrever-se
                </Button>
                <p className="text-xs text-white/60 text-center mt-2">
                  Respeitamos sua privacidade. Cancele quando quiser.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
