"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import tomatoImg from "@assets/images/tomato.svg";
import onionImg from "@assets/images/onion.svg";
import lettuceImg from "@assets/images/lettuce.svg";
import chilliImg from "@assets/images/chilli.svg";
import cheeseImg from "@assets/images/cheese.svg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SEEDS = [
  { x: "30%", y: "50%", r: 24 },
  { x: "44%", y: "32%", r: -18 },
  { x: "58%", y: "48%", r: 40 },
  { x: "36%", y: "68%", r: -45 },
  { x: "66%", y: "62%", r: 15 },
  { x: "50%", y: "58%", r: -30 },
  { x: "26%", y: "38%", r: 52 },
];

const INGREDIENTS = [
  { src: lettuceImg, size: "w-44", stackX: -6, stackY: 0, startTop: 62, rot: -8 },
  { src: cheeseImg, size: "w-36", stackX: 8, stackY: 20, startTop: 30, rot: 6 },
  { src: tomatoImg, size: "w-36", stackX: -8, stackY: 40, startTop: 18, rot: -14 },
  { src: onionImg, size: "w-32", stackX: 6, stackY: 60, startTop: 44, rot: 10 },
  { src: chilliImg, size: "w-28", stackX: -4, stackY: 80, startTop: 78, rot: -20 },
];

export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const bun = bunRef.current;
      const intro = introRef.current;
      const rest = restRef.current;
      if (!bun || !intro || !rest || !sectionRef.current) return;

      const coverScale = () =>
        (Math.hypot(window.innerWidth, window.innerHeight) /
          bun.offsetHeight) *
        1.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-pin",
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        intro,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.15, ease: "none" },
        0
      )
        .fromTo(
          bun,
          { scale: coverScale },
          { scale: 1, ease: "none", duration: 1 },
          0
        )
        .fromTo(
          "[data-seed]",
          { opacity: 0 },
          { opacity: 1, duration: 0.3, stagger: 0.06, ease: "none" },
          0.4
        )
        .fromTo(
          rest,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "none" },
          0.6
        );

      INGREDIENTS.forEach((ing, i) => {
        const el = ingredientRefs.current[i];
        if (!el) return;
        tl.fromTo(
          el,
          {
            x: () => window.innerWidth,
            y: () => ((ing.startTop - 33) / 100) * window.innerHeight,
            rotation: 120,
            autoAlpha: 1,
          },
          {
            x: ing.stackX,
            y: ing.stackY,
            rotation: ing.rot,
            duration: 0.5,
            ease: "none",
          },
          0.1 + i * 0.1
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex h-svh items-center overflow-hidden bg-background"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 text-center md:gap-6">
        <div
          className="relative h-52 w-full shrink-0 origin-top scale-[0.62] sm:h-64 sm:scale-75 md:h-72 md:scale-100"
          aria-hidden="true"
        >
          <div
            ref={bunRef}
            className="absolute left-1/2 top-0 z-10 h-40 w-80 -translate-x-1/2 rounded-t-full bg-secondary will-change-transform"
          >
            {SEEDS.map((seed, i) => (
              <span
                key={i}
                data-seed
                className="absolute h-3 w-1.5 rounded-full bg-[#FDF3D7] opacity-0"
                style={{
                  left: seed.x,
                  top: seed.y,
                  transform: `rotate(${seed.r}deg)`,
                }}
              />
            ))}
          </div>
          {INGREDIENTS.map((ing, i) => (
            <div
              key={i}
              ref={(el) => {
                ingredientRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-40 z-10 -translate-x-1/2 will-change-transform"
            >
              <Image
                src={ing.src}
                alt=""
                className={`${ing.size} drop-shadow-md`}
              />
            </div>
          ))}
        </div>
        <div
          ref={introRef}
          className="invisible relative z-20 flex flex-col items-center gap-6 opacity-0"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="subtitle max-w-2xl text-foreground">
            We prepare fresh, healthy meals every day and deliver them to you
            in weekly and monthly packages.
          </p>
        </div>
        <div
          ref={restRef}
          className="invisible relative z-20 flex flex-col items-center gap-6 opacity-0"
        >
          <h2 className="heading-2 mt-4 md:mt-8">
            We serve healthy, balanced food you&apos;ll actually enjoy.
          </h2>
          <p className="body-text max-w-2xl text-muted-foreground">
            Every meal is built around 150g of protein and 150g of carbs,
            cooked with clean ingredients and real flavour. You eat well every
            day, without the effort of cooking or planning each meal.
          </p>
          <h2 className="heading-2 mt-4 md:mt-8">A new menu every week</h2>
          <p className="body-text max-w-2xl text-muted-foreground">
            So you never get bored. Different dishes every week, with the same
            quality and fresh taste.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary md:mt-8">
            Fresh.Clean.Delicious
          </p>
        </div>
      </div>
    </section>
  );
}
