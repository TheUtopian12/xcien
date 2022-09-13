import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

export default class Card extends Component {
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
      <div style={Card.CONTAINER_STYLE} className="flex">
        <div>
          <button
            onClick={() => this.Carousel.prev()}
            className="text-white pl-12 xl:translate-y-[-100px] 2xl:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2adc2f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left-circle hover:stroke-green-300"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 8 8 12 12 16"></polyline>
              <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
          </button>
        </div>

        <ReactCardCarousel ref={(Carousel) => (this.Carousel = Carousel)}>
          <div className="2xl:w-[1000px] 2xl:h-[300px] rounded-lg ">
            {" "}
            <img
              src="/img/Banners/SitioWeb_PromoAgo_xcien.png"
              className="rounded-lg sm:rounded-3xl"
            />{" "}
          </div>
          <div className="2xl:w-[1000px] 2xl:h-[300px]  rounded-lg ">
            {" "}
            <img
              src="/img/Banners/Banner-IPv6-XCIEN.png"
              className="rounded-lg sm:rounded-3xl"
            />{" "}
          </div>
          <div className="2xl:w-[1000px] 2xl:h-[300px]  rounded-lg">
            {" "}
            <img
              src="/img/Banners/banner-tanarah-xcien.png"
              className="rounded-lg sm:rounded-3xl"
            />{" "}
          </div>
          <div className="2xl:w-[1000px] 2xl:h-[300px]  rounded-lg">
            {" "}
            <img
              src="/img/Banners/SDWAN-JUL-XCIEN.png"
              className="rounded-lg sm:rounded-3xl"
            />{" "}
          </div>
        </ReactCardCarousel>
        <div>
          <button
            onClick={() => this.Carousel.next()}
            className="text-white pr-12 xl:translate-y-[-100px] 2xl:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2adc2f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right-circle hover:stroke-green-300"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
