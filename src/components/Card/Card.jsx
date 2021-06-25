import React from "react";

// image
import cardImage from "./../../assets/Audio Speacker.png";

// style
import "./card.sass";

function Card({ title, desc, price, src = cardImage, padding, isDark, isCenter, isBackgroundImage }) {
  return (
    <div className="card" style={isDark ? { background: "#2C2C2C" } : null}>
      <div className="card__img" style={padding || isBackgroundImage ? { padding: "17px 25px" } : null}>
        <img src={src} alt="card__image" />
      </div>
      <div className="card__inner" style={isCenter ? { textAlign: "center" } : null}>
        <h2 className="card__title" style={isDark ? { color: "#fff" } : null}>
          {title}
        </h2>
        <div className="card__info" style={isCenter ? { flexDirection: "column" } : null}>
          <span className="card__desc" style={isCenter ? { marginBottom: "18px" } : null}>
            {desc}
          </span>
          <span className="card__price" style={isDark ? { color: "#fff" } : null}>
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
