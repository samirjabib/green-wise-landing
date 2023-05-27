import { Metadata } from "next";
import { Hero, About, Contact, Services } from "./components";

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
      <About />
      <Contact />
    </>
  );
}
