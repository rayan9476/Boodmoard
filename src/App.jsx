import "./App.css";
import HeroCarousel from "./components/HeroCarousel";
import InstagramSection from "./components/InstagramSection";
import Marquee from "./components/MarqueeSection";
import Navbar from "./components/Navbar";
import OurWorks from "./components/OurWorks";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Marquee />
      <OurWorks />
      <InstagramSection />
    </>
  );
}

export default App;
