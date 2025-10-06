import { HiArrowSmallRight } from "react-icons/hi2";
import Button from "./Button";

function HeroButtons() {
  return (
    <div className="flex gap-3 mx-auto  lap:mx-0 ">
      <Button icon={<HiArrowSmallRight />}>Order now</Button>
      <Button type="secondary">View menu</Button>
    </div>
  );
}

export default HeroButtons;
