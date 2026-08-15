import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Logo } from './Logo';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNavClick = (tab: PageTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#121824] text-slate-300 border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left focus:outline-none"
              aria-label="CODISER Inicio"
            >
              <Logo variant="light" size="md" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Agencia de comunicación integral y marketing estratégico orientada a resultados corporativos medibles y tangibles.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
              >
                Solicitar Propuesta <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Inicio', tab: 'inicio' as PageTab },
                { label: 'Nosotros', tab: 'nosotros' as PageTab },
                { label: 'Servicios', tab: 'servicios' as PageTab },
                { label: 'Trabajos y Casos', tab: 'trabajos' as PageTab },
                { label: 'Contacto Directo', tab: 'contacto' as PageTab }
              ].map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => handleNavClick(link.tab)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 flex items-center gap-1 text-left"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Oficina Central
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}<br />
                  {COMPANY_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Social & Follow */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Síguenos
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Conéctate con nosotros en nuestras plataformas oficiales:
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram de CODISER"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook de CODISER"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn de CODISER"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-4 p-3 bg-slate-800/40 rounded border border-slate-800">
              <p className="text-[11px] text-slate-400">
                Horario de atención:<br />
                <span className="text-slate-200 font-medium">{COMPANY_INFO.schedule}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#0C1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>San Salvador de Jujuy, Argentina</span>
            <span>•</span>
            <button
              onClick={() => handleNavClick('contacto')}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
