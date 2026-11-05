import Image from "next/image";
import lettuceImg from "@assets/images/lettuce.svg";
import cheeseImg from "@assets/images/cheese.svg";
import tomatoImg from "@assets/images/tomato.svg";
import onionImg from "@assets/images/onion.svg";
import chilliImg from "@assets/images/chilli.svg";
import pattyImg from "@assets/images/patty.svg";
import sauceImg from "@assets/images/sauce.svg";

const SEEDS = [
  { x: "30%", y: "50%", r: 24 },
  { x: "44%", y: "32%", r: -18 },
  { x: "58%", y: "48%", r: 40 },
  { x: "36%", y: "68%", r: -45 },
  { x: "66%", y: "62%", r: 15 },
  { x: "50%", y: "58%", r: -30 },
  { x: "26%", y: "38%", r: 52 },
];

const LAYERS = [
  { src: lettuceImg, size: "w-44", top: 138, bottom: false },
  { src: cheeseImg, size: "w-36", top: 166, bottom: false },
  { src: tomatoImg, size: "w-36", top: 194, bottom: false },
  { src: onionImg, size: "w-32", top: 222, bottom: false },
  { src: chilliImg, size: "w-28", top: 248, bottom: false },
  { src: pattyImg, size: "w-40", top: 272, bottom: true },
  { src: sauceImg, size: "w-40", top: 306, bottom: true },
];

export function Burger({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-[26.5rem] w-80 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-t-full bg-secondary">
        {SEEDS.map((seed, i) => (
          <span
            key={i}
            className="absolute h-3 w-1.5 rounded-full bg-[#FDF3D7]"
            style={{
              left: seed.x,
              top: seed.y,
              transform: `rotate(${seed.r}deg)`,
            }}
          />
        ))}
      </div>
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          data-burger-bottom={layer.bottom ? "" : undefined}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: layer.top }}
        >
          <Image
            src={layer.src}
            alt=""
            className={`${layer.size} drop-shadow-md`}
          />
        </div>
      ))}
      <div
        data-burger-bottom
        className="absolute left-1/2 top-[332px] h-20 w-80 -translate-x-1/2 rounded-b-full bg-secondary"
      />
    </div>
  );
}
