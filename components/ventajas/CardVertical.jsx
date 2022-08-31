import React from "react";

const CardVertical = (props) => {
  const { id, url, active, title, description } = props.data;

  return (
    <div onTouchStartCapture={() => props.onCardClick(id)}> <div
      className={` cardV ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div></div>
   
  );
};

export default CardVertical;
