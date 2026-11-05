"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(ref.current, {
        y: 10,
        duration: 0.9,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 text-white/80"
      aria-hidden="true"
    >
      <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.3em]">
        Explore to know more
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
