import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Lightbulb, Users, LineChart, Target, HeartHandshake, Shield, Moon, Activity, BookHeart, BookOpen } from "lucide-react";
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
      label: "Clínica",
      color: "text-[#6FB4B4]",
      bgColor: "bg-[#6FB4B4]",
      shadow: "shadow-[#6FB4B4]/20"
    },
    {
      id: "instituto",
      label: "IPPAM",
      color: "text-[#D4A500]",
      bgColor: "bg-[#F5C518]",
      shadow: "shadow-[#F5C518]/20"
    },
    {
      id: "obras",
      label: "Obras",
      color: "text-[#6A7C67]",
      bgColor: "bg-[#6A7C67]",
      shadow: "shadow-[#6A7C67]/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-[#6FB4B4]/5 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-[#F5C518]/5 rounded-tr-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary leading-[1.1] mb-6">
            Um mesmo cuidado,<br />
            <span className="italic font-light text-secondary-foreground">diferentes caminhos</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Acreditamos que a psicologia deve ser sob medida. Oferecemos um olhar ético, científico e humano para cada necessidade.
          </p>
        </div>

        {/* Modern Pills Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-2 rounded-full border border-border/50 shadow-sm relative">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 uppercase tracking-widest z-10",
                  activeTab === index 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="active-pill"
                    className={cn("absolute inset-0 rounded-full", tab.bgColor, tab.shadow, "shadow-lg")}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Showcase */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-border/40 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            
            {/* CLÍNICA VIEW */}
            {activeTab === 0 && (
              <motion.div 
                key="clinica"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12 lg:p-16 relative"
              >
                {/* Accent Header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#6FB4B4]" />
                
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-display text-primary mb-3">Psicoterapia Individual</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    Um espaço seguro de escuta onde o tratamento é construído a partir do seu tempo e da sua história.
                  </p>
                </div>

                {/* Vertical Timeline Design */}
                <div className="max-w-3xl mx-auto relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[23px] top-4 bottom-4 w-px bg-[#6FB4B4]/20 hidden md:block" />
                  
                  <div className="space-y-8">
                    {[
                      { icon: FileText, title: "Entrevista Inicial", desc: "Compreensão da história atual e definição conjunta dos objetivos terapêuticos." },
                      { icon: Target, title: "Análise e Planejamento", desc: "Leitura de avaliações e elaboração cuidadosa do plano de intervenção individualizado." },
                      { icon: Users, title: "Rede de Apoio", desc: "Integração de familiares para alinhamento (quando indicado), mantendo o sigilo." },
                      { icon: LineChart, title: "Desenvolvimento e Alta", desc: "Sessões baseadas em evidências com monitoramento constante até a construção da alta." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 group relative">
                        <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#6FB4B4]/30 items-center justify-center relative z-10 group-hover:border-[#6FB4B4] group-hover:bg-[#6FB4B4]/5 transition-all duration-300">
                          <step.icon className="w-5 h-5 text-[#6FB4B4]" strokeWidth={1.5} />
                        </div>
                        <div className="bg-[#FAF9F6] p-6 rounded-2xl flex-grow border border-transparent group-hover:border-[#6FB4B4]/20 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2 md:hidden">
                             <step.icon className="w-5 h-5 text-[#6FB4B4]" strokeWidth={2} />
                             <h4 className="text-lg font-display text-primary">{step.title}</h4>
                          </div>
                          <h4 className="text-lg font-display text-primary mb-2 hidden md:block">{step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button 
                    onClick={() => scrollToSection("contato")}
                    className="bg-[#6FB4B4] hover:bg-[#5A9999] text-white rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Agendar Sessão
                  </Button>
                </div>
              </motion.div>
            )}

            {/* INSTITUTO VIEW */}
            {activeTab === 1 && (
              <motion.div 
                key="instituto"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12 lg:p-16 relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#F5C518]" />

                <div className="text-center mb-12">
                  <h3 className="text-3xl font-display text-primary mb-3">Instituto de Psicologia Positiva</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Desenvolvimento de protocolos, materiais terapêuticos e projetos voltados à prevenção e bem-estar.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    { icon: Shield, title: "Resiliência", desc: "Construção e fortalecimento de recursos emocionais e psicológicos." },
                    { icon: Moon, title: "Sono Saudável", desc: "Promoção de hábitos e regulação avançada do ciclo sono-vigília." },
                    { icon: Activity, title: "Gestão do Estresse", desc: "Desenvolvimento de estratégias de autorregulação e enfrentamento." },
                    { icon: HeartHandshake, title: "Acolhimento do Luto", desc: "Apoio psicológico direcionado para elaboração e adaptação à perda." }
                  ].map((protocol, i) => (
                    <div key={i} className="group p-8 bg-[#FAF9F6] rounded-3xl border border-border/50 hover:border-[#F5C518]/50 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5C518]/10 flex items-center justify-center mb-6 group-hover:bg-[#F5C518] transition-colors duration-300">
                        <protocol.icon className="w-6 h-6 text-[#D4A500] group-hover:text-[#333333] transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xl font-display text-primary mb-3">{protocol.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {protocol.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button 
                    onClick={() => scrollToSection("contato")}
                    className="bg-[#F5C518] hover:bg-[#D4A500] text-[#333333] font-medium rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Conhecer Projetos
                  </Button>
                </div>
              </motion.div>
            )}

            {/* OBRAS VIEW */}
            {activeTab === 2 && (
              <motion.div 
                key="obras"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-16 lg:p-24 relative flex flex-col items-center justify-center min-h-[500px]"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#6A7C67]" />

                <div className="w-20 h-20 bg-[#6A7C67]/10 rounded-full flex items-center justify-center mb-8">
                  <BookOpen className="w-10 h-10 text-[#6A7C67]" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl md:text-5xl font-display text-primary mb-6 text-center max-w-2xl leading-tight">
                  A escrita como gesto <br/>
                  <span className="italic font-light">de cuidado.</span>
                </h3>
                
                <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl leading-relaxed mb-12">
                  Uma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora.
                </p>
                
                <Button 
                  onClick={() => scrollToSection("contato")}
                  className="bg-[#6A7C67] hover:bg-[#5A6B57] text-white rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
                >
                  Explorar as Obras
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
