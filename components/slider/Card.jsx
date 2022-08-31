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
      <div style={Card.CONTAINER_STYLE} >
        <ReactCardCarousel ref={ Carousel => this.Carousel = Carousel }  >
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
        <button onClick={()=>this.Carousel.next()} className='text-white'>Next</button>
      </div>
    );
  }
}
