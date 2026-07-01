import { site } from "@/lib/site-config";
import LeadForm from "./LeadForm";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-900 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to<br />Transform Your<br />Landscape?
            </h2>
            <p className="text-lg text-brand-100 mb-8 max-w-lg">
              Genuine service & authentic free onsite estimates. Let&apos;s create the outdoor space you&apos;ve always dreamed of.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-600">
                <Icon name="phone" className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-brand-200">Call us directly</p>
                <a href={site.phoneHref} className="text-2xl font-bold text-white hover:text-accent-400 transition-colors">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md mx-auto lg:mr-0">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
