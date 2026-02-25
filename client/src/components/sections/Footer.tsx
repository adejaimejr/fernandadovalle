import { Instagram, Mail, MapPin, Clock } from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg> // Fallback to phone if strict svg needed, but user asked for WhatsApp specifically. 
  // Let's use a real path for WhatsApp logo if possible, or just the phone icon with text "WhatsApp".
  // Actually, Lucide doesn't have brand icons. I'll use the Phone icon but maybe style it green? 
  // User asked "mudar o icone para whatsapp". I will use a path that resembles the WA logo.
);

const WhatsAppLogo = ({ size = 15, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" // Use fill for brand color
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="contato" className="bg-[#2C2C2C] text-white/90 pt-8 md:pt-16 pb-8 border-t-4 border-[#6FB4B4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Photo - Col 1 (3 cols) */}
          <div className="md:col-span-3 hidden md:flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-[#6FB4B4]/30 shadow-lg">
                  <img 
                      src="/images/fernanda-footer.webp" 
                      alt="Fernanda do Valle" 
                      className="w-full h-full object-cover"
                  />
              </div>

              <p className="text-sm text-white/60 font-light tracking-wide pt-2 max-w-xs leading-relaxed">
                Psicologia sob medida. Um olhar ético, científico e humano para cada necessidade.
              </p>
            </div>
          </div>

          {/* Contact - Col 2 (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#6FB4B4]">Contato</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                   <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                    <WhatsAppLogo size={18} />
                  </div>
                  <a 
                    href="https://wa.me/5592981302000?text=Olá, Dra. Fernanda! Vim através do site e gostaria de mais informações." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col w-full"
                  >
                      <span className="text-xs text-white/40 uppercase">WhatsApp</span>
                      <span className="font-medium">(92) 98130-2000</span>
                  </a>
                </li>
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                     <Mail size={16} />
                  </div>
                  <a 
                    href="mailto:fernanda@ippam.com.br" 
                    className="flex flex-col w-full"
                  >
                      <span className="text-xs text-white/40 uppercase">Email</span>
                      <span>fernanda@ippam.com.br</span>
                  </a>
                </li>
                <li className="flex items-center space-x-3 hover:text-[#6FB4B4] transition-colors cursor-pointer group">
                   <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors">
                    <Instagram size={16} />
                  </div>
                  <a 
                    href="https://instagram.com/fernandadovallepessoa2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col overflow-hidden w-full"
                  >
                      <span className="text-xs text-white/40 uppercase">Instagram</span>
                      <span className="truncate text-sm">@fernandadovallepessoa2</span>
                  </a>
                </li>

                <li className="flex items-start space-x-3 group mt-3 pt-3 border-t border-white/5">
                   <div className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#6FB4B4]/20 transition-colors mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div className="flex flex-col text-sm text-white/80">
                      <span className="text-xs text-white/40 uppercase mb-1">Horário de Atendimento</span>
                      <span>Seg - Sex: 09:00h às 18h</span>
                      <span>Sáb: 09:00h às 12h</span>
                  </div>
                </li>
              </ul>
          </div>

          {/* Location & Map - Col 3 (6 cols) */}
          <div className="md:col-span-6 space-y-6">
             <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#6FB4B4]">Localização</h4>
                <div className="flex items-center space-x-2 text-white/60 text-xs">
                    <MapPin size={14} />
                    <span>Manaus, Amazonas</span>
                </div>
             </div>

             <div className="space-y-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  Av. Jacira Reis, 5051 Sala 7, 2 andar mall vipe - Dom Pedro, Manaus - AM, 69033-008, Brasil
                </p>
                
                <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-[#6FB4B4]/50">
                    <iframe 
                        src="https://maps.google.com/maps?q=Avenida%20Jacira%20Reis%2C%205051%20-%20Manaus%20-%20AM&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do Consultório"
                    ></iframe>
                </div>
             </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; 2026 Fernanda do Valle Pessoa.</p>
          <div className="mt-4 md:mt-0">
             <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                <span>Criado com</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-red-400 fill-red-400 animate-pulse" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                <span>por</span>
                <a href="https://i92tecnologia.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-[#6FB4B4] transition-colors border-b border-transparent hover:border-[#6FB4B4]">i92Tech</a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
