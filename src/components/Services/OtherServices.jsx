import Heading from "../../ui/Heading";
import P from "../../ui/P";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { paragraph } from "../../Utils/Paragragh";

import ServiceCarousel from "../../ui/ServiceCarousel";
import { useEffect, useState } from "react";

function OtherServices() {
  const [baseWidth, setBaseWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBaseWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`relative w-full mx-auto  ${paragraph} py-14 bg-secondary-default overflow-visible`}
    >
      <div className="space-y-3 pt-4 relative">
        <Heading type="h2" otherStyle={"text-white opacity-90"}>
          Other Services
        </Heading>
        <P otherStyle={"text-white opacity-75"}>
          Beyond small chops, we offer a complete range of event services from
          custom cakes and elegant decorations to full catering and traditional
          engagement setups, all tailored to make your occasion unforgettable
        </P>
        <span className="text-primary-default absolute right-0  w-full text-right  lap:hidden text-sm">
          {"Swipe>>>"}
        </span>
      </div>

      {/* Carousel */}
      <div
        style={{ position: "relative" }}
        className="flex justify-center mt-16 items-center"
      >
        <ServiceCarousel
          baseWidth={baseWidth}
          width="100%"
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
}

export default OtherServices;
