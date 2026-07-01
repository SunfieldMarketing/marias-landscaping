"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site-config";

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <a
        href={site.phoneHref}
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Icon name="phone" className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Call Now</span>
      </a>
      
      <a
        href={`sms:${site.phone.replace(/[^0-9]/g, "")}`}
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-gray-700 hover:bg-gray-50 transition-colors border-l border-gray-200"
      >
        <Icon name="chat" className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Text Us</span>
      </a>
      
      <a
        href="#contact"
        className="flex-[1.5] flex flex-col items-center justify-center py-2.5 bg-accent-600 text-white hover:bg-accent-700 transition-colors"
      >
        <Icon name="check" className="h-5 w-5 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Get Free Quote</span>
      </a>
    </div>
  );
}
