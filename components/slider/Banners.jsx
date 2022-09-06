import { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Card from "./Card";
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
    <div className="bg-gradient-to-t from-black to-black ">
      <video
        src="/video/BG02.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          widows: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      />
      <div className="h-[0px] w-full pt-40 -translate-y-[350px] sm:-translate-y-[800px] "
     
      
      >
        <div className="hidden sm:flex">
          <Card />
        </div>

        <div className="grid sm:hidden  ">
          <CardVertical />
        </div>
      </div>
    </div>
  );
}

export default Banners;
