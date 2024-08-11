import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import CaseStudies from "@/components/CaseStudies";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Cta />
      <CaseStudies />
    </main>
  );
}
