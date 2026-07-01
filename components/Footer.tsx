import { site } from "@/lib/site-config";
import Icon from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-8 border-t border-gray-300">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-sm text-gray-500">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-gray-900 block mb-2">{site.name}</span>
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <p>{site.addressLocality}, {site.addressRegion}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <div className="flex items-center text-gray-900 font-semibold">
            <Icon name="globe" className="h-4 w-4 mr-1 text-gray-500" />
            Language: English
          </div>
        </div>
      </div>
    </footer>
  );
}
