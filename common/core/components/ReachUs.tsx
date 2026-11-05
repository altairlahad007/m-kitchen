import Image from "next/image";
import logoSvg from "@assets/images/logo.svg";

export function ReachUs() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl">
            Reach us
          </h1>
          <p className="subtitle max-w-md opacity-85">
            Message us on WhatsApp and we&apos;ll arrange everything.
          </p>
          <div className="flex flex-col gap-5">
            <a
              href="https://wa.me/96876908175"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span>
                <span className="block text-sm opacity-70">
                  Phone/WhatsApp
                </span>
                <span className="text-lg font-semibold">+968 76908175</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/mkitchen.om/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7 shrink-0"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              <span>
                <span className="block text-sm opacity-70">Instagram</span>
                <span className="text-lg font-semibold">@Mkitchen.om</span>
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src={logoSvg}
            alt="mkitchen logo"
            className="w-48 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
