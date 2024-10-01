import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import Services from '@/components/Services';
import Cta from '@/components/Cta';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

// TODO: move all lib/sections to their own folder
// TODO: create a utils class for all reusable classes
// TODO: create a utils class for all reusable anim/gsap
// TODO: remove unused imports
// TODO: create a favicon for all browsers
// TODO: create a assets.ts and store all my images there
// TODO: add custom not-found page
// TODO: move all images to assets.ts files

export default function Home() {
  return (
    <main className='bg-white'>
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
