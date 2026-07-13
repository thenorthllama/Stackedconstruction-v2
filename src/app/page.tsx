import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import TrustBar from "@/components/TrustBar";
import {
  AboutStatement,
  TeamList,
  ProjectCategories,
  CaseStudies,
} from "@/components/HomeEditorial";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Promise — hero with location + CTA */}
        <Hero />
        {/* 2. Instant proof — stats strip */}
        <TrustBar />
        {/* 3. What we do — services band */}
        <ProjectCategories />
        {/* 4. Who we are — founder-led about */}
        <AboutStatement />
        <TeamList />
        {/* 5. Local proof — numbered case studies, one per city */}
        <CaseStudies />
        {/* 6. Social proof — reviews */}
        <Testimonials />
        {/* 7. Objections — FAQ */}
        <FAQ />
        {/* 8. Action — contact form */}
        <CTA />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
