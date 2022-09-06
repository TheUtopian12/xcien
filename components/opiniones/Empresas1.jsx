import React, { Component } from "react";
import Slider from "react-slick";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="2xl:w-[1800px] w-[380px] pr-20 pl-20 text-center">
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
    );
  }
}