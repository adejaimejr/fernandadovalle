import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building2, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ThreeLayers() {
  const layers = [
    {
      id: "clinica",
      icon: User,
      label: "Clínica Psicológica",
      title: "Atendimento psicológico sob medida",
      description: "Na clínica, Fernanda do Valle atua diretamente como psicóloga responsável pelos atendimentos.",
      points: [
        "Psicoterapia individual",
        "Atendimento a adolescentes e adultos",
        "Modalidade online (e presencial)",
        "Foco em promoção e prevenção"
      ],
      closing: "O processo terapêutico não segue fórmulas prontas. Cada acompanhamento é construído de forma singular.",
      cta: "Agendar Conversa Inicial",
      bgClass: "bg-white",
      accentClass: "text-primary"
    },
    {
      id: "instituto",
      icon: Building2,
      label: "Instituto de Psicologia Positiva",
      title: "Protocolos e projetos que ampliam o cuidado",
      description: "Um espaço dedicado ao desenvolvimento de práticas em saúde mental que respeitam a singularidade humana.",
      points: [
        "Protocolos clínicos específicos",
        "Materiais terapêuticos",
        "Projetos de promoção em saúde",
        "Conteúdos formativos"
      ],
      closing: "O Instituto amplia o cuidado para além da clínica, alcançando pessoas, profissionais e instituições.",
      cta: "Conhecer o Instituto",
      bgClass: "bg-[#F8F6F3]",
      accentClass: "text-secondary-foreground"
    },
    {
      id: "obras",
      icon: BookOpen,
      label: "Livros e Obras",
      title: "Cuidado e informação através da leitura",
      description: "Livros em saúde mental que traduzem conceitos psicológicos de forma acessível, sensível e fundamentada.",
      points: [
        "Linguagem acessível",
        "Fundamentação científica",
        "Autoconhecimento",
        "Reflexão sobre saúde mental"
      ],
      closing: "A escrita também é um gesto de cuidado.",
      cta: "Explorar as Obras",
      bgClass: "bg-white",
      accentClass: "text-accent"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {layers.map((layer, index) => (
            <Card 
              key={layer.id} 
              id={layer.id}
              className={cn(
                "border-none shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full",
                layer.bgClass
              )}
            >
              <CardHeader className="space-y-4 pb-2">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-background border border-border/50", layer.accentClass)}>
                  <layer.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {layer.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display text-primary group-hover:text-primary/80 transition-colors">
                    {layer.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
                <ul className="space-y-3">
                  {layer.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-foreground/80">
                      <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0")} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className={cn("text-sm italic font-medium pt-2", layer.accentClass)}>
                  {layer.closing}
                </p>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border-0 transition-all duration-300 group-hover:translate-y-[-2px]">
                  {layer.cta} <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
