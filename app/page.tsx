import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import AskAI from "./components/AskAI";
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
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <AskAI />
      <Footer />
      <ScrollObserver />
      <FloatingWhatsApp />
    </main>
  );
}
