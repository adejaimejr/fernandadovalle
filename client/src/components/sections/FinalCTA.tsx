import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#E6CBA8]/20 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-white rounded-[100%] blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 space-y-12">
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display text-primary">
            Um mesmo cuidado, <br />
            <span className="italic text-secondary-foreground">diferentes caminhos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mx-auto">
            Acreditamos que a psicologia deve ser sob medida. Seja no consultório, na formação profissional ou na leitura, oferecemos um olhar ético, científico e humano para cada necessidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="clinica" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1.5 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm">
              <TabsTrigger 
                value="clinica"
                className="rounded-xl py-3 data-[state=active]:bg-[#6FB4B4] data-[state=active]:text-white transition-all text-sm md:text-base font-medium"
              >
                Clínica
              </TabsTrigger>
              <TabsTrigger 
                value="instituto"
                className="rounded-xl py-3 data-[state=active]:bg-[#F5C518] data-[state=active]:text-[#333333] transition-all text-sm md:text-base font-medium"
              >
                Instituto
              </TabsTrigger>
              <TabsTrigger 
                value="leitura"
                className="rounded-xl py-3 data-[state=active]:bg-[#6A7C67] data-[state=active]:text-white transition-all text-sm md:text-base font-medium"
              >
                Leitura
              </TabsTrigger>
            </TabsList>

            {/* CLÍNICA TAB */}
            <TabsContent value="clinica" className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#6FB4B4]/20 space-y-8 animate-in fade-in-50 zoom-in-95 outline-none">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#6FB4B4] uppercase tracking-widest">Psicoterapia Individual</span>
                <h3 className="text-2xl md:text-3xl font-display text-primary">Passo a passo do acompanhamento</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Entrevista inicial", desc: "Realização da anamnese clínica, compreensão da história pregressa e atual, e definição conjunta dos objetivos." },
                  { title: "Análise de documentos", desc: "Leitura de laudos e avaliações psicológicas/psiquiátricas prévias, exames e informações multiprofissionais." },
                  { title: "Planejamento terapêutico", desc: "Elaboração cuidadosa do plano de intervenção, considerando a subjetividade e necessidades de cada pessoa." },
                  { title: "Rede de apoio", desc: "Convite a familiares ou rede de apoio para orientação (quando indicado), preservando sigilo e autonomia." },
                  { title: "Início e desenvolvimento", desc: "Condução das sessões com intervenções baseadas em evidências, acompanhamento e ajustes conforme evolução." },
                  { title: "Monitoramento e alta", desc: "Reavaliação periódica de metas, planejamento de sessões de monitoramento e construção do plano de alta." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6FB4B4]/10 text-[#6FB4B4] flex items-center justify-center font-display text-lg group-hover:bg-[#6FB4B4] group-hover:text-white transition-colors duration-300">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1.5">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 flex justify-center border-t border-border/40">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("contato")}
                  className="bg-[#6FB4B4] text-white hover:bg-[#5A9999] rounded-full px-8 shadow-md hover:shadow-lg transition-all"
                >
                  Agendar Sessão
                </Button>
              </div>
            </TabsContent>

            {/* INSTITUTO TAB */}
            <TabsContent value="instituto" className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#F5C518]/20 space-y-8 animate-in fade-in-50 zoom-in-95 outline-none">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#D4A500] uppercase tracking-widest">Projetos e Ensino</span>
                <h3 className="text-2xl md:text-3xl font-display text-primary">Protocolos Disponíveis</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  { title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais." },
                  { title: "Sono Saudável", desc: "Promoção de hábitos e regulação do ciclo sono-vigília." },
                  { title: "Gerenciamento do Estresse", desc: "Desenvolvimento de estratégias de autorregulação." },
                  { title: "Acolhimento do Luto", desc: "Apoio psicológico para elaboração e adaptação à perda." }
                ].map((protocol, i) => (
                  <div key={i} className="bg-[#F5C518]/5 hover:bg-[#F5C518]/10 transition-colors duration-300 p-5 rounded-2xl border border-[#F5C518]/20 flex items-start gap-4">
                    <CheckCircle2 className="text-[#D4A500] w-6 h-6 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{protocol.title}</h4>
                      <p className="text-sm text-muted-foreground">{protocol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex justify-center border-t border-border/40">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("contato")}
                  className="bg-[#F5C518] text-[#333333] hover:bg-[#D4A500] rounded-full px-8 shadow-md hover:shadow-lg transition-all"
                >
                  Conhecer o Instituto
                </Button>
              </div>
            </TabsContent>

            {/* LEITURA TAB */}
            <TabsContent value="leitura" className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#6A7C67]/20 space-y-8 animate-in fade-in-50 zoom-in-95 outline-none">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span className="text-xs font-bold text-[#6A7C67] uppercase tracking-widest">Obras</span>
                <h3 className="text-2xl md:text-3xl font-display text-primary">Livros e Reflexão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  A escrita como gesto de cuidado. Obras que democratizam o acesso à psicologia de qualidade com linguagem clara, transformando conceitos complexos em uma leitura acessível e acolhedora.
                </p>
              </div>

              <div className="pt-6 flex justify-center border-t border-border/40">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://linktr.ee/fernandadovalle', '_blank')}
                  className="bg-[#6A7C67] hover:bg-[#5A6B57] text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all"
                >
                  Explorar Obras <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
