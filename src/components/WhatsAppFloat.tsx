import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola CODISER, me gustaría recibir más información sobre sus servicios de comunicación y marketing.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs px-3 py-2 rounded-lg shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 max-w-[220px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 bg-slate-200 hover:bg-slate-300 rounded-full p-0.5 text-slate-600"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-[#16284F]">¿Tenés una consulta?</p>
          <p className="text-[11px] text-slate-500">Chateá con un asesor ahora por WhatsApp.</p>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2]" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
