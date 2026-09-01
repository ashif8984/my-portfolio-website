import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Posts from "@/components/Posts";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
