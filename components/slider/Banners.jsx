import { useState } from "react";
import Slider from "react-slick";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
import Card from "./Card";
import ReactCardCarousel from "react-card-carousel";
import CardVertical from "./CardVertical";
import { Parallax } from "react-parallax";
import Banners2 from "./Banners2";
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
    <Parallax
      Parallax
      bgImage="/img/BG_Flat.png"
      bgImageAlt="the cat"
      strength={100}
    >
      <div className="bg-cover sm:h-[60vh] md:h-[50vh] xl:h-[60vh]  2xl:h-[70vh]  ">
        <div className="hidden sm:flex relative sm:top-28 xl:top-28 2xl:top-36 ">
          <Card />
        </div>

        <div className="grid sm:hidden relative bg-cover bgImage2 ">
          <Banners2/>
        </div>
      </div>
    </Parallax>
  );
}

export default Banners;
