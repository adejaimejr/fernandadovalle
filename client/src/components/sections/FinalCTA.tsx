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
      label: "01",
      title: "Clínica",
      color: "text-[#6FB4B4]",
      bgColor: "bg-[#6FB4B4]",
      borderColor: "border-[#6FB4B4]"
    },
    {
      id: "instituto",
      label: "02",
      title: "IPPAM",
      color: "text-[#D4A500]",
      bgColor: "bg-[#F5C518]",
      borderColor: "border-[#F5C518]"
    },
    {
      id: "obras",
      label: "03",
      title: "Obras",
      color: "text-[#6A7C67]",
      bgColor: "bg-[#6A7C67]",
      borderColor: "border-[#6A7C67]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 space-y-12 max-w-5xl">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-4">
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

        {/* Horizontal Navigation (Tabs) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 bg-white border border-border/40 rounded-full shadow-sm max-w-full overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "relative flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  activeTab === index 
                    ? `text-white ${tab.bgColor} shadow-md` 
                    : "text-muted-foreground hover:bg-black/5 hover:text-primary"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors",
                  activeTab === index ? "bg-white/20 text-white" : "bg-border text-muted-foreground"
                )}>
                  {tab.label}
                </span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div 
                key="clinica"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#6FB4B4]/20"
              >
                <div className="text-center mb-10">
                   <h3 className="text-2xl font-display text-primary mb-2">Psicoterapia Individual</h3>
                   <p className="text-sm text-muted-foreground">Passo a passo do acompanhamento</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    { title: "Entrevista inicial", desc: "Realização da anamnese, compreensão da história pregressa e atual, e definição conjunta dos objetivos." },
                    { title: "Análise de documentos", desc: "Leitura de laudos e avaliações psicológicas/psiquiátricas prévias, exames e informações multiprofissionais." },
                    { title: "Planejamento individualizado", desc: "Elaboração cuidadosa do plano de intervenção, considerando a subjetividade e as necessidades específicas." },
                    { title: "Integração de rede de apoio", desc: "Convite a familiares ou rede de apoio para orientação, preservando sigilo e autonomia." },
                    { title: "Início do acompanhamento", desc: "Condução das sessões com intervenções baseadas em evidências e ajustes conforme evolução." },
                    { title: "Monitoramento e alta", desc: "Reavaliação de metas, planejamento de monitoramento e construção do plano de alta." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6FB4B4]/10 text-[#6FB4B4] flex items-center justify-center text-sm font-medium mt-0.5">
                        {i + 1}
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-[15px] font-medium text-primary">{step.title}</h4>
                        <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-10 mt-6 border-t border-border/40 flex justify-center">
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F5C518]/20"
              >
                <div className="text-center mb-10">
                   <h3 className="text-2xl font-display text-primary mb-3">Projetos e Ensino</h3>
                   <p className="text-[14px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Um espaço dedicado à prevenção em saúde mental, à construção de habilidades socioemocionais e ao fortalecimento de forças psicológicas para o bem-estar.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {[
                    { title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais." },
                    { title: "Sono Saudável", desc: "Promoção de hábitos e regulação do ciclo sono-vigília." },
                    { title: "Gerenciamento do Estresse", desc: "Desenvolvimento de estratégias de autorregulação." },
                    { title: "Acolhimento do Luto", desc: "Apoio psicológico para elaboração e adaptação à perda." }
                  ].map((protocol, i) => (
                    <div key={i} className="p-5 bg-[#FAF9F6] rounded-xl border border-border/40 flex items-start gap-4">
                      <CheckCircle2 className="text-[#D4A500] w-5 h-5 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[14px] font-medium text-primary mb-1">{protocol.title}</h4>
                        <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{protocol.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-10 mt-6 border-t border-border/40 flex justify-center">
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#6A7C67]/20"
              >
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                  <span className="text-xs font-bold text-[#6A7C67] uppercase tracking-widest">Leitura e Reflexão</span>
                  <h3 className="text-3xl text-primary font-display leading-relaxed">
                    A escrita como gesto de cuidado.
                  </h3>
                  <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
                    Uma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora.
                  </p>
                  
                  <div className="pt-8">
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
    </section>
  );
}
