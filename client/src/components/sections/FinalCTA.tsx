import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-accent/20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-primary">
            Um mesmo cuidado, diferentes caminhos
          </h2>
          <p className="text-lg text-muted-foreground">
            Você pode se beneficiar deste trabalho em diferentes níveis:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300 border border-transparent hover:border-primary/20">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Atendimentos</span>
            <Button size="lg" className="w-full bg-primary text-white hover:bg-[#5A9999] shadow-md">
              Pela Clínica
            </Button>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300 border border-transparent hover:border-secondary/20">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projetos e Ensino</span>
            <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-[#D4A500] shadow-md">
              Pelo Instituto
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300 border border-transparent hover:border-accent/30">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Leitura e Reflexão</span>
            <Button size="lg" className="w-full bg-[#6A7C67] hover:bg-[#5A6B57] text-white shadow-md">
              Pelas Obras
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
