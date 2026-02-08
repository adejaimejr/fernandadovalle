import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

export function Presentation() {
  return (
    <section id="sobre" className="py-24 bg-[#F8F6F3] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-full bg-[#E8BBA3]/5 rounded-l-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side - Refined */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/reading-side.jpg" 
                alt="Fernanda do Valle Pessoa lendo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
                <p className="font-script text-3xl mb-1">Fernanda do Valle</p>
                <p className="text-xs font-light uppercase tracking-widest opacity-90">Psicóloga & Escritora</p>
              </div>
            </div>
            
            {/* Decorative Offset Border */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-[#DAC8BA] rounded-2xl hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12 space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-display text-primary mb-4">
                Sobre Fernanda
              </h2>
              <div className="w-20 h-1 bg-[#6FB4B4] rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                <strong className="text-primary font-medium">Psicóloga clínica (CRP 20/03477)</strong>, escritora em saúde mental e fundadora do Instituto de Psicologia Positiva do Amazonas. Mas, para além dos títulos, Fernanda é uma profissional que acredita profundamente na escuta.
              </p>
              <p>
                Fundamentada em evidências científicas e com formações internacionais, ela construiu uma prática que não separa a técnica da humanidade. Seja no consultório, na idealização de projetos educacionais ou na escrita de seus livros, o propósito é sempre o mesmo:
              </p>
              <blockquote className="border-l-4 border-[#F5C518] pl-6 py-2 my-6 text-xl font-display text-secondary-foreground italic bg-white/50 rounded-r-lg">
                "Oferecer um cuidado que respeite o tempo e a singularidade de cada história."
              </blockquote>
              <p>
                Clínica, Instituto e obras não são frentes isoladas — são camadas integradas de uma psicologia sob medida, que se adapta ao modo como cada pessoa pode e deseja cuidar de si.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm text-[#8C7B75] shadow-sm border border-[#8C7B75]/20">Terapia Cognitivo-Comportamental</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-[#8C7B75] shadow-sm border border-[#8C7B75]/20">Psicologia Positiva (UPenn)</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-[#8C7B75] shadow-sm border border-[#8C7B75]/20">Resiliência (Harvard)</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
