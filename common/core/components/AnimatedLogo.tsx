"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const shapes = ref.current?.querySelectorAll("polygon");
      if (!shapes?.length) return;

      shapes.forEach((shape) => {
        const length = (shape as SVGGeometryElement).getTotalLength();
        gsap.set(shape, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });
      gsap.set(ref.current, { opacity: 1 });

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.8 })
        .to(shapes, {
          strokeDashoffset: 0,
          duration: 2,
          stagger: 0.35,
          ease: "power2.inOut",
        })
        .to(shapes, {
          attr: { "fill-opacity": 1 },
          duration: 0.8,
          ease: "power1.in",
        }, "-=0.5")
        .to(ref.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.in",
        }, "+=1");
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1794 576"
      role="img"
      aria-label="mkitchen logo"
      className={className}
      style={{ opacity: 0 }}
    >
      <polygon
        points="948,59 631,374 631,511 909,234 910,269 946,234"
        fill="currentColor"
        fillOpacity={0}
        stroke="currentColor"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <polygon
        points="1165,60 887,332 886,300 849,338 849,508 1068,293 1069,508 1164,414"
        fill="currentColor"
        fillOpacity={0}
        stroke="currentColor"
        strokeWidth={6}
        strokeLinejoin="round"
      />
    </svg>
  );
}
