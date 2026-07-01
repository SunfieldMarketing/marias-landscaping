"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "scale";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const dirClass =
    direction === "left"  ? "slide-left"  :
    direction === "right" ? "slide-right" :
    direction === "scale" ? "scale-in"    : "";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`animate-on-scroll ${dirClass} ${visible ? "in-view" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
