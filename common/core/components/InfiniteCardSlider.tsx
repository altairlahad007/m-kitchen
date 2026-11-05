"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface InfiniteCardSliderProps {
  images: StaticImageData[];
  className?: string;
}

export function InfiniteCardSlider({ images, className = "" }: InfiniteCardSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [...images, ...images];
  const count = cards.length;

  useGSAP(
    () => {
      const wrapOffset = gsap.utils.wrap(-count / 2, count / 2);
      const state = { p: 0 };

      const layout = () => {
        const cardWidth = cardRefs.current[0]?.offsetWidth ?? 224;
        const containerWidth = containerRef.current?.offsetWidth ?? 0;
        const spacing =
          cardWidth * (containerWidth < 480 ? 0.95 : 0.62);
        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          const offset = wrapOffset(i - state.p);
          const distance = Math.abs(offset);
          gsap.set(el, {
            xPercent: -50,
            yPercent: -50,
            x: offset * spacing,
            scale: Math.max(0.5, 1 - distance * 0.22),
            rotationY: offset * -14,
            opacity:
              distance > 2.4 ? 0 : Math.max(0.25, 1 - distance * 0.32),
            zIndex: Math.round(100 - distance * 10),
          });
        });
      };

      layout();

      gsap
        .timeline({ repeat: -1, repeatDelay: 2.4 })
        .to(state, {
          p: "+=1",
          duration: 1.1,
          ease: "power2.inOut",
          onUpdate: layout,
        });

      const onResize = () => layout();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden [perspective:1200px] ${className}`}
    >
      {cards.map((image, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 flex will-change-transform"
        >
          <Image
            src={image}
            alt=""
            aria-hidden={i >= images.length}
            className="aspect-[4/5] w-52 rounded-2xl object-cover shadow-xl sm:w-80 md:w-[28rem]"
          />
        </div>
      ))}
    </div>
  );
}
