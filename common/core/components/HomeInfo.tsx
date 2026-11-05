import homeinfoImage from "@assets/images/homeinfo.png";
import homeinfo1Image from "@assets/images/homeinfo1.png";
import homeinfo2Image from "@assets/images/homeinfo2.png";
import { Button } from "@ui";
import { InfiniteCardSlider } from "./InfiniteCardSlider";
import { TypewriterHeading } from "./TypewriterHeading";

const IMAGES = [homeinfoImage, homeinfo1Image, homeinfo2Image];

const FEATURES = [
  "New menu every week",
  "Free delivery",
  "Refrigerated van",
];

const WHATSAPP_URL = `https://wa.me/96876908175?text=${encodeURIComponent(
  "Hello, I'd like to order a package from M Kitchen"
)}`;

export function HomeInfo() {
  return (
    <section className="flex min-h-svh items-center bg-muted py-10 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 px-4 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Fresh.Clean.Delicious
          </p>
          <div className="font-heading min-h-[5rem] text-4xl sm:min-h-[8rem] sm:text-5xl md:text-6xl">
            <TypewriterHeading />
          </div>
          <p className="subtitle">
            Delivered to your door, with weekly and monthly packages that suit
            you.
          </p>
          <ul className="mt-1 flex flex-col gap-1.5 md:mt-2 md:gap-2.5">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="body-text flex items-center gap-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-primary"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-3 md:mt-4">
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Enquire Now
            </Button>
            <Button href="#packages" variant="outline" size="lg">
              See Packages
            </Button>
          </div>
        </div>
        <InfiniteCardSlider
          images={IMAGES}
          className="h-72 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:h-[32rem] md:h-[38rem]"
        />
      </div>
    </section>
  );
}
