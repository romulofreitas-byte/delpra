import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://delprapremoldados.com.br";

const faviconFile = "Favicon.png";
const faviconPath = `/${encodeURIComponent(faviconFile)}`;

const logoDelpraFile = "Logo Delpra.png";
const logoDelpraPath = `/${encodeURIComponent(logoDelpraFile)}`;
const logoDelpraUrl = new URL(logoDelpraPath, siteUrl).href;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: faviconPath,
    apple: faviconPath,
  },
  title: "Delpra Pré-Moldados | Blocos Laudados em Uberaba e Região",
  description:
    "Delpra Pré-Moldados em Uberaba/MG: traço exclusivo, laudo MPA e conformidade ABNT para obras residenciais, comerciais e rurais com logística otimizada na região.",
  keywords: [
    "Blocos laudados Uberaba",
    "Blocos de concreto em Uberaba",
    "Pré-moldados Uberaba",
    "Tijolo aparente Uberlândia",
    "Cercamento pré-moldado Rifaina",
    "Pré-moldados para chácaras Ponte Alta",
    "Bloco 14 estrutural",
    "Laudo MPA em pré-moldados",
    "Conformidade ABNT blocos de concreto",
    "Canaletas em Uberaba",
    "Pavers em Uberaba",
  ],
  openGraph: {
    title: "Delpra Pré-Moldados | Engenharia, laudo MPA e logística regional",
    description:
      "Padrão Delpra: traço exclusivo, conformidade MPA/ABNT e logística otimizada para Uberaba, Delta, Sacramento e Conceição das Alagoas.",
    url: siteUrl,
    siteName: "Delpra Pré-Moldados",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: logoDelpraUrl,
        alt: "Delpra Pré-Moldados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delpra Pré-Moldados | Engenharia, laudo MPA e logística regional",
    description:
      "Padrão Delpra: traço exclusivo, conformidade MPA/ABNT e logística otimizada para Uberaba, Delta, Sacramento e Conceição das Alagoas.",
    images: [logoDelpraUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
