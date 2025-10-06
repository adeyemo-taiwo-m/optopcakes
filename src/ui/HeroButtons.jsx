import { HiArrowSmallRight } from "react-icons/hi2";
import Button from "./Button";

function HeroButtons() {
  return (
    <div className="flex gap-3 mx-auto ">
      <Button icon={<HiArrowSmallRight />}>Order now</Button>
      <Button type="secondary">View menu</Button>
    </div>
  );
}

export default HeroButtons;
