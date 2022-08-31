import React from "react";

const CardVertical = (props) => {
  const { id, url, active, title, description } = props.data;

  return (
    <div
      className={` cardV ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onMouseEnter={() => props.onCardClick(id)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardVertical;
