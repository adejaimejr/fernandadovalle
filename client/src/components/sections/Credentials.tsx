import { BadgeCheck, GraduationCap, Award, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function Credentials() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Especialista em TCC",
      desc: "Formação voltada à avaliação psicológica, formulação de caso e intervenções clínicas eficazes."
    },
    {
      icon: BookOpen,
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
    <section id="formacao" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Intro Column */}
          <div className="lg:w-1/3 space-y-8 sticky top-24">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#D4A500] uppercase mb-3 block">
                Formação e Certificações
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary leading-[1.15]">
                Prática baseada em ciência e evidências
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                Fernanda do Valle Pessoa é psicóloga clínica (CRP 20/03477), com formação sólida e certificações nacionais e internacionais na área da saúde mental.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Sua atuação é fundamentada em práticas baseadas em evidências científicas, com foco na promoção, prevenção e cuidado psicológico personalizado.
              </p>
            </div>

            <div className="h-0.5 w-12 bg-[#F5C518]" />
          </div>

          {/* Grid Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {credentials.map((cred, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl border border-border/40 hover:border-[#F5C518]/30 transition-all duration-500 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(245,197,24,0.2)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5C518]/10 text-[#D4A500] flex items-center justify-center mb-6 group-hover:bg-[#F5C518] group-hover:text-[#333333] transition-colors duration-500">
                  <cred.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display text-primary mb-3 group-hover:text-[#D4A500] transition-colors duration-300">
                  {cred.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
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
