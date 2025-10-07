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
import ServiceCard from "../ui/ServiceCard";

function OtherServices() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default visible slides
    slidesToScroll: 1,
    centerMode: true, // center the active slide
    centerPadding: "60px", // show partial prev/next slides
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // lap
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // tab
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480, // mob
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
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
      <ServiceCard />
    </section>
  );
}

export default OtherServices;
