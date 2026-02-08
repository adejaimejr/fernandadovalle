import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#FFFAFA] overflow-hidden pt-24 md:pt-28">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            
            {/* Removed image logo, replaced with subtle text intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-primary leading-[1.1]">
                Psicologia <br className="hidden lg:block" />
                <span className="italic text-secondary-foreground/80 font-light">sob medida</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Clínica, conhecimento e escuta. Um espaço onde o cuidado não é padronizado, mas construído a partir do seu tempo e da sua história.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={() => scrollToSection("clinica")}
                className="bg-primary hover:bg-[#5A9999] text-white rounded-full px-8 py-7 text-base shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Iniciar Psicoterapia
              </Button>
              <Button 
                onClick={() => scrollToSection("instituto")}
                className="bg-[#F5C518] hover:bg-[#D4A500] text-secondary-foreground rounded-full px-8 py-7 text-base shadow-lg hover:shadow-secondary/20 transition-all duration-300"
              >
                Conhecer o Instituto
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
              {/* Organic Shapes Behind */}
              <div className="absolute top-10 right-10 w-full h-full bg-[#6FB4B4]/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob mix-blend-multiply filter blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-[#F5C518]/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl" />
              
              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/hero-seated.jpg" 
                  alt="Fernanda do Valle Pessoa sentada confortavelmente" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2s]"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px] hidden md:block">
                  <p className="font-display text-primary text-lg leading-none mb-1">CRP 20/03477</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Psicóloga Clínica</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
