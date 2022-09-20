import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

export default class CardVertical extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      width: "100%",
      display: "flex",

      paddingTop: "180px",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
    };
  }

  static get CARD_STYLE() {
    return {};
  }

  render() {
    return (
      <div className="grid">
        {" "}
        <div className="flex pl-[45%]">
          {" "}
        
        </div>
        <div style={CardVertical.CONTAINER_STYLE}>
          <ReactCardCarousel
            ref={(Carousel) => (this.Carousel = Carousel)}
            alignment="horizontal"
          >
            <div className="w-[300px] 2xl:h-[400px] rounded-lg ">
              {" "}
              <img
                src="/img/Banners/SitioWeb_PromoAgo_xcien.png"
                className="rounded-lg sm:rounded-3xl"
              />{" "}
            </div>
            <div className="w-[300px]  2xl:h-[400px]  rounded-lg ">
              {" "}
              <img
                src="/img/Banners/Banner-IPv6-XCIEN.png"
                className="rounded-lg sm:rounded-3xl"
              />{" "}
            </div>
            <div className="w-[300px]  2xl:h-[400px]  rounded-lg">
              {" "}
              <img
                src="/img/Banners/banner-tanarah-xcien.png"
                className="rounded-lg sm:rounded-3xl"
              />{" "}
            </div>
            <div className="w-[300px]  2xl:h-[400px]  rounded-lg">
              {" "}
              <img
                src="/img/Banners/SDWAN-JUL-XCIEN.png"
                className="rounded-lg sm:rounded-3xl"
              />{" "}
            </div>
          </ReactCardCarousel>
        </div>
        <div className="flex pl-[45%]">
          {" "}
          
        </div>
      </div>
    );
  }
}
