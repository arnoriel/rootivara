import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollObserver />
      <FloatingWhatsApp />
    </main>
  );
}
