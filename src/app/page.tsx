import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Stakes, { PlanSteps } from "@/components/Stakes";
import {
  AboutStatement,
  TeamList,
  CaseStudies,
} from "@/components/HomeEditorial";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Proof first: a homeowner decides whether to trust us on finished work and
// reviews, so those come straight after the offer. Services, process, and the
// "why us" argument follow once there's a reason to keep reading.
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        {/* 1. Promise — hero with location + CTA */}
        <Hero />
        {/* 2. Instant proof — stats strip */}
        <TrustBar />
        {/* 3. Local proof — real finished projects */}
        <CaseStudies />
        {/* 4. Social proof — reviews */}
        <Testimonials />
        {/* 5. What we do — services, framed as solutions */}
        <Services />
        {/* 6. The plan — three steps */}
        <PlanSteps />
        {/* 7. Why us — the stakes, then the guide */}
        <Stakes />
        <AboutStatement />
        <TeamList />
        {/* 8. Objections — FAQ */}
        <FAQ />
        {/* 9. Action — contact form */}
        <CTA />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
