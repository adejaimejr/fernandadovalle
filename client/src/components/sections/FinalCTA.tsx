import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FinalCTA() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs = [
    {
      id: "clinica",
      label: "01. Clínica",
      title: "Psicoterapia Individual",
      color: "text-[#6FB4B4]",
      borderColor: "border-[#6FB4B4]"
    },
    {
      id: "instituto",
      label: "02. IPPAM",
      title: "Projetos e Ensino",
      color: "text-[#D4A500]",
      borderColor: "border-[#F5C518]"
    },
    {
      id: "obras",
      label: "03. Obras",
      title: "Leitura e Reflexão",
      color: "text-[#6A7C67]",
      borderColor: "border-[#6A7C67]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 space-y-16 max-w-6xl">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight mb-6">
            Um mesmo cuidado, <br />
            <span className="italic text-secondary-foreground font-light">diferentes caminhos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Acreditamos que a psicologia deve ser sob medida. Seja no consultório, na formação profissional ou na leitura, oferecemos um olhar ético, científico e humano para cada necessidade.
          </p>
        </div>

        {/* Interactive Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 shrink-0 lg:sticky lg:top-32">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-500 border group",
                  activeTab === index 
                    ? `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${tab.borderColor}/30 border` 
                    : "bg-transparent border-transparent hover:bg-black/5"
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={cn(
                      "font-bold text-sm tracking-widest uppercase mb-2 block transition-colors duration-300",
                      activeTab === index ? tab.color : "text-muted-foreground group-hover:text-primary"
                    )}>
                      {tab.label}
                    </span>
                    <h3 className={cn(
                      "text-2xl font-display transition-colors duration-300",
                      activeTab === index ? "text-primary" : "text-muted-foreground/70 group-hover:text-primary"
                    )}>
                      {tab.title}
                    </h3>
                  </div>
                  <ArrowRight className={cn(
                    "w-5 h-5 transition-all duration-300",
                    activeTab === index ? `opacity-100 translate-x-0 ${tab.color}` : "opacity-0 -translate-x-4"
                  )} />
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 relative min-h-[600px] lg:min-h-[700px]">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div 
                  key="clinica"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-[#6FB4B4]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <div className="space-y-8">
                    {[
                      { title: "Entrevista inicial", desc: "Realização da anamnese, compreensão da história pregressa e atual, e definição conjunta dos objetivos." },
                      { title: "Análise de documentos", desc: "Leitura de laudos e avaliações psicológicas/psiquiátricas prévias, exames e informações multiprofissionais." },
                      { title: "Planejamento terapêutico individualizado", desc: "Elaboração cuidadosa do plano de intervenção, considerando a subjetividade e as necessidades específicas." },
                      { title: "Integração de rede de apoio", desc: "Convite a familiares ou rede de apoio para orientação, preservando sigilo e autonomia." },
                      { title: "Início do acompanhamento", desc: "Condução das sessões com intervenções baseadas em evidências e ajustes conforme evolução." },
                      { title: "Monitoramento e alta", desc: "Reavaliação de metas, planejamento de monitoramento e construção do plano de alta." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 group relative">
                        {i !== 5 && (
                          <div className="absolute left-[15px] top-10 bottom-[-30px] w-[2px] bg-border/40 group-hover:bg-[#6FB4B4]/20 transition-colors" />
                        )}
                        <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-background border border-[#6FB4B4]/30 flex items-center justify-center text-sm font-display text-[#6FB4B4] mt-1 group-hover:bg-[#6FB4B4] group-hover:text-white group-hover:border-[#6FB4B4] transition-all">
                          {i + 1}
                        </div>
                        <div className="space-y-1 pt-1 pb-2">
                          <h4 className="text-lg font-display text-primary">{step.title}</h4>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="bg-[#6FB4B4] hover:bg-[#5A9999] text-white rounded-full px-8 py-6 w-full sm:w-auto"
                    >
                      Agendar Sessão
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div 
                  key="instituto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-[#F5C518]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                    Um espaço dedicado à prevenção em saúde mental, à construção de habilidades socioemocionais e ao fortalecimento de forças psicológicas para o bem-estar.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais." },
                      { title: "Sono Saudável", desc: "Promoção de hábitos e regulação do ciclo sono-vigília." },
                      { title: "Gerenciamento do Estresse", desc: "Desenvolvimento de estratégias de autorregulação." },
                      { title: "Acolhimento do Luto", desc: "Apoio psicológico para elaboração e adaptação à perda." }
                    ].map((protocol, i) => (
                      <div key={i} className="p-6 bg-[#FAF9F6] rounded-2xl border border-[#F5C518]/20 hover:border-[#F5C518]/50 transition-colors h-full flex flex-col">
                        <CheckCircle2 className="text-[#D4A500] w-6 h-6 mb-3 flex-shrink-0" strokeWidth={1.5} />
                        <h4 className="text-lg font-display text-primary mb-2">{protocol.title}</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed flex-grow">{protocol.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="bg-[#F5C518] hover:bg-[#D4A500] text-secondary-foreground rounded-full px-8 py-6 w-full sm:w-auto"
                    >
                      Conhecer o Instituto
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div 
                  key="obras"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 bg-white p-6 md:p-10 rounded-3xl border border-[#6A7C67]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <p className="text-2xl md:text-3xl text-primary font-display leading-relaxed mb-4">
                    A escrita como gesto de cuidado.
                  </p>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    Uma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora.
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      variant="outline"
                      onClick={() => scrollToSection("contato")}
                      className="text-[#6A7C67] border-[#6A7C67]/30 hover:bg-[#6A7C67]/5 hover:text-[#6A7C67] rounded-full px-8 py-6 w-full sm:w-auto text-base group"
                    >
                      Explorar Obras <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
