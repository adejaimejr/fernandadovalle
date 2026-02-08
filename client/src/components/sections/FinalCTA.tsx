import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#E6CBA8]/20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-white rounded-[100%] blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center space-y-12">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-primary">
            Um mesmo cuidado, <br />
            <span className="italic text-secondary-foreground">diferentes caminhos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Não existe apenas uma forma de cuidar da saúde mental. <br/>
            Escolha o caminho que faz sentido para o seu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-[#FFFAFA] shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#6FB4B4]/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#6FB4B4]" />
            <span className="text-xs font-bold text-[#6FB4B4] uppercase tracking-widest mb-4">Atendimentos</span>
            <h3 className="text-2xl font-display text-primary mb-6">Pela Clínica</h3>
            <Button size="lg" className="mt-auto w-full bg-[#6FB4B4] text-white hover:bg-[#5A9999] shadow-md rounded-full">
              Iniciar Psicoterapia
            </Button>
          </div>
          
          {/* Card 2 */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-[#FFFAFA] shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#F5C518]/30 relative overflow-hidden transform md:-translate-y-4">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#F5C518]" />
            <span className="text-xs font-bold text-[#D4A500] uppercase tracking-widest mb-4">Projetos e Ensino</span>
            <h3 className="text-2xl font-display text-primary mb-6">Pelo Instituto</h3>
            <Button size="lg" className="mt-auto w-full bg-[#F5C518] text-secondary-foreground hover:bg-[#D4A500] shadow-md rounded-full">
              Conhecer Projetos
            </Button>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-[#FFFAFA] shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#6A7C67]/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#6A7C67]" />
            <span className="text-xs font-bold text-[#6A7C67] uppercase tracking-widest mb-4">Leitura e Reflexão</span>
            <h3 className="text-2xl font-display text-primary mb-6">Pelas Obras</h3>
            <Button size="lg" className="mt-auto w-full bg-[#6A7C67] hover:bg-[#5A6B57] text-white shadow-md rounded-full">
              Explorar Livros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
