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
      alignItems: "middle",
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
          <button onClick={() => this.Carousel.next()} className="text-white mt-1 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adc2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-circle hover:stroke-green-300"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
          </button>
        </div>
        <div style={CardVertical.CONTAINER_STYLE}>
          <ReactCardCarousel
            ref={(Carousel) => (this.Carousel = Carousel)}
            alignment="vertical"
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
          <button onClick={() => this.Carousel.next()} className="text-white mt-2 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2adc2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down-circle hover:stroke-green-300"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
          </button>
        </div>
      </div>
    );
  }
}
