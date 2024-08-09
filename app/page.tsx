import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
    </main>
  );
}
