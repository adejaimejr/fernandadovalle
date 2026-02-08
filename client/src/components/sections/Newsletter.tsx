import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-[#6FB4B4] relative">
       {/* Visual connector to remove gap */}
       <div className="absolute top-0 left-0 w-full h-12 -mt-12 bg-gradient-to-t from-[#FAF9F6] to-[#FAF9F6] z-0 pointer-events-none" />
       
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          
          <div className="flex items-center gap-4 text-white text-center md:text-left">
            <div className="hidden md:flex w-10 h-10 rounded-full bg-white/20 items-center justify-center shrink-0">
               <Mail size={18} />
            </div>
            <div>
              <h3 className="font-display text-xl leading-tight mb-0.5 text-white font-medium">
                Fique por dentro
              </h3>
              <p className="text-white/90 text-xs font-light tracking-wide">
                Novidades exclusivas sobre saúde mental.
              </p>
            </div>
          </div>

          <form className="flex w-full md:w-auto gap-2 items-center" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full md:w-72 group">
              <Input 
                type="email" 
                placeholder="Seu melhor email" 
                className="bg-white/10 border border-white/30 text-white placeholder:text-white/70 rounded-full w-full h-10 pl-4 pr-4 focus-visible:ring-1 focus-visible:ring-white focus-visible:border-white transition-all text-sm shadow-sm hover:bg-white/20"
              />
            </div>
            <Button size="icon" className="h-10 w-10 rounded-full bg-white text-[#6FB4B4] hover:bg-[#F5C518] hover:text-white transition-all shadow-md shrink-0 border border-white/20 hover:border-transparent">
              <ArrowRight size={18} />
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}
