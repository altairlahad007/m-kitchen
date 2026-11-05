"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import commercialKitchenVideo from "@assets/videos/commercial_kitchen.mp4";
import { AnimatedLogo } from "./AnimatedLogo";
import { ScrollIndicator } from "./ScrollIndicator";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const videoSrc =
  typeof commercialKitchenVideo === "string"
    ? commercialKitchenVideo
    : (commercialKitchenVideo as { src: string }).src;

export function Hero({ children }: { children?: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const circle = circleRef.current;
      if (!circle || !sectionRef.current || !nextRef.current) return;

      const coverScale = () =>
        (Math.hypot(window.innerWidth, window.innerHeight) /
          circle.offsetWidth) *
        1.1;

      const indicator =
        sectionRef.current.querySelector(".scroll-indicator");

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "hero-pin",
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: () => videoRef.current?.pause(),
          onEnterBack: () => videoRef.current?.play(),
        },
      });

      if (indicator) {
        tl.to(indicator, { opacity: 0, duration: 0.1, ease: "none" }, 0);
      }
      tl.to(circle, { scale: coverScale, ease: "none", duration: 1 }, 0).to(
        nextRef.current,
        { autoAlpha: 1, duration: 0.8, ease: "none" },
        1.2
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-svh w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div
          ref={circleRef}
          className="flex h-56 w-56 items-center justify-center rounded-full bg-background shadow-2xl sm:h-72 sm:w-72"
        >
          <AnimatedLogo className="w-4/5 text-primary" />
        </div>
      </div>
      <div className="scroll-indicator absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollIndicator />
      </div>
      <div ref={nextRef} className="invisible absolute inset-0 z-20 opacity-0">
        {children}
      </div>
    </section>
  );
}
