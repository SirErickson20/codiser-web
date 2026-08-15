import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_LIST } from '../data/siteData';
import { ArrowRight, ExternalLink, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ProjectsViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onSelectProject,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Trabajos' },
    { id: 'web', label: 'Desarrollo Web & Marketing' },
    { id: 'corporate', label: 'Plataformas Corporativas' },
    { id: 'ecommerce', label: 'E-Commerce & Branding' }
  ];

  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return proj.id === 'guiaza-arrendamientos';
    if (activeCategory === 'corporate') return proj.id === 'crystal-desarrollo';
    if (activeCategory === 'ecommerce') return proj.id === 'piedra-de-luna-joyas';
    return true;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header Section */}
      <section id="projects-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] block">
            Casos de Éxito y Portafolio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Nuestros Trabajos
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Aplicamos experiencia y conocimiento para desarrollar proyectos digitales que impulsan el crecimiento y la presencia de marca de nuestros clientes en el mercado.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#16284F] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Projects Grid */}
      <section id="projects-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-3 left-3 bg-[#16284F]/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                  {project.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key metric highlights */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-[#1E3A8A]" />
                    <span>{project.metrics[0]?.label}: <strong>{project.metrics[0]?.value}</strong></span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] group-hover:text-[#16284F]">
                  <span>Ver Proyecto</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#16284F] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Listo para convertir su proyecto en el próximo caso de éxito?
            </h2>
            <p className="text-sm sm:text-base text-blue-200">
              Desarrollamos estrategias a medida orientadas a la rentabilidad y consolidación de marca.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest text-[#16284F] uppercase bg-white hover:bg-slate-100 rounded shadow-md hover:shadow-lg transition-all duration-200"
              >
                INICIAR MI PROYECTO
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
