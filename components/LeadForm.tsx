'use client';
import { useState } from 'react';
import { services } from '@/lib/services-data';

export default function LeadForm({ title = "Request a Free Estimate", subtitle = "Genuine service & authentic free onsite estimates.", theme = "light" }: { title?: string, subtitle?: string, theme?: "light" | "dark" }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulated API call
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  // We are forcing the inputs to be white with dark text, regardless of the outer theme,
  // to maximize contrast and perfectly match the lead-capture optimized reference design.
  const inputClass = "block w-full rounded-md border border-gray-200 bg-white py-3.5 px-4 text-gray-900 placeholder-gray-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all shadow-sm font-medium";

  return (
    <div className="w-full">
      <div className="mb-6 hidden">
        {/* We can hide these if the surrounding component already provides the title, 
            or keep them if not. Based on the reference, the title is usually outside the form block. */}
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-xl text-center bg-white border border-accent-200 shadow-xl">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h4 className="text-xl font-bold mb-2 text-gray-900">Request Sent Successfully!</h4>
          <p className="text-gray-600">We will be in touch with you shortly to schedule your free estimate.</p>
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
            <select id="service" name="service" required className={`${inputClass} appearance-none`} defaultValue="">
              <option value="" disabled>Select a Service...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="other">Other / Not Sure</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white py-4 px-6 rounded-md font-bold tracking-wide transition-all shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : null}
            <span>{status === 'submitting' ? 'Submitting...' : 'Get My Free Estimate'}</span>
          </button>
        </form>
      )}
    </div>
  );
}
