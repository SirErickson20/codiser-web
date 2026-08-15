import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO, CORE_VALUES, MARKET_TARGETS } from '../data/siteData';
import { DynamicIcon } from '../components/IconHelper';
import { ArrowRight, Shield, Award, Sparkles, Target } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero / Agency Header Section */}
      <section
        id="about-hero"
        className="relative bg-gradient-to-b from-slate-900 via-[#101F3C] to-slate-900 text-white py-16 sm:py-24 overflow-hidden"
      >
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
            alt="Oficinas de CODISER"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-800/60">
            Nuestra Agencia
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Innovación Digital con Base Sólida
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-justify sm:text-center">
            {COMPANY_INFO.aboutFull}
          </p>
        </div>
      </section>

      {/* 2. Nuestros Valores Section */}
      <section id="nuestros-valores" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Valores
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Los pilares sobre los que construimos la confianza de nuestros clientes regionales y nacionales.
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                <DynamicIcon name={val.icon} className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mercado Objetivo Section */}
      <section id="mercado-objetivo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] block mb-1">
              Ecosistema Integral
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mercado Objetivo
            </h2>
          </div>

          <button
            onClick={() => onNavigate('trabajos')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#16284F] transition-colors"
          >
            VER CASOS DE ÉXITO <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Layout matching design screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Large Card: Radio, TV y Gráfica */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-slate-900 text-white min-h-[340px] flex flex-col justify-end p-6 sm:p-8 group shadow-sm border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80"
              alt="Radio, TV y Gráfica"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-900/80 px-2.5 py-0.5 rounded border border-blue-700 inline-block">
                MEDIOS TRADICIONALES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Radio, TV y Gráfica
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Modernización y extensión digital para medios tradicionales que buscan amplificar su audiencia y mantener relevancia.
              </p>
            </div>
          </div>

          {/* Right Column: Redes Sociales + Split (Empresas & Emergentes) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Right: Redes Sociales */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                  <DynamicIcon name="Share2" className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  ECOSISTEMA DIGITAL
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Redes Sociales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gestión estratégica, creación de contenido de alto impacto y campañas publicitarias segmentadas para máxima conversión.
              </p>
            </div>

            {/* Bottom Split 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Empresas y Comercios */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                  <DynamicIcon name="Building2" className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Empresas y Comercios</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transformación digital integral para negocios establecidos que buscan consolidar su liderazgo de mercado.
                </p>
              </div>

              {/* Marcas Emergentes */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                  <DynamicIcon name="Rocket" className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Marcas Emergentes</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Identidad visual sólida y estrategias de lanzamiento efectivas para proyectos en fase de aceleración.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="about-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#16284F] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para escalar su presencia digital?
            </h2>
            <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
              Contacte con nuestro equipo para una auditoría inicial y descubra cómo podemos optimizar su estrategia de comunicación.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-[#16284F] uppercase bg-white hover:bg-slate-100 rounded shadow-md hover:shadow-lg transition-all duration-200"
              >
                AGENDAR CONSULTORÍA
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
