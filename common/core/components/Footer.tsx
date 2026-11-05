import Image from "next/image";
import logoPng from "@assets/images/logo.png";

export async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        <Image
          src={logoPng}
          alt="mkitchen logo"
          className="h-10 w-auto"
        />
        <div>
          <p className="caption">
            &copy; {new Date().getFullYear()} mkitchen. All rights reserved.
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Fresh.Clean.Delicious
          </p>
        </div>
      </div>
    </footer>
  );
}
