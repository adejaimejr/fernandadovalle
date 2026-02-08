import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-12 bg-[#6FB4B4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-4xl mx-auto">
          
          <div className="flex items-center gap-4 text-white text-center md:text-left">
            <div className="hidden md:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center shrink-0">
               <Mail size={22} />
            </div>
            <div>
              <h3 className="font-display text-2xl leading-tight mb-1">
                Fique por dentro
              </h3>
              <p className="text-white/90 text-sm font-light">
                Receba conteúdos exclusivos sobre saúde mental e bem-estar.
              </p>
            </div>
          </div>

          <form className="flex w-full md:w-auto gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Seu melhor email" 
              className="bg-white border-0 text-[#2C2C2C] placeholder:text-gray-400 rounded-full w-full md:w-72 h-11 pl-5 pr-4 focus-visible:ring-2 focus-visible:ring-white/50 shadow-sm"
            />
            <Button size="icon" className="h-11 w-11 rounded-full bg-[#F5C518] text-[#333333] hover:bg-[#D4A500] hover:scale-105 transition-all shadow-md shrink-0 border-2 border-transparent">
              <ArrowRight size={20} />
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}
