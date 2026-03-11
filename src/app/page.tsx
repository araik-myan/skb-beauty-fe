import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Refreshment from "@/components/Refreshment";
import Gallery from "@/components/Gallery";
import Divider from "@/components/Divider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Refreshment />
      <Gallery />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
