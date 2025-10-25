import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import HeroVector from "./components/Hero/HeroVector";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import AboutUs from "./components/About/AboutUs";
import OtherServices from "./components/Services/OtherServices";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonial/Testimonials";
import Booking from "./components/Booking/Booking";
import FAQ from "./components/FAQ Section/FAQ";
import Footer from "./components/Footer/Footer";
import AboutCEO from "./ui/AboutCEO";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="flex flex-col gap-10 ">
      <Analytics />
      <HeroVector />
      <NavBar />
      <Hero />
      <HeroInfo />
      <AboutUs />
      <OtherServices />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <AboutCEO />
      <Footer />

      {/* <MotionTest /> */}
    </div>
  );
}

export default App;
