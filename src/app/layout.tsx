import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `Rafa Robótica - Robótica, Automatización y Tecnología`,
    template: `%s | Rafa Robótica`,
  },
  description: "Rafa Robótica: empresa de desarrollo e innovación tecnológica en robótica, automatización, electrónica y soluciones tecnológicas a medida para empresas y comunidades.",
  keywords: ["Rafa Robótica", "rafa robotica", "robótica Colombia", "automatización", "electrónica", "robots", "DJI agricultura", "automatización tractores", "innovación tecnológica", "rafarobotica"],
  authors: [{ name: "Rafa Robótica" }],
  creator: "Rafa Robótica",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/logo.jpg`,
        width: 800,
        height: 600,
        alt: "Logo Rafa Robótica",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
