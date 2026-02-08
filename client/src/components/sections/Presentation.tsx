import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Presentation() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative group animate-in slide-in-from-left-10 duration-1000 order-first md:order-last">
            <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl max-w-md mx-auto aspect-square">
              <img 
                src="/images/portrait-main.jpg" 
                alt="Fernanda do Valle Pessoa, psicóloga clínica"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6 text-center md:text-left animate-in slide-in-from-right-10 duration-1000">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">
              Fernanda do Valle Pessoa
            </h2>
            
            <p className="font-sans text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-widest">
              Psicóloga clínica (CRP 20/03477)
            </p>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Psicóloga clínica, escritora em saúde mental e fundadora do Instituto de Psicologia Positiva do Amazonas.
              </p>
              <p>
                Fernanda do Valle é a psicóloga responsável pelos atendimentos da clínica, a fundadora e idealizadora dos protocolos do Instituto e autora de livros em saúde mental.
              </p>
              <p className="font-medium text-primary/80">
                Clínica, Instituto e obras não são frentes isoladas — são camadas de uma psicologia sob medida, que se adapta ao modo como cada pessoa pode e deseja cuidar de si.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-script text-3xl text-accent md:ml-4 rotate-[-2deg]">
                Fernanda do Valle
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
