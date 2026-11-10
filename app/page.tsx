
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WorkingProcess from "@/components/home/WorkingProcess";

import Projects from "@/components/home/Projects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

import FAQ from "@/components/home/FAQ";
import Location from "@/components/home/Location";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">

        <Navbar />

        <Hero />

        <About />

        <Services />

        <WorkingProcess />

        <Projects />

        <WhyChooseUs />

        <Team />

        <Testimonials />

        <FAQ />

        <Location />

      </main>

      <Footer />
    </>
  );
}
