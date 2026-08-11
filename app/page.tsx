import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Showreel from "@/components/Showreel";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Showreel />
      <Work />
      <Services />
      <Process />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
