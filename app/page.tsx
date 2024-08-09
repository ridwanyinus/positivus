import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
    </main>
  );
}
