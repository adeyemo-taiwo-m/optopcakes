import { Element } from "react-scroll";
import HeroButtons from "../ui/HeroButtons";
import HeroImage from "../ui/HeroImage";

function Hero() {
  return (
    <>
      <Element
        name="hero"
        className="py-8  flex w-4/5 flex-col mx-auto gap-4 tab:gap-6 "
      >
        <div className="space-y-3">
          <h1 className="font-serif text-4xl tab:text-5xl lap:text-6xl] font-semibold  text-text-header mx-auto text-center w-4/5  ">
            Fresh & Tasty{" "}
            <span className="text-primary-default">Small Chops for</span> Every
            Occasion
          </h1>
          <p className="text-center tab:w-4/5 tab:mx-auto">
            Perfectly prepared finger foods delivered to your event, ensuring
            every guest enjoys a tasteful and hassle-free experience
          </p>
        </div>
        <HeroButtons />
      </Element>
      <HeroImage />
    </>
  );
}

export default Hero;
