import React from "react";

function Card({ title, desc, price }) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <span className="card__desc">{desc}</span>
      <span className="card__price">{price}</span>
    </div>
  );
}

export default Card;
