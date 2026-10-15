import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import RevealOnScroll from "@/components/RevealOnScroll";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Journey />
      </main>
      <Contact />
      <RevealOnScroll />
    </>
  );
}
