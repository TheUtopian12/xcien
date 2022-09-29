import React from "react";

const Card = (props) => {
  const { id, url, active, title, description } = props.data;

  return (
    <div
      className={`card ${active && "active"}`}
      style={{ backgroundImage: `url(${url})` }}
      onMouseEnter={() => props.onCardClick(id)}
    >
      <div style={{ backdropFilter: "blur(2px)", height: "600px" }}>
        <h3 className="text-white">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
