import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ThreeLayers() {
  const layers = [
    {
      id: "clinica",
      label: "Camada 01",
      title: "Clínica Psicológica",
      subtitle: "Atendimento individual",
      description: "Um espaço de escuta qualificada, onde Fernanda do Valle atua diretamente com psicoterapia para adolescentes e adultos. O foco é a promoção da saúde mental e o cuidado personalizado.",
      cta: "Agendar Sessão",
      image: "/images/portrait-smiling.webp",
      color: "bg-[#6FB4B4]",
      textColor: "text-[#6FB4B4]",
      borderColor: "border-[#6FB4B4]",
      lightColor: "bg-[#6FB4B4]/10"
    },
    {
      id: "instituto",
      label: "Camada 02",
      title: "IPPAM",
      subtitle: "Instituto de Psicologia Positiva",
      description: "O IPPAM é um espaço dedicado à prevenção em saúde mental, à construção de habilidades socioemocionais e ao fortalecimento de forças psicológicas para o bem-estar.",
      cta: "Conhecer Projetos",
      image: "/images/institute-logo.webp",
      color: "bg-[#F5C518]",
      textColor: "text-[#D4A500]",
      borderColor: "border-[#F5C518]",
      lightColor: "bg-[#F5C518]/10",
      isLogo: true
    },
    {
      id: "obras",
      label: "Camada 03",
      title: "Livros e Obras",
      subtitle: "Leitura e Reflexão",
      description: "A escrita como gesto de cuidado:\n\nUma coletânea de contos, crônicas, poesias, ensaios e artigos em saúde mental, que transforma conceitos complexos da psicologia em uma linguagem acessível e acolhedora",
      cta: "Explorar Obras",
      image: "/images/fernanda-books-leaning.webp",
      color: "bg-[#6A7C67]",
      textColor: "text-[#6A7C67]",
      borderColor: "border-[#6A7C67]",
      lightColor: "bg-[#6A7C67]/10"
    }
  ];

  return (
    <section id="camadas" className="py-12 md:py-20 bg-background relative z-10 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
            Abordagem Integrada
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-4">
            Três camadas de cuidado
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
            A psicologia sob medida se manifesta através de três frentes integradas, cada uma desenhada para atender diferentes necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              id={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col scroll-mt-32"
            >
              {/* Image Header */}
              <div className={cn("h-72 overflow-hidden relative shrink-0", layer.isLogo ? "bg-[#FFC60B]" : "")}>
                <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-0 z-10", layer.color)} />
                <img 
                  src={layer.image} 
                  alt={layer.title} 
                  className={cn(
                    "w-full h-full transition-transform duration-700",
                    layer.isLogo 
                      ? "object-contain p-8 group-hover:scale-105" 
                      : "object-cover group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                  )}
                />
                
                {/* Floating Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm py-1 px-3 rounded-full border border-white/50 z-20 shadow-sm">
                  <span className={cn("text-[10px] font-bold uppercase tracking-wider", layer.textColor)}>
                    {layer.label}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 relative flex flex-col flex-grow">
                <div className={cn("absolute top-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left", layer.color)} />
                
                <h3 className="text-xl font-display text-primary mb-1">{layer.title}</h3>
                <p className={cn("text-xs font-semibold mb-2", layer.textColor)}>{layer.subtitle}</p>
                
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm flex-grow line-clamp-6 whitespace-pre-line">
                  {layer.description}
                </p>

                <div className="mt-auto">
                   <Button 
                    variant="ghost" 
                    className={cn("pl-0 hover:bg-transparent text-sm font-bold group/btn transition-colors h-auto py-0 uppercase tracking-wide", layer.textColor)}
                  >
                    {layer.cta} 
                    <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
