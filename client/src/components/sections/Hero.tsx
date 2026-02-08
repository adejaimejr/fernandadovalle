import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-1000">
        <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-medium">
          Fernanda do Valle Pessoa
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight mb-6 text-primary">
          Psicologia sob medida,<br />
          <span className="italic font-light text-secondary-foreground/80">em diferentes camadas</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Clínica, conhecimento e escuta para a saúde mental. Este é um espaço onde a psicologia não é padronizada. 
          Aqui, o cuidado é sob medida — construído a partir da sua história, do seu tempo e das suas necessidades.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button 
            onClick={() => scrollToSection("clinica")}
            className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Iniciar Psicoterapia
          </Button>
          <Button 
            onClick={() => scrollToSection("instituto")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white rounded-lg px-8 py-6 text-base transition-all duration-300"
          >
            Conhecer o Instituto
          </Button>
        </div>
      </div>
    </section>
  );
}
