import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

export function Presentation() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F8F6F3] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-full bg-[#E8BBA3]/5 rounded-l-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-24">
          
          {/* Image Side - Refined */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative flex justify-center md:justify-end pr-0 md:pr-12"
          >
            {/* Structural Elements for "Harmony" */}
            <div className="relative w-full max-w-md">
              
              {/* 1. The Decorative Frame (Elegant & Thin) */}
              <div className="absolute -z-10 top-5 -left-5 w-full h-full border border-[#DAC8BA] rounded-[1rem] hidden md:block" />

              {/* 2. The Main Image Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl bg-white">
                <img 
                  src="/images/fernanda-seated-black.webp" 
                  alt="Fernanda do Valle Pessoa, psicóloga clínica em Manaus, em seu consultório"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                
                {/* 3. Refined Overlay - Subtle Dark Gradient for White Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90 translate-y-[20%]" />
                
                {/* 4. Elegant Text - Pure White as requested */}
                <div className="absolute bottom-8 left-8 max-w-[90%]">
                  <p className="font-script text-4xl md:text-5xl mb-3 text-white drop-shadow-md">Fernanda do Valle</p>
                  <div className="flex items-center gap-3">
                    <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/90 drop-shadow-sm">Psicóloga & Escritora</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8 pl-0 md:pl-12"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display text-primary mb-6">
                Sobre Fernanda
              </h2>
              <div className="w-16 h-1 bg-[#6FB4B4] rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                <strong className="text-primary font-medium">Psicóloga clínica (CRP 20/03477)</strong>, escritora em saúde mental e fundadora do Instituto de Psicologia Positiva do Amazonas. Mas, para além dos títulos, Fernanda é uma profissional que acredita profundamente na escuta.
              </p>
              <p>
                Fundamentada em evidências científicas e com formações internacionais, ela construiu uma prática que não separa a técnica da humanidade. Seja no consultório, na idealização de projetos educacionais ou na escrita de seus livros, o propósito é sempre o mesmo:
              </p>
              <blockquote className="border-l-4 border-[#F5C518] pl-6 py-2 my-8 text-xl font-display text-secondary-foreground italic bg-transparent">
                "Oferecer um cuidado que respeite o tempo e a singularidade de cada história."
              </blockquote>
              <p>
                Clínica, Instituto e obras não são frentes isoladas, são camadas integradas de uma psicologia sob medida, que se adapta ao modo como cada pessoa pode e deseja cuidar de si.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
