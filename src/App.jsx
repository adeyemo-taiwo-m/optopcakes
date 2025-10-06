import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroVector from "./ui/HeroVector";
import HeroInfo from "./components/HeroInfo";

function App() {
  return (
    <div className="flex flex-col gap-10 ">
      <HeroVector />
      <NavBar />
      <Hero />
      <HeroInfo />
    </div>
  );
}

export default App;
