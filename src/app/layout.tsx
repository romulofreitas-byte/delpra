import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delprapremoldados.com.br"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
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
    url: "https://delprapremoldados.com.br",
    siteName: "Delpra Pré-Moldados",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRFBZ4CZ');`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRFBZ4CZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
