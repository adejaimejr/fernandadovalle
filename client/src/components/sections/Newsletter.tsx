import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-10 bg-[#6FB4B4] border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          
          <div className="flex items-center gap-4 text-white">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
               <Mail size={20} />
            </div>
            <div>
              <h3 className="font-display text-xl leading-none mb-1">Newsletter</h3>
              <p className="text-white/80 text-xs font-light tracking-wide">
                Receba conteúdos exclusivos sobre saúde mental.
              </p>
            </div>
          </div>

          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Seu email..." 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full w-full md:w-64 focus-visible:ring-white/50 focus-visible:border-white"
            />
            <Button size="icon" className="rounded-full bg-white text-[#6FB4B4] hover:bg-[#F5C518] hover:text-white transition-colors shadow-sm shrink-0">
              <ArrowRight size={18} />
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
}
