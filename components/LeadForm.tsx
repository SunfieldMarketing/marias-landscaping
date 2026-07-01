'use client';
import { useState } from 'react';
import { services } from '@/lib/services-data';

export default function LeadForm({ title = "Request a Free Estimate", subtitle = "", theme = "light" }: { title?: string, subtitle?: string, theme?: "light" | "dark" }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulated API call
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const isDark = theme === "dark";

  // Magic UI inspired input classes
  const inputClass = isDark
    ? "block w-full rounded-lg border border-white/10 bg-white/5 py-3 px-4 text-white placeholder-gray-400 focus:border-brand-400 focus:bg-white/10 focus:ring-1 focus:ring-brand-400 transition-all shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)]"
    : "block w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:bg-white focus:ring-1 focus:ring-brand-500 transition-all shadow-sm";

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{title}</h3>
        {subtitle && <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
      </div>

      {status === 'success' ? (
        <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-brand-500/20 border border-brand-400/30' : 'bg-green-50 border border-green-200'}`}>
          <svg className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-brand-400' : 'text-brand-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <h4 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Request Sent!</h4>
          <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>We'll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input type="text" id="name" name="name" required placeholder="Full Name" className={inputClass} />
          </div>
          <div>
            <input type="email" id="email" name="email" placeholder="Email (Optional)" className={inputClass} />
          </div>
          <div>
            <input type="tel" id="phone" name="phone" required placeholder="Phone Number" className={inputClass} />
          </div>
          <div className="relative">
            <select id="service" name="service" required className={`${inputClass} appearance-none ${isDark ? '[&>option]:bg-gray-900 [&>option]:text-white' : ''}`} defaultValue="">
              <option value="" disabled>Select a Service...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="other">Other / Not Sure</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full btn-primary py-3.5 relative overflow-hidden group mt-2 rounded-lg"
          >
            <span className="relative z-10 font-bold tracking-wide">
              {status === 'submitting' ? 'Submitting...' : 'Get My Free Estimate'}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </form>
      )}
    </div>
  );
}
