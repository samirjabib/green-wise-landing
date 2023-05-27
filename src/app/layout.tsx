import "./globals.css";
import { Manrope, Roboto_Mono, Playfair_Display } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { RootProviders } from "./common";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});
const description =
  "Green wise empresa de consultoría ambiental que ofrece servicios de asesoría, consultoría y capacitación en materia ambiental.";

export const metadata = {
  title: "GreenWise | Servicios Ambientales",
  description,
  category: "Ambiental",
  icons: {
    //HACER ICONOS
  },
  keywords: [
    "Ambiental",
    "Servicios Ambientales",
    "ingeniería ambiental",
    "consultoría ambiental",
    "Medio Ambiente",
    "Impacto Ambiental",
    "Evalución de Impacto Ambiental",
  ],
  openGraph: {
    title: "GreenWise | Servicios Ambientales",
    description,
    type: "website",
    locale: "es_CO",
    siteName: "GreenWise",
    url: "https://www.GreenWise.com", //CHANGE FOR REAL DOMAIN
  },
  //ADD TWITTER
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        manrope.variable,
        robotoMono.variable,
        playfairDisplay.variable
      )}
    >
      <head />
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
