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
      image: "/images/portrait-smiling.jpg",
      color: "bg-[#6FB4B4]",
      textColor: "text-[#6FB4B4]",
      borderColor: "border-[#6FB4B4]",
      lightColor: "bg-[#6FB4B4]/10"
    },
    {
      id: "instituto",
      label: "Camada 02",
      title: "O Instituto",
      subtitle: "Projetos e Ensino",
      description: "Um braço educacional e institucional dedicado ao desenvolvimento de protocolos, materiais terapêuticos e projetos de prevenção que ampliam o alcance da psicologia.",
      cta: "Conhecer Projetos",
      image: "/images/institute-lotus.jpg",
      color: "bg-[#F5C518]",
      textColor: "text-[#D4A500]",
      borderColor: "border-[#F5C518]",
      lightColor: "bg-[#F5C518]/10"
    },
    {
      id: "obras",
      label: "Camada 03",
      title: "Livros e Obras",
      subtitle: "Leitura e Reflexão",
      description: "A escrita como gesto de cuidado. Obras que traduzem conceitos complexos da psicologia para uma linguagem acessível, permitindo que a informação de qualidade chegue a mais pessoas.",
      cta: "Explorar Obras",
      image: "/images/books-leaning.jpg",
      color: "bg-[#6A7C67]",
      textColor: "text-[#6A7C67]",
      borderColor: "border-[#6A7C67]",
      lightColor: "bg-[#6A7C67]/10"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-3 block">
            Abordagem Integrada
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-6">
            Três camadas de cuidado
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A psicologia sob medida se manifesta através de três frentes integradas, cada uma desenhada para atender diferentes necessidades e momentos de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50"
            >
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-0 z-10", layer.color)} />
                <img 
                  src={layer.image} 
                  alt={layer.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur py-1 px-3 rounded-full border border-white/50 z-20">
                  <span className={cn("text-xs font-bold uppercase tracking-wider", layer.textColor)}>
                    {layer.label}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 relative">
                <div className={cn("absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left", layer.color)} />
                
                <h3 className="text-2xl font-display text-primary mb-1">{layer.title}</h3>
                <p className={cn("text-sm font-medium mb-4", layer.textColor)}>{layer.subtitle}</p>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  {layer.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <Button 
                    variant="ghost" 
                    className={cn("pl-0 hover:bg-transparent text-base font-semibold group/btn transition-colors", layer.textColor)}
                  >
                    {layer.cta} 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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
