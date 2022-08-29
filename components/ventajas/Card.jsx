import React from "react";

const Card = (props) => {
  const { id, url, active, title, description } = props.data;

  return (
    <div
      className={`card ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => props.onCardClick(id)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
