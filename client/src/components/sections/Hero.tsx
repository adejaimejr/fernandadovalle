import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#FFFAFA]/50 to-[#FFFAFA] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-1000">
        
        {/* Full Logo Display */}
        <div className="mb-8 w-full max-w-[300px] md:max-w-[400px]">
          <img 
            src="/images/fernanda-logo-turquesa.jpg" 
            alt="Fernanda do Valle Pessoa Psicóloga" 
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight mb-6 text-primary sr-only">
          Psicologia sob medida
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-primary/80 mb-6 italic">
          Psicologia sob medida, em diferentes camadas
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Clínica, conhecimento e escuta para a saúde mental. Este é um espaço onde a psicologia não é padronizada. 
          Aqui, o cuidado é sob medida — construído a partir da sua história, do seu tempo e das suas necessidades.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button 
            onClick={() => scrollToSection("clinica")}
            className="bg-primary hover:bg-[#5A9999] text-white rounded-lg px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Iniciar Psicoterapia
          </Button>
          <Button 
            onClick={() => scrollToSection("instituto")}
            className="bg-secondary hover:bg-[#D4A500] text-secondary-foreground rounded-lg px-8 py-6 text-base shadow-sm hover:shadow-md transition-all duration-300"
          >
            Conhecer o Instituto
          </Button>
        </div>
      </div>
    </section>
  );
}
