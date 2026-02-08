import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#2C2C2C] text-white/90 pt-16 pb-8 border-t-4 border-primary">
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
            <p className="text-sm text-white/60 font-light tracking-wide pt-2">
              Psicologia sob medida.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#clinica" className="hover:text-primary transition-colors">Clínica</a></li>
              <li><a href="#instituto" className="hover:text-primary transition-colors">Instituto</a></li>
              <li><a href="#obras" className="hover:text-primary transition-colors">Obras</a></li>
              <li><a href="#formacao" className="hover:text-primary transition-colors">Formação</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span>CRP: 20/03477</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                <Mail size={14} />
                <span>contato@fernandadovalle.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Manaus, Amazonas</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                <Instagram size={14} />
                <span>@fernandadovalle_psi</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary/80">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Código de Ética</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; 2025 Fernanda do Valle Pessoa. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com cuidado.</p>
        </div>
      </div>
    </footer>
  );
}
