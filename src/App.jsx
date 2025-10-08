import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroVector from "./ui/HeroVector";
import HeroInfo from "./components/HeroInfo";
import AboutUs from "./components/AboutUs";
import OtherServices from "./components/OtherServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MotionTest from "./ui/MotionTest";

function App() {
  return (
    <div className="flex flex-col gap-10 ">
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
      <Footer />

      {/* <MotionTest /> */}
    </div>
  );
}

export default App;
