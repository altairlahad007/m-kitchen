"use client";

import { TypeAnimation } from "react-type-animation";

const STRINGS = [
  "Fresh, healthy meals",
  "Good food, good mood",
  "Eat fresh, live better",
  "Made fresh, served with love",
];

export function TypewriterHeading({ className = "" }: { className?: string }) {
  const sequence = STRINGS.flatMap((s) => [s, 2000]);

  return (
    <TypeAnimation
      sequence={sequence}
      repeat={Infinity}
      speed={50}
      deletionSpeed={65}
      className={className}
    />
  );
}
