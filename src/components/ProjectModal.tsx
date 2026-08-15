import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Quote, ExternalLink, Sparkles, Building, Calendar } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div
      id="project-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#16284F] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-700/50">
                {project.tag}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {project.year}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="space-y-2">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src={project.gallery[activeImageIndex] || project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5 font-medium">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                Cliente: {project.client}
              </div>
            </div>

            {/* Thumbnail selector */}
            {project.gallery.length > 1 && (
              <div className="flex gap-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#1E3A8A] scale-105 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-[#1E3A8A]">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-lg bg-red-50/50 border border-red-100 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" /> El Desafío
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> La Solución CODISER
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Testimonial if available */}
          {project.testimonial && (
            <div className="p-4 bg-slate-900 text-white rounded-xl relative overflow-hidden">
              <Quote className="absolute right-4 bottom-2 w-16 h-16 text-slate-800 -rotate-12 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <p className="text-sm italic text-slate-200 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="text-xs">
                  <span className="font-bold text-white block">{project.testimonial.author}</span>
                  <span className="text-slate-400">{project.testimonial.role}</span>
                </div>
              </div>
            </div>
          )}
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
              onOpenConsultation();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow hover:shadow-md transition-all"
          >
            Obtener Resultados Similares <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
