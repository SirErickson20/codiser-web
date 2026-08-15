import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: PageTab }[] = [
    { label: 'Inicio', tab: 'inicio' },
    { label: 'Nosotros', tab: 'nosotros' },
    { label: 'Servicios', tab: 'servicios' },
    { label: 'Trabajos', tab: 'trabajos' },
    { label: 'Contacto', tab: 'contacto' }
  ];

  const handleNavClick = (tab: PageTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
            aria-label="Ir a Inicio"
          >
            <Logo variant="dark" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  id={`nav-link-${item.tab}`}
                  onClick={() => handleNavClick(item.tab)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-[#1E3A8A] font-semibold'
                      : 'text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1E3A8A] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Button: "CONSULTAR" */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-consult-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-all duration-200 bg-[#16284F] hover:bg-[#1E3A8A] active:bg-[#0F172A] rounded shadow-sm hover:shadow"
            >
              CONSULTAR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="header-consult-btn-mobile"
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-xs font-bold text-white uppercase bg-[#16284F] rounded"
            >
              CONSULTAR
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200"
        >
          {navItems.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#1E3A8A] font-bold border-l-4 border-[#1E3A8A]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold tracking-wider text-white uppercase bg-[#16284F] rounded shadow"
            >
              <PhoneCall className="w-4 h-4" />
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
