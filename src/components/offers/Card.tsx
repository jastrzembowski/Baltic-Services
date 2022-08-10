import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({
  src,
  title,
  description,
  price,
  id,
}: InferProps<typeof Card.propTypes>) {
  return (
    <div className="card" key={id}>
      <Link to={`${id}`}>
        <img src={src} alt="images" />
        <div className="card__container">
          <div className="card__info">
            <h2>{title}</h2>
            <h4 className="description">{description}</h4>
            <h3>{price}zł</h3>
          </div>
          <button className="btn">SZCZEGÓŁY</button>
        </div>{" "}
      </Link>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default Card;
