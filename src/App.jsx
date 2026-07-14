import "./App.css";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const Marquee = lazy(() => import("./components/MarqueeSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const OurWorks = lazy(() => import("./components/OurWorks"));
const TestimonialsSection = lazy(
  () => import("./components/TestimonialsSection"),
);
const InstagramSection = lazy(() => import("./components/InstagramSection"));
const CTASection = lazy(() => import("./components/CTASection"));
const FooterSection = lazy(() => import("./components/FooterSection"));

import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <div className="bg-black relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[#4CAF4F]/8 blur-[140px]" />
          <div className="absolute -top-[100px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#4CAF4F]/6 blur-[120px]" />
          <div className="absolute top-[45%] -left-[150px] w-[400px] h-[400px] rounded-full bg-[#4CAF4F]/5 blur-[100px]" />
          <div className="absolute bottom-[10%] -right-[150px] w-[450px] h-[450px] rounded-full bg-[#4CAF4F]/7 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#4CAF4F]/5 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection id="home" />
            <Suspense fallback={null}>
              <ServicesSection id="services" />
              <OurWorks id="works" />
              <TestimonialsSection id="testimonials" />
              <InstagramSection id="instagram" />
              <CTASection id="FAQ" />
              <ContactSection id="contact" />
              <FooterSection id="footer" />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
