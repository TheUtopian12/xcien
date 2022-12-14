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
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (

      <>
      
      <div className="hidden sm:flex"><div className="2xl:w-[1800px] sm:w-[1280px] w-[360px] pr-10 pl-10 sm:pr-36 sm:pl-36 text-center ">
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
      </div></div>
      
      <div className="flex sm:hidden"><div className="2xl:w-[1800px] sm:w-[1280px] w-[360px] pr-10 pl-10 sm:pr-36 sm:pl-36 text-center ">
        <Slider {...settings2} className="text-center">
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
      </div></div>
      
      </>
      
      
    );
  }
}
