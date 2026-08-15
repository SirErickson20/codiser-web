import React, { useState, useEffect } from 'react';
import { PageTab, ServiceItem, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { ContactView } from './views/ContactView';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('inicio');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialService, setConsultationInitialService] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Handle URL hash changes or internal navigations
  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (initialService = '') => {
    setConsultationInitialService(initialService);
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-[#1E3A8A] selection:text-white font-sans">
      {/* Top Main Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentTab === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onSelectService={handleSelectService}
          />
        )}

        {currentTab === 'nosotros' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentTab === 'servicios' && (
          <ServicesView
            onSelectService={handleSelectService}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentTab === 'trabajos' && (
          <ProjectsView
            onSelectProject={handleSelectProject}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentTab === 'contacto' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationInitialService}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForConsultation={(serviceTitle) => {
          handleOpenConsultation(serviceTitle);
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
