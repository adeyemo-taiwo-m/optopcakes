import Heading from "../../ui/Heading";
import HeroInfoCard from "./HeroInfoCard";
import P from "../../ui/P";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../../ui/Arrow";
import PrevArrow from "../../ui/PrevArrow";
import Button from "../../ui/Button";

import { paragraph } from "../../Utils/Paragragh";
import { productData } from "../../assets/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import { fadeUpSection } from "../../Utils/helpers";
// eslint-disable-next-line
import { motion } from "motion/react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { scroller } from "react-scroll";

function HeroInfo() {
  const { setCart, handleViewToCart } = useContext(AppContext) || [];

  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
                totalPrice:
                  (item.quantity + product.quantity) * Number(item.price),
              }
            : item
        );
      }

      return [...prevCart, { ...product, price: Number(product.price) }];
    });
  }

  function handleDelete(product) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== product.title)
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow icon={<FaArrowLeft />} style={"left-0"} />,
    nextArrow: <Arrow icon={<FaArrowRight />} style={"right-0"} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
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
    <motion.section
      {...fadeUpSection()}
      className={`relative w-full mx-auto rounded-tl-[50px] rounded-tr-[50px] ${paragraph} py-14 bg-primary-light `}
    >
      <div className="space-y-3 ">
        <Heading type="h2">Small Chops Packages</Heading>
        <P>
          From crispy spring rolls and savory samosas to fluffy puff puff and
          golden sausage rolls, perfectly crafted for every occasion
        </P>
      </div>

      {/* Slider Section */}
      <div className="relative mt-10 w-full ">
        <Slider {...settings}>
          {productData.map((data, i) => (
            <div key={i} className="px-2 !block">
              <HeroInfoCard
                imageName={data.imageName}
                title={data.title}
                price={data.price}
                onAddToCart={handleAddToCart}
                onDelete={handleDelete}
              >
                {data.description}
              </HeroInfoCard>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-10 flex justify-center items-center gap-2.5">
        <Button icon={<HiArrowSmallRight />} onClick={handleViewToCart}>
          View cart
        </Button>
        <Button
          type="secondary"
          onClick={() => {
            scroller.scrollTo("services", {
              smooth: true,
              duration: 600,
              offset: 0,
            });
          }}
        >
          View menu{" "}
        </Button>
      </div>
    </motion.section>
  );
}

export default HeroInfo;
