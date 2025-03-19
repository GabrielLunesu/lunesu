import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Donato Lunesu | Warmtepomp & Airco Specialist",
  description: "Erkende & gecertificeerde installateur voor warmtepompen en airconditioning in Nederland. Meer dan 30 jaar ervaring en bijna 3000 tevreden klanten.",
  keywords: "warmtepomp, airco, airconditioning, installatie, reparatie, onderhoud, service, Nederland, Donato Lunesu",
  authors: [{ name: "Donato Lunesu" }],
  creator: "Donato Lunesu",
  publisher: "Donato Lunesu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Moonen Vochtwering | Specialist in Parkstad",
    description: "Professionele vochtwering oplossingen voor woningen en bedrijven in Heerlen en omgeving Parkstad. Bescherm uw eigendom tegen vocht en schimmel.",
    url: "https://moonenvochtwering.nl",
    siteName: "Moonen Vochtwering",
    locale: "nl_NL",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/logo.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
