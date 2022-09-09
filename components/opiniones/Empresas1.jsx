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
      <div className="2xl:w-[1800px] sm:w-[1280px] w-[360px] pr-10 pl-10 sm:pr-36 sm:pl-36 text-center">
        <Slider {...settings2} className="text-center" >
         <div className="ml-[15%] 2xl:ml-[25%]">
            <img src="/img/Empresas 1/Cambium.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/cisco.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/Mikrotik.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/mimosa.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/odoo.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/tp-link.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/Ubiquiti.png" className="w-40"/>
         </div>
        </Slider>
      </div>
      <div className="2xl:w-[1800px] sm:w-[1280px] w-[360px] pr-10 pl-10 sm:pr-36 sm:pl-36 text-center hidden">
        <Slider {...settings} className="text-center" >
         <div className="ml-[15%] 2xl:ml-[25%]">
            <img src="/img/Empresas 1/Cambium.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/cisco.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/Mikrotik.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/mimosa.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/odoo.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/tp-link.png" className="w-40"/>
         </div>
         <div className="ml-[15%]  2xl:ml-[25%]">
            <img src="/img/Empresas 1/Ubiquiti.png" className="w-40"/>
         </div>
        </Slider>
      </div>
      </>
    );
  }
}