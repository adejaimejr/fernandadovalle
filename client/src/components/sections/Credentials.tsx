import { BadgeCheck, GraduationCap, Award, Book } from "lucide-react";

export function Credentials() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Especialista em TCC",
      desc: "Formação voltada à avaliação psicológica, formulação de caso e intervenções clínicas eficazes."
    },
    {
      icon: Book,
      title: "University of Pennsylvania",
      desc: "Especialização em Psicologia Positiva, com aprofundamento em bem-estar e forças de caráter."
    },
    {
      icon: Award,
      title: "Harvard University",
      desc: "Certificação em desenvolvimento de habilidades psicológicas positivas e resiliência."
    },
    {
      icon: BadgeCheck,
      title: "CRP 20/03477",
      desc: "Registro ativo no Conselho Regional de Psicologia, garantindo prática ética."
    }
  ];

  return (
    <section id="formacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Intro Column */}
          <div className="lg:w-1/3 space-y-6">
            <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Formação e Certificações
            </span>
            <h2 className="text-3xl md:text-4xl text-primary leading-tight">
              Prática baseada em ciência e evidências
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fernanda do Valle Pessoa é psicóloga clínica (CRP 20/03477), com formação sólida e certificações nacionais e internacionais na área da saúde mental.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sua atuação é fundamentada em práticas baseadas em evidências científicas, com foco na promoção, prevenção e cuidado psicológico personalizado.
            </p>
          </div>

          {/* Grid Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 text-primary flex items-center justify-center mb-4">
                  <cred.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  {cred.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
