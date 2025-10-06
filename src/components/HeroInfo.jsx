import Heading from "../ui/Heading";
import P from "../ui/P";
import { paragraph } from "../Utils/Paragragh";

function HeroInfo() {
  return (
    <section
      className={`w-full h-60 rounded-tl-[50px] rounded-tr-[50px] ${paragraph} py-10  bg-primary-light`}
    >
      <div className="space-y-3">
        <Heading type="h2">Popular Small Chops</Heading>
        <P>
          From crispy spring rolls and savory samosas to fluffy puff puff and
          golden sausage rolls, perfectly crafted for every occasion
        </P>
      </div>
    </section>
  );
}

export default HeroInfo;
