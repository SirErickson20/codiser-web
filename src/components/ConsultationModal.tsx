import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/siteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || SERVICES_LIST[0]?.title || '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setStatus('error');
      setErrorMessage('La clave de Web3Forms (VITE_WEB3FORMS_ACCESS_KEY) no está configurada. Por favor, agrégala en tu archivo .env o en el panel de control de Vercel.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Consulta Estratégica CODISEr: ${formData.service} - ${formData.fullName}`,
          from_name: 'CODISEr Web',
          name: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Error del servidor de formularios Web3Forms.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Error de red. Por favor, comprueba tu conexión a internet.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: SERVICES_LIST[0]?.title || '',
      message: ''
    });
    onClose();
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#16284F] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Solicitar Consulta Estratégica</h2>
              <p className="text-xs text-blue-200">Analicemos juntos el potencial de tu marca</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Gracias <strong>{formData.fullName}</strong>. Un especialista del equipo de CODISER revisará los requerimientos de tu empresa y te contactará en menos de 24 horas hábiles.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#16284F] hover:bg-[#1E3A8A] rounded shadow"
                >
                  Entendido
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-3 text-xs text-red-800 bg-red-50 border border-red-200 rounded-lg animate-in fade-in">
                  <p className="font-semibold">Error al enviar el mensaje:</p>
                  <p className="mt-0.5 text-red-700">{errorMessage}</p>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ej. Inmobiliaria Central"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+54 9 388..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Servicio de Interés Principal
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none bg-white text-slate-800"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Consultoría Integral">Estrategia Integral / Comunicación 360°</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Breve descripción de su proyecto
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Coméntenos sobre sus objetivos comerciales o de comunicación..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] outline-none resize-none transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Respuesta habitual: &lt; 24hs hábiles</span>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase bg-[#16284F] hover:bg-[#1E3A8A] rounded transition-all shadow hover:shadow-md disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Consulta <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
