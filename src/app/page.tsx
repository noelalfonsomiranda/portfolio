import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// TEMPORARILY COMMENTED OUT, DON'T REMOVE: "The journey so far" section is hidden for now.
// import Journey from "@/components/Journey";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        {/* TEMPORARILY COMMENTED OUT, DON'T REMOVE: "The journey so far" section is hidden for now.
            To bring it back, uncomment this line, its import above, and the "Journey" link in Header.tsx. */}
        {/* <Journey /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
