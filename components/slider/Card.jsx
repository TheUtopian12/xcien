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
      
      <div style={Card.CONTAINER_STYLE}>
        
        <ReactCardCarousel>
        <div className="w-[800px] h-[300px] rounded-3xl">
            {" "}
            <img src="/img/Banners/SitioWeb_PromoAgo_xcien.png" className="rounded-3xl"/>{" "}
          </div>
          <div className="w-[800px] h-[300px] rounded-3xl " >
            {" "}
            <img src="/img/Banners/Banner-IPv6-XCIEN.png" className="rounded-3xl"/>{" "}
          </div>
          <div className="w-[800px] h-[300px] rounded-3xl">
            {" "}
            <img src="/img/Banners/banner-tanarah-xcien.png"  className="rounded-3xl"/>{" "}
          </div>
          <div className="w-[800px] h-[300px] rounded-3xl">
            {" "}
            <img src="/img/Banners/SDWAN-JUL-XCIEN.png"  className="rounded-3xl"/>{" "}
          </div>
          
        </ReactCardCarousel>
      </div>
    );
  }
}
