import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/siteData';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, Copy, Check } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Marketing Digital',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 800);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header */}
      <section id="contact-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A] block">
            Contacto Directo
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Estamos listos para potenciar tu comunicación.{' '}
            <span className="text-[#1E3A8A]">¿Hablamos?</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dejanos tus datos y un especialista de nuestro equipo se pondrá en contacto con vos a la brevedad para analizar las necesidades de tu marca.
          </p>
        </div>
      </section>

      {/* 2. Main 2-Column Content */}
      <section id="contact-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {formState === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Gracias por comunicarte, <strong>{formData.fullName}</strong>. Nuestro equipo comercial se contactará al teléfono <strong>{formData.phone}</strong> o al correo <strong>{formData.email}</strong> para coordinar los próximos pasos.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormState('idle');
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        service: 'Marketing Digital',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. Martín Rodríguez"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Empresa / Marca <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Distribuidora del Norte"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="martin@empresa.com"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 9 388 000 0000"
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Servicio de Interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none bg-white text-slate-800"
                  >
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Marketing en Redes Sociales">Marketing en Redes Sociales</option>
                    <option value="Diseño y Branding">Diseño y Branding</option>
                    <option value="Pauta Publicitaria y Medios">Pauta Publicitaria y Medios</option>
                    <option value="Campañas Tradicionales">Campañas Tradicionales</option>
                    <option value="Estrategia de Contenido">Estrategia de Contenido</option>
                    <option value="Gestión de Relaciones (CRM)">Gestión de Relaciones (CRM)</option>
                    <option value="Medios Tradicionales (Radio/TV)">Medios Tradicionales (Radio/TV)</option>
                    <option value="Pantallas LED">Pantallas LED</option>
                    <option value="Desarrollo Web Integral">Desarrollo Web Integral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escriba aquí los detalles de su consulta o proyecto..."
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold tracking-widest text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70"
                  >
                    {formState === 'submitting' ? (
                      'Enviando Mensaje...'
                    ) : (
                      <>
                        ENVIAR MENSAJE <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Información de Contacto Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 pb-3 border-b border-slate-200">
                Información de Contacto
              </h2>

              <div className="space-y-5">
                {/* Oficina */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Nuestra Oficina
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-600">
                      {COMPANY_INFO.city}
                    </p>
                  </div>
                </div>

                {/* Email Directo */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Email Directo
                    </h4>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-semibold text-[#1E3A8A] hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <button
                        onClick={() => copyToClipboard(COMPANY_INFO.email, 'email')}
                        className="text-slate-400 hover:text-slate-600 p-1 rounded"
                        title="Copiar email"
                      >
                        {copiedField === 'email' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Líneas de Atención */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Líneas de Atención
                    </h4>
                    <p className="text-xs text-slate-600 mb-1">
                      {COMPANY_INFO.schedule}
                    </p>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1E3A8A] hover:underline flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Location & Map Card */}
              <div className="pt-2">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" /> Ubicación Central
                    </span>
                    <a
                      href="https://maps.google.com/?q=San+Martin+639+San+Salvador+de+Jujuy+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-300 hover:text-white flex items-center gap-1 font-semibold"
                    >
                      Ver en Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300">
                    En pleno centro cívico y comercial de San Salvador de Jujuy, con fácil acceso y atención corporativa personalizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
