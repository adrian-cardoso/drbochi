import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Alena Bochi, ND — Naturopathic Medicine",
    template: "%s | Dr. Alena Bochi, ND",
  },
  description:
    "Dr. Alena Bochi is a licensed naturopathic doctor offering functional lab testing, botanical medicine, acupuncture, nutritional counseling, and lifestyle guidance.",
  metadataBase: new URL("https://drbochi.com"),
  openGraph: {
    title: "Dr. Alena Bochi, ND — Naturopathic Medicine",
    description:
      "Whole-person care rooted in nature. Functional lab testing, botanical medicine, acupuncture, nutritional counseling, and lifestyle guidance.",
    url: "https://drbochi.com",
    siteName: "Dr. Alena Bochi, ND",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alena Bochi, ND — Naturopathic Medicine",
    description:
      "Whole-person care rooted in nature. Evidence-based naturopathic medicine in Bridgeport, CT.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
