import React from 'react';
import { PageTab, ServiceItem } from '../types';
import { COMPANY_INFO, DISTINCTIONS, SERVICES_LIST } from '../data/siteData';
import { DynamicIcon } from '../components/IconHelper';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService
}) => {
  // Top 3 featured services for the home page
  const featuredServices = [
    {
      id: 'marketing-digital',
      title: 'Marketing Digital',
      desc: 'Gestión de redes, pauta online y posicionamiento.',
      icon: 'Megaphone',
      fullService: SERVICES_LIST.find((s) => s.id === 'marketing-digital') || SERVICES_LIST[0]
    },
    {
      id: 'diseno-branding',
      title: 'Diseño y Branding',
      desc: 'Identidad visual, diseño gráfico y desarrollo de marca.',
      icon: 'PenTool',
      fullService: SERVICES_LIST.find((s) => s.id === 'diseno-grafico') || SERVICES_LIST[1]
    },
    {
      id: 'medios-tradicionales',
      title: 'Medios Tradicionales',
      desc: 'Prensa, radio, televisión y vía pública.',
      icon: 'Tv',
      fullService: SERVICES_LIST.find((s) => s.id === 'medios-tradicionales') || SERVICES_LIST[9]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0D182E] text-white"
      >
        {/* Background photo with subtle dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Reunión de estrategia CODISER"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0F1E3A]/90 to-[#0B1528]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider animate-in fade-in duration-500">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Comunicación Estratégica & Marketing Integral</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white max-w-4xl mx-auto">
            La comunicación conecta marcas con personas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-300 to-sky-400">
              Nosotros creamos esa conexión.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {COMPANY_INFO.tagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] active:bg-[#0F172A] border border-blue-500/30 rounded shadow-lg hover:shadow-blue-900/30 transition-all duration-200"
            >
              ¿HABLAMOS?
            </button>
            <button
              onClick={() => onNavigate('servicios')}
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-slate-200 hover:text-white uppercase bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explorar Servicios <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. ¿Quiénes somos? Section */}
      <section id="quienes-somos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] block mb-2">
                Conoce a CODISER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                ¿Quiénes somos?
              </h2>
            </div>

            {/* Quote block with left vertical blue accent line as in screenshot */}
            <div className="border-l-4 border-[#1E3A8A] pl-5 sm:pl-6 py-1">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {COMPANY_INFO.aboutBrief}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Combinamos la solidez de los medios masivos con la precisión y dinamismo del entorno digital para construir marcas memorables y rentables.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('nosotros')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#16284F] transition-colors"
              >
                Conocer más sobre nuestra agencia <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[4/3] lg:aspect-auto lg:h-[380px] group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Edificio corporativo CODISER"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-lg border border-white/50 text-slate-800 text-xs font-medium">
                <span className="font-bold text-[#1E3A8A]">CODISER Servicios Digitales</span> • San Salvador de Jujuy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿Qué nos distingue? Section */}
      <section id="que-nos-distingue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight inline-block relative pb-3">
            ¿Qué nos distingue?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#1E3A8A] rounded-full" />
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISTINCTIONS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                <DynamicIcon name={item.icon} className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Nuestros Servicios Section */}
      <section id="nuestros-servicios-home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-slate-200 pb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Soluciones integrales para tu comunicación.
            </p>
          </div>

          <button
            onClick={() => onNavigate('servicios')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] hover:text-[#16284F] self-start sm:self-auto transition-colors"
          >
            VER TODOS LOS SERVICIOS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.fullService)}
              className="group bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  <DynamicIcon name={service.icon} className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#16284F]">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Banner Section */}
      <section id="home-cta-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#16284F] text-white p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-xl">
          {/* Subtle background tech pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Estamos listos para potenciar tu comunicación.
            </h2>
            <p className="text-sm sm:text-base text-blue-200">
              Coordinemos una reunión estratégica para analizar las metas y desafíos de su empresa.
            </p>
            <div className="pt-2">
              <button
                id="banner-hablamos-btn"
                onClick={onOpenConsultation}
                className="px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-[#16284F] uppercase bg-white hover:bg-slate-100 active:bg-slate-200 rounded shadow-md hover:shadow-lg transition-all duration-200"
              >
                ¿HABLAMOS?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
