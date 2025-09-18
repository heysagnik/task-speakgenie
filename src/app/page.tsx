import BuiltFor from "@/components/BuiltFor";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Why />
    <Programs />
    <BuiltFor />
    <Pricing />
    <Faq />
    <Footer />
    </>
  );
}
