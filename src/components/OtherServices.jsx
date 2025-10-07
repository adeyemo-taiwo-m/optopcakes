import Heading from "../ui/Heading";
import HeroInfoCard from "../ui/HeroInfoCard";
import P from "../ui/P";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../ui/Arrow";
import PrevArrow from "../ui/PrevArrow";

import { paragraph } from "../Utils/Paragragh";
import { productData } from "../assets/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";
import { HiArrowSmallRight } from "react-icons/hi2";

function OtherServices() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow icon={<FaArrowLeft />} style={"left-0"} />,
    nextArrow: <Arrow icon={<FaArrowRight />} style={"right-0"} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section
      className={`relative w-full mx-auto rounded-tl-[50px] rounded-tr-[50px] ${paragraph} py-14 bg-secondary-default overflow-visible`}
    >
      <div className="space-y-3 pt-10">
        <Heading type="h2" otherStyle={"text-white opacity-90"}>
          Other Services
        </Heading>
        <P otherStyle={"text-white opacity-75"}>
          Beyond small chops, we offer a complete range of event services from
          custom cakes and elegant decorations to full catering and traditional
          engagement setups, all tailored to make your occasion unforgettable
        </P>
      </div>

      {/* Slider Section */}
      <div className="relative mt-10 ">
        <Slider {...settings}>
          {productData.map((data, i) => (
            <div key={i} className="px-2">
              <HeroInfoCard
                imageName={data.imageName}
                title={data.title}
                price={data.price}
              >
                {data.description}
              </HeroInfoCard>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="text-center mt-10 flex justify-center items-center gap-2.5">
        <Button icon={<HiArrowSmallRight />}>Order now</Button>
        <Button type="secondary">View more packages</Button>
      </div> */}
    </section>
  );
}

export default OtherServices;
