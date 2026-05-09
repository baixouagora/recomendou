import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recomendou.com.br"),
  title: {
    default: "recomendou — Os melhores produtos, escolhidos com critério",
    template: "%s · recomendou",
  },
  description:
    "Análises independentes dos melhores produtos disponíveis no Brasil, com comparativos e links direto para Amazon e Mercado Livre.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "recomendou",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
