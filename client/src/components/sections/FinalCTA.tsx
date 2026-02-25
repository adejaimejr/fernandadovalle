import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-32 max-w-6xl">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary leading-tight mb-6">
            Um mesmo cuidado, <br />
            <span className="italic text-secondary-foreground font-light">diferentes caminhos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Acreditamos que a psicologia deve ser sob medida. Seja no consultório, na formação profissional ou na leitura, oferecemos um olhar ético, científico e humano para cada necessidade.
          </p>
        </div>

        {/* SECTION 1: CLÍNICA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#6FB4B4] font-bold text-sm tracking-widest uppercase mb-2 block">01. Clínica</span>
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-4">Psicoterapia Individual</h3>
            <p className="text-muted-foreground mb-8">
              Passo a passo do acompanhamento para garantir uma jornada terapêutica segura e fundamentada.
            </p>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-[#6FB4B4] hover:bg-[#5A9999] text-white rounded-full px-8 py-6 w-full sm:w-auto"
            >
              Agendar Sessão
            </Button>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            {[
              { title: "Entrevista inicial", desc: "Realização da anamnese, compreensão da história pregressa e atual, e definição conjunta dos objetivos terapêuticos." },
              { title: "Análise de documentos", desc: "Leitura de laudos e avaliações psicológicas/psiquiátricas prévias, além de exames clínicos, encaminhamentos e informações multiprofissionais relevantes." },
              { title: "Planejamento terapêutico individualizado", desc: "Elaboração cuidadosa do plano de intervenção, considerando a subjetividade, o contexto de vida e as necessidades específicas de cada pessoa." },
              { title: "Integração de rede de apoio", desc: "Convite a familiares, responsáveis e/ou rede de apoio para orientação e alinhamento, preservando sigilo, autonomia e objetivos do processo terapêutico." },
              { title: "Início do acompanhamento", desc: "Condução das sessões com intervenções baseadas em evidências, acompanhamento do progresso e ajustes conforme evolução e demanda." },
              { title: "Monitoramento e alta", desc: "Reavaliação periódica de metas, planejamento de sessões de monitoramento e construção do plano de alta, com foco em autonomia e manutenção dos ganhos." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group relative">
                {/* Connecting Line */}
                {i !== 5 && (
                  <div className="absolute left-[15px] top-10 bottom-[-40px] w-[2px] bg-border/40 group-hover:bg-[#6FB4B4]/20 transition-colors" />
                )}
                
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-background border border-[#6FB4B4]/30 flex items-center justify-center text-sm font-display text-[#6FB4B4] shadow-sm group-hover:bg-[#6FB4B4] group-hover:text-white group-hover:border-[#6FB4B4] transition-all duration-300 mt-1">
                  {i + 1}
                </div>
                
                {/* Content */}
                <div className="space-y-2 pt-1 pb-4">
                  <h4 className="text-xl font-display text-primary">{step.title}</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border/40" />

        {/* SECTION 2: INSTITUTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[#D4A500] font-bold text-sm tracking-widest uppercase mb-2 block">02. IPPAM</span>
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-4">Protocolos Disponíveis</h3>
            <p className="text-muted-foreground mb-8">
              Um espaço dedicado à prevenção em saúde mental e construção de habilidades socioemocionais.
            </p>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-[#F5C518] hover:bg-[#D4A500] text-secondary-foreground rounded-full px-8 py-6 w-full sm:w-auto"
            >
              Conhecer o Instituto
            </Button>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais." },
              { title: "Sono Saudável", desc: "Promoção de hábitos e regulação do ciclo sono-vigília." },
              { title: "Gerenciamento do Estresse", desc: "Desenvolvimento de estratégias de autorregulação." },
              { title: "Acolhimento do Luto", desc: "Apoio psicológico para elaboração e adaptação à perda." }
            ].map((protocol, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] rounded-[2rem] border border-border/50 hover:border-[#F5C518]/30 transition-colors">
                <CheckCircle2 className="text-[#D4A500] w-6 h-6 mb-4" strokeWidth={1.5} />
                <h4 className="text-xl font-display text-primary mb-2">{protocol.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-border/40" />

        {/* SECTION 3: LEITURA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-4">
            <span className="text-[#6A7C67] font-bold text-sm tracking-widest uppercase mb-2 block">03. Obras</span>
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-4">A escrita como gesto de cuidado</h3>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Uma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora.
            </p>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contato")}
              className="text-[#6A7C67] border-[#6A7C67]/30 hover:bg-[#6A7C67]/5 hover:text-[#6A7C67] rounded-full px-8 py-6 w-full sm:w-auto text-base group"
            >
              Explorar Obras <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
