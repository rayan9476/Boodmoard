import "./App.css";
import HeroSection from "./components/HeroSection";
import InstagramSection from "./components/InstagramSection";
import Marquee from "./components/MarqueeSection";
import Navbar from "./components/Navbar";
import OurWorks from "./components/OurWorks";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <OurWorks />
      <InstagramSection />
    </>
  );
}

export default App;
