"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Burger } from "./Burger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FRAME_COUNT = 80;
const frameUrl = (i: number) =>
  `/videos/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

export function NutritionFacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const section = sectionRef.current;
      const burger = burgerRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !section || !burger || !ctx) return;

      const images: (HTMLImageElement | null)[] = new Array(
        FRAME_COUNT
      ).fill(null);
      const state = { frame: 0 };

      const render = () => {
        const img = images[Math.round(state.frame)];
        if (!img?.complete || !img.naturalWidth) return;
        const cw = canvas.width;
        const ch = canvas.height;
        const ratio = Math.max(
          cw / img.naturalWidth,
          ch / img.naturalHeight
        );
        const w = img.naturalWidth * ratio;
        const h = img.naturalHeight * ratio;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      };

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        render();
      };

      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = frameUrl(i);
        if (i === 0) img.onload = render;
        images[i] = img;
      }

      resize();
      window.addEventListener("resize", resize);

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "nutrition-pin",
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const bottomParts = gsap.utils.toArray<HTMLElement>(
        "[data-burger-bottom]",
        section
      );
      const startXs = bottomParts.map((el) => {
        const rect = el.getBoundingClientRect();
        const scale = el.offsetWidth ? rect.width / el.offsetWidth : 1;
        return (window.innerWidth - rect.left + 40) / (scale || 1);
      });

      tl.to(
        state,
        {
          frame: FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          duration: 0.72,
          onUpdate: render,
        },
        0
      )
        .to("[data-nf-text]", { autoAlpha: 0, duration: 0.12 }, 0.72)
        .to(canvas, { autoAlpha: 0.12, duration: 0.2 }, 0.74)
        .fromTo(
          burger,
          { autoAlpha: 0, scale: 0.92 },
          { autoAlpha: 1, scale: 1, duration: 0.14, ease: "none" },
          0.8
        )
        .fromTo(
          bottomParts,
          { x: (i) => startXs[i] },
          { x: 0, duration: 0.22, stagger: 0.04, ease: "none" },
          0.78
        );

      return () => window.removeEventListener("resize", resize);
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="nutrition"
      ref={sectionRef}
      className="relative h-svh overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div
          data-nf-text
          className="flex w-full max-w-3xl flex-col items-center gap-6 px-4 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Nutritional Facts
          </p>
          <h1 className="font-heading text-4xl text-white sm:text-5xl md:text-6xl">
            Key Takeaways for a Healthy Diet
          </h1>
          <p className="subtitle text-white/85">
            Discover the essential nutritional benefits of chicken and learn
            how adding this lean, high-quality protein to your everyday meals
            supports muscle recovery, boosts metabolism, and promotes overall
            health.
          </p>
        </div>
      </div>
      <div
        ref={burgerRef}
        className="invisible absolute inset-0 z-20 flex items-center justify-center opacity-0"
      >
        <div className="origin-center scale-[0.55] sm:scale-75 md:scale-100">
          <Burger />
        </div>
      </div>
    </section>
  );
}
