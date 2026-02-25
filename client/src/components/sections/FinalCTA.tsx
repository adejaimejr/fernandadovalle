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
      borderColor: "border-[#6FB4B4]",
      bgColor: "bg-white",
      hoverColor: "hover:border-[#6FB4B4]/50"
    },
    {
      id: "instituto",
      label: "02. IPPAM",
      title: "Projetos e Ensino",
      color: "text-[#D4A500]",
      borderColor: "border-[#F5C518]",
      bgColor: "bg-[#FDFBF7]",
      hoverColor: "hover:border-[#F5C518]/50"
    },
    {
      id: "obras",
      label: "03. Obras",
      title: "Leitura e Reflexão",
      color: "text-[#6A7C67]",
      borderColor: "border-[#6A7C67]",
      bgColor: "bg-[#F9FAF9]",
      hoverColor: "hover:border-[#6A7C67]/50"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 space-y-16 max-w-5xl">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight mb-6">
            Um mesmo cuidado, <br />
            <span className="italic text-secondary-foreground font-light">diferentes caminhos</span>
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Acreditamos que a psicologia deve ser sob medida. Seja no consultório, na formação profissional ou na leitura, oferecemos um olhar ético, científico e humano para cada necessidade.
          </p>
        </div>

        {/* Interactive Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-[320px] flex flex-col gap-3 shrink-0 lg:sticky lg:top-32">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left p-6 transition-all duration-300 rounded-xl relative group flex items-center justify-between",
                  activeTab === index 
                    ? `bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] border-2 ${tab.borderColor}/40` 
                    : "bg-transparent border border-transparent hover:bg-black/[0.02]"
                )}
              >
                <div>
                  <span className={cn(
                    "font-bold text-xs tracking-[0.15em] uppercase mb-1 block transition-colors duration-300",
                    activeTab === index ? tab.color : "text-muted-foreground"
                  )}>
                    {tab.label}
                  </span>
                  <h3 className={cn(
                    "text-lg font-display transition-colors duration-300",
                    activeTab === index ? "text-primary" : "text-muted-foreground"
                  )}>
                    {tab.title}
                  </h3>
                </div>
                {activeTab === index && (
                  <ArrowRight className={cn("w-4 h-4", tab.color)} />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-[600px] relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div 
                  key="clinica"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40"
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
                      <div key={i} className="flex gap-6 relative">
                        {i !== 5 && (
                          <div className="absolute left-[13px] top-8 bottom-[-32px] w-[1px] bg-border/60" />
                        )}
                        <div className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full border border-border/80 flex items-center justify-center text-[11px] font-medium text-muted-foreground mt-0.5 bg-white">
                          {i + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-base font-medium text-[#6FB4B4]">{step.title}</h4>
                          <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 mt-8 border-t border-border/40 flex justify-center">
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="bg-[#6FB4B4] hover:bg-[#5A9999] text-white rounded-full px-8 py-5"
                    >
                      Agendar Sessão
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div 
                  key="instituto"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40 flex flex-col h-full"
                >
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                    Um espaço dedicado à prevenção em saúde mental, à construção de habilidades socioemocionais e ao fortalecimento de forças psicológicas para o bem-estar.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                    {[
                      { title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais." },
                      { title: "Sono Saudável", desc: "Promoção de hábitos e regulação do ciclo sono-vigília." },
                      { title: "Gerenciamento do Estresse", desc: "Desenvolvimento de estratégias de autorregulação." },
                      { title: "Acolhimento do Luto", desc: "Apoio psicológico para elaboração e adaptação à perda." }
                    ].map((protocol, i) => (
                      <div key={i} className="p-5 bg-[#FAF9F6] rounded-xl border border-border/40 flex flex-col">
                        <CheckCircle2 className="text-[#D4A500] w-5 h-5 mb-3 flex-shrink-0" strokeWidth={1.5} />
                        <h4 className="text-sm font-medium text-primary mb-1">{protocol.title}</h4>
                        <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{protocol.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 mt-8 border-t border-border/40 flex justify-center">
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="bg-[#F5C518] hover:bg-[#D4A500] text-secondary-foreground rounded-full px-8 py-5"
                    >
                      Conhecer o Instituto
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div 
                  key="obras"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40 flex flex-col justify-center min-h-[400px]"
                >
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl md:text-3xl text-[#6A7C67] font-display">
                      A escrita como gesto de cuidado.
                    </h3>
                    <p className="text-[15px] text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
                      Uma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora.
                    </p>
                    
                    <div className="pt-6">
                      <Button 
                        variant="outline"
                        onClick={() => scrollToSection("contato")}
                        className="text-[#6A7C67] border-border hover:bg-[#6A7C67]/5 hover:text-[#6A7C67] rounded-full px-8 py-5"
                      >
                        Explorar Obras <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
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
