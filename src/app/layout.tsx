import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inovit Digital | Tecnologia, Design e Inovação",
  description:
    "Criamos tecnologia, design e inovação para acelerar empresas e construir soluções digitais de alto impacto. Desenvolvimento de software, apps, plataformas e soluções sob medida.",
  keywords: [
    "desenvolvimento de software",
    "produtos digitais",
    "transformação digital",
    "aplicativos",
    "plataformas",
    "UX/UI",
    "cloud",
    "AWS",
    "React",
    "Next.js",
    "Node.js",
  ],
  openGraph: {
    title: "Inovit Digital | Tecnologia, Design e Inovação",
    description:
      "Criamos tecnologia, design e inovação para acelerar empresas e construir soluções digitais de alto impacto.",
    type: "website",
    locale: "pt_BR",
    siteName: "Inovit Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
