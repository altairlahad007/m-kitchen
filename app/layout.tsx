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
  metadataBase: new URL("https://altairlahad007.github.io/m-kitchen/"),
  title: {
    default: "M Kitchen — Fresh, healthy meals delivered",
    template: "%s | M Kitchen",
  },
  description:
    "Fresh, healthy meals prepared daily and delivered to your door in weekly and monthly packages. Balanced protein and carbs in every meal — M Kitchen.",
  keywords: [
    "M Kitchen",
    "meal prep",
    "healthy meals",
    "meal delivery",
    "weekly meal package",
    "monthly meal plan",
    "meal subscription Oman",
  ],
  openGraph: {
    title: "M Kitchen — Fresh, healthy meals delivered",
    description:
      "Fresh, balanced meals delivered weekly or monthly. Build your meal package in three easy steps.",
    url: "https://altairlahad007.github.io/m-kitchen/",
    siteName: "M Kitchen",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Kitchen — Fresh, healthy meals delivered",
    description:
      "Fresh, balanced meals delivered weekly or monthly. Build your meal package in three easy steps.",
  },
  robots: { index: true, follow: true },
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
