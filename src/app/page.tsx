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
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutStatement />
        <Projects />
        <TeamList />
        <ProjectCategories />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
