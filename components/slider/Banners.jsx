import { useState } from "react";
import Slider from "react-slick";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
import Card from "./Card";
import ReactCardCarousel from "react-card-carousel";
import CardVertical from "./CardVertical";

function Banners() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsArrowRightCircle size={50} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <BsArrowLeftCircle size={50} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="bg-gradient-to-t from-black to-black">
      <div
        className="h-[650px] w-full pt-40"
        style={{
          backgroundImage: "url('/img/backs/BG_S02.png')",
          opacity: "90%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hidden sm:flex">
          <Card />
        </div>

        <div className="flex sm:hidden">
          <CardVertical />
        </div>
      </div>
    </div>
  );
}

export default Banners;
