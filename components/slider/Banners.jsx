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
    <div className="bg-gradient-to-t from-black to-black h-[350px] sm:h-[300px] md:h-[500px] lg:h-screen">
      <video
        src="https://res.cloudinary.com/dtdxwe8yz/video/upload/v1662505901/VideosXcien/BG02_epjpva.mp4"
        autoPlay
        loop
        muted
        className="bg-cover w-full hidden sm:grid"
      />

      <div className="hidden sm:flex relative sm:top-[-300px]  md:top-[-350px] lg:top-[-400px] xl:top-[-500px] 2xl:top-[-800px]">
        <Card />
      </div>

      <div className="grid sm:hidden relative bg-cover bgImage2 ">
        <CardVertical />
      </div>
    </div>
  );
}

export default Banners;
