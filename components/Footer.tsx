import { site } from "@/lib/site-config";
import Icon from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 py-12 border-t border-brand-800 text-brand-200">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-sm">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold text-white block mb-2">{site.name}</span>
          <p className="opacity-80">&copy; {currentYear} {site.name}. All rights reserved.</p>
          <p className="opacity-80">{site.addressLocality}, {site.addressRegion}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <div className="flex items-center text-white font-semibold bg-brand-800 px-3 py-1.5 rounded-full">
            <Icon name="globe" className="h-4 w-4 mr-2 text-accent-400" />
            Language: English
          </div>
        </div>
      </div>
    </footer>
  );
}
