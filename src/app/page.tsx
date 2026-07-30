import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Stakes, { PlanSteps } from "@/components/Stakes";
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
      <main id="main">
        {/* 1. Promise — hero with location + CTA */}
        <Hero />
        {/* 2. Instant proof — stats strip */}
        <TrustBar />
        {/* 3. The stakes — the problem is the hook */}
        <Stakes />
        {/* 4. What we do — services, framed as solutions */}
        <Services />
        {/* 5. The guide — empathy, then competency */}
        <AboutStatement />
        <TeamList />
        {/* 6. The plan — three steps */}
        <PlanSteps />
        {/* 7. Visual interlude + service links */}
        <ProjectCategories />
        {/* 8. Local proof — numbered case studies, one per city */}
        <CaseStudies />
        {/* 9. Social proof — reviews */}
        <Testimonials />
        {/* 10. Objections — FAQ */}
        <FAQ />
        {/* 11. Action — contact form */}
        <CTA />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
