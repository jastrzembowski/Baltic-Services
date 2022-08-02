import React from "react";
import Card from "../offers/Card";
import data from "../../data.json";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Filter from "./Filter"
import "./offerbox.scss";

function Offerbox() {
  
  return (
    <div className="box-flex">
      <div className="properties-bg"></div>
      <div className="offerbox-container">
      <Filter/>
        <div className="offers-box">
        {data.map((offer) => (
          <Card 
          key={offer.id}
          id={offer.id}
          src={offer.img[0].url}
          title={offer.title}
          description={offer.description}
          price={offer.price}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Offerbox;
