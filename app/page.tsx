import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

// todo: move all lib/sections to their own folder
// todo: create a utils class for all reusable classes
// todo: create a utils class for all reusable anim/gsap

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Cta />
      <CaseStudies />
      <Process />
      <Team />
      <Testimonials />
      <Contacts />
      <Footer />
    </main>
  );
}
