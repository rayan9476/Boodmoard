import HeroSection from "../components/HeroSection";
import { lazy, Suspense } from "react";
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const OurWorks = lazy(() => import("../components/OurWorks"));
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection"),
);
const InstagramSection = lazy(() => import("../components/InstagramSection"));
const CTASection = lazy(() => import("../components/CTASection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/common/Footer"));
import Navbar from "../components/common/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection id="home" />
      <Suspense fallback={null}>
        <ServicesSection id="services" />
        <OurWorks id="works" />
        <TestimonialsSection id="testimonials" />
        <InstagramSection id="instagram" />
        <CTASection id="FAQ" />
        <ContactSection id="contact" />
        <Footer id="footer" />
      </Suspense>
    </>
  );
}

export default HomePage;
