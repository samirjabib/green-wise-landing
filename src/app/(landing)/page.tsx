import { Metadata } from "next";
import { Hero } from "./components";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export async function generateMetadata(): Promise<Metadata> {
  const description =
    "Green wise empresa de consultoría ambiental que ofrece servicios de asesoría, consultoría y capacitación en materia ambiental.";

  return {
    title: "GreenWise | Servicios Ambientales",
    description,
  };
}

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}
