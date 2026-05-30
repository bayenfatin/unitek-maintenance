import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unitek Automation | Maintenance CNC & Rétrofit Industriel",
  description:
    "Expert en maintenance industrielle, dépannage CNC et rétrofit de machines-outils depuis 30 ans. Siemens Sinumerik, FANUC, NUM, Heidenhain. Région lyonnaise, Saint-Fons.",
  keywords:
    "maintenance CNC, dépannage commande numérique, rétrofit machine-outil, Siemens Sinumerik, FANUC, maintenance 4.0, Lyon, Saint-Fons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
