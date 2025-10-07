import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroVector from "./ui/HeroVector";
import HeroInfo from "./components/HeroInfo";
import AboutUs from "./components/AboutUs";
import OtherServices from "./components/OtherServices";

function App() {
  return (
    <div className="flex flex-col gap-10 ">
      <HeroVector />
      <NavBar />
      <Hero />
      <HeroInfo />
      <AboutUs />
      <OtherServices />
    </div>
  );
}

export default App;
