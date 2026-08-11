import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import ClientStrip from "@/components/ClientStrip";
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
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <Hero3D />
      <ClientStrip />
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
