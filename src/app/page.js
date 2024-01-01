import CallToAction from "@/comps/CallToAction";
import Features from "@/comps/Features";
import Footer from "@/comps/Footer";
import Hero from "@/comps/Hero";
import Navbar from "@/comps/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features />
      <CallToAction/>
      <Footer/>
    </>
  );
}
