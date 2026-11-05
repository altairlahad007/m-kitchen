"use client";

import Image from "next/image";
import { useState } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoPng from "@assets/images/logo.png";
import { ThemeToggle } from "@ui";

gsap.registerPlugin(ScrollTrigger);

type HeaderMode = "hidden" | "bar" | "dock";

const NAV_ITEMS = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Nutrition", target: "#nutrition" },
  { label: "Packages", target: "#packages" },
];

export function Header() {
  const lenis = useLenis();
  const [mode, setMode] = useState<HeaderMode>("hidden");

  useLenis((l) => {
    const end =
      ScrollTrigger.getById("hero-pin")?.end ?? Number.POSITIVE_INFINITY;
    const next: HeaderMode =
      l.scroll < end - 10
        ? "hidden"
        : l.scroll < end + window.innerHeight * 0.2
          ? "bar"
          : "dock";
    setMode((prev) => (prev === next ? prev : next));
  });

  const scrollToPinEnd = (id: string) => {
    const end = ScrollTrigger.getById(id)?.end;
    if (end != null) lenis?.scrollTo(end);
  };

  const goTo = (target: string) => {
    if (!lenis) return;
    if (target === "home") scrollToPinEnd("hero-pin");
    else if (target === "about") scrollToPinEnd("about-pin");
    else lenis.scrollTo(target);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
        mode === "hidden" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center transition-all duration-500 ${
          mode === "dock"
            ? "mt-4 w-fit max-w-[calc(100%-2rem)] gap-4 rounded-full border border-border bg-background/90 px-4 py-2 shadow-xl backdrop-blur md:gap-8 md:px-6 md:py-2.5"
            : "relative w-full justify-between border-b border-border bg-background/80 px-4 py-2.5 backdrop-blur md:px-6 md:py-3"
        }`}
      >
        <button
          onClick={() => lenis?.scrollTo(0)}
          aria-label="Scroll to top"
          className="hidden min-[400px]:block"
        >
          <Image
            src={logoPng}
            alt="mkitchen logo"
            className="h-6 w-auto md:h-8"
            priority
          />
        </button>
        <nav
          className={`flex items-center gap-3 text-xs font-medium sm:gap-4 md:gap-6 md:text-sm ${
            mode === "dock" ? "" : "absolute left-1/2 -translate-x-1/2"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => goTo(item.target)}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
