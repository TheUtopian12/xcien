import React, { Component } from "react";
import Slider from "react-slick";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="2xl:w-[1800px] w-[300px]  pr-20 pl-20 text-center">
        <Slider {...settings} className="text-center">
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/Aiisa.png" className="w-40" />
          </div>
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/Assetel.png" className="w-40" />
          </div>
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/Coeficiente.png" className="w-40" />
          </div>
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/cogent.png" className="w-40" />
          </div>
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/Evengroup.png" className="w-40" />
          </div>
          <div className="ml-[25%]">
            <img src="/img/Empresas 2/Sparkle.png" className="w-40" />
          </div>
        </Slider>
      </div>
    );
  }
}
