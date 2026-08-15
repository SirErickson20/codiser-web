import React, { useState } from 'react';
import { ServiceItem, PageTab } from '../types';
import { SERVICES_LIST } from '../data/siteData';
import { DynamicIcon } from '../components/IconHelper';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ServicesViewProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'digital' | 'traditional' | 'branding' | 'strategy'>('all');

  const filters = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'digital', label: 'Marketing Digital' },
    { id: 'traditional', label: 'Medios Tradicionales' },
    { id: 'branding', label: 'Diseño & Branding' },
    { id: 'strategy', label: 'Estrategia & Consultoría' }
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (selectedFilter === 'all') return true;
    return srv.category === selectedFilter;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header Section */}
      <section id="services-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] block">
            Nuestra Propuesta de Valor
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Servicios Estratégicos
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Un enfoque integral en comunicación institucional, marketing y publicidad. Soluciones estratégicas para construir, posicionar y hacer crecer marcas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-[#16284F] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Services Grid */}
      <section id="services-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isHighlighted = service.isHighlighted;
            const isWide = service.isWide && selectedFilter === 'all';

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`group p-6 sm:p-7 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-lg ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                } ${
                  isHighlighted
                    ? 'bg-[#16284F] text-white border-[#1E3A8A]'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isHighlighted
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white'
                      }`}
                    >
                      <DynamicIcon name={service.icon} className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        isHighlighted
                          ? 'bg-blue-900/80 text-blue-300 border border-blue-700/50'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <div>
                    <h3
                      className={`text-lg font-bold mb-2 transition-colors ${
                        isHighlighted
                          ? 'text-white'
                          : 'text-slate-900 group-hover:text-[#1E3A8A]'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isHighlighted ? 'text-blue-100' : 'text-slate-600'
                      }`}
                    >
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div
                  className={`pt-5 mt-5 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
                    isHighlighted
                      ? 'border-blue-900/80 text-blue-300 group-hover:text-white'
                      : 'border-slate-100 text-[#1E3A8A] group-hover:text-[#16284F]'
                  }`}
                >
                  <span>Ver detalles y alcance</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              ¿Necesita una solución personalizada para su empresa?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Diseñamos paquetes a medida combinando medios tradicionales, redes sociales y plataformas digitales según su presupuesto.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow transition-all"
          >
            Solicitar Asesoramiento
          </button>
        </div>
      </section>
    </div>
  );
};
