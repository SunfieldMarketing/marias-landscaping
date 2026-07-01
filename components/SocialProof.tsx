"use client";

import Icon from "./Icon";
import { site } from "@/lib/site-config";

const proofs = [
  { icon: "check", text: "Licensed & Insured" },
  { icon: "star", text: "5-Star Rated Service" },
  { icon: "phone", text: "Free Written Estimates" },
  { icon: "users", text: "Bilingual English & Spanish" },
];

export default function SocialProof() {
  return (
    <div className="bg-white border-b border-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">Over 10 Years</span>
            <span className="text-gray-500">Serving Riverside County</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-gray-200" />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {proofs.map((proof, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100">
                  <Icon name={proof.icon as any} className="h-3.5 w-3.5 text-brand-700" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{proof.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
