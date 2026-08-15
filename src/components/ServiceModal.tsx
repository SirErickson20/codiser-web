import React from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './IconHelper';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForConsultation
}) => {
  if (!service) return null;

  return (
    <div
      id="service-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#16284F] text-white px-6 py-6 flex items-start justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
              <DynamicIcon name={service.icon} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-700/50 inline-block mb-1">
                {service.category.toUpperCase()}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors relative z-10"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Enfoque Estratégico
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              ¿Qué incluye este servicio?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1E3A8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Value Banner */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-lg border border-blue-100 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              En <strong>CODISER</strong> adaptamos el alcance de {service.title.toLowerCase()} a las metas comerciales específicas de su organización, garantizando un seguimiento periódico con métricas transparentes.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForConsultation(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow hover:shadow-md transition-all"
          >
            Cotizar este Servicio <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
