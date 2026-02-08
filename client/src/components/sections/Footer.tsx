import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#2C2C2C] text-white/90 pt-16 pb-8 border-t-4 border-[#6FB4B4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="h-10 w-auto overflow-hidden opacity-90 brightness-0 invert">
               <img 
                 src="/images/fernanda-logo-turquesa.jpg" 
                 alt="fv Fernanda do Valle" 
                 className="h-full w-auto object-contain"
               />
            </div>
            <p className="text-sm text-white/60 font-light tracking-wide pt-2 max-w-xs">
              Psicologia sob medida. Um olhar ético, científico e humano para cada necessidade.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#6FB4B4]">Contato & Localização</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                     <Mail size={15} />
                  </div>
                  <span>fernanda@ippam.com.br</span>
                </li>
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                    <Phone size={15} />
                  </div>
                  <span>(92) 98130-2000</span>
                </li>
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                    <Instagram size={15} />
                  </div>
                  <span>@fernandadovallepessoa2</span>
                </li>
              </ul>

              <ul className="space-y-3 text-sm">
                 <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-[-2px]">
                      <MapPin size={15} />
                    </div>
                    <div className="text-white/80 leading-relaxed">
                      <p>Avenida Jacira Reis, 5051</p>
                      <p>Manaus - AM</p>
                      <p className="text-white/50 text-xs mt-0.5">CEP 69033-008</p>
                    </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal / CRP */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#6FB4B4]">Registro Profissional</h4>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Psicóloga Responsável</p>
              <p className="font-display text-lg text-white mb-1">Fernanda do Valle Pessoa</p>
              <p className="text-sm font-mono text-[#6FB4B4]">CRP 20/03477</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; 2026 Fernanda do Valle Pessoa. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
