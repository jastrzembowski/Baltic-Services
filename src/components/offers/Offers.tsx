import React from "react";
import Card from "./Card";
import data from "../../data.json";

import "./offers.scss";
function Offers() {
  return (
    <div className="offers-flexbox">
      <div className="offers-container">
        {data.slice(0,6).map((offer) => (
          <Card key={offer.id}
          id={offer.id}
          src={offer.img[0].url}
          title={offer.title}
          description={offer.description}
          price={offer.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
