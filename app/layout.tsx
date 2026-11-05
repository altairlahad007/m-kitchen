import type { Metadata } from "next";
import { Chewy, Atma } from "next/font/google";
import { Header, Footer, ThemeProvider, LenisProvider } from "@core/components";
import "@assets/styles/globals.css";

const chewy = Chewy({
  variable: "--font-chewy",
  weight: "400",
  subsets: ["latin"],
});

const atma = Atma({
  variable: "--font-atma",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mkitchen",
  description: "Next.js + TailwindCSS project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${chewy.variable} ${atma.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
