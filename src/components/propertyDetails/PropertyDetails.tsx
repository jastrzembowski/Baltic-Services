import React from "react";
import data from "../../data.json";
import Filter from "../offerbox/Filter";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./propertyDetails.scss";

function PropertyDetails() {
  const { id }: any = useParams();
  const y: number = parseInt(id) - 1;

  return (
    <>
      <img src={data[`${y}`].img[1].url} alt="house" className="bg-img"></img>{" "}
      <div className="container">
        <div className="flex-box">
          <div className="head-container">
            <Filter />
            <div className="slider-box">
              <div className="top-text__box">
                <div className="titles-holder">
                  <h2>{data[`${y}`].subtitle}</h2>
                  <p>{data[`${y}`].title}</p>
                  <p>
                    {data[`${y}`].city}, {data[`${y}`].distriction}
                  </p>
                </div>
                <div className="top-utils">
                  <FontAwesomeIcon icon={faHeart} />
                  <button>Zarezerwuj teraz</button>
                </div>
              </div>
              <img
                src={data[`${y}`].img[0].url}
                alt="house"
                className="slider-img"
              ></img>
            </div>
          </div>
          <div className="about-container">
            <article>
              <p>{data[`${y}`].descriptionTitle}</p>
              <p>{data[`${y}`].description}</p>
              <p>Najważniejsze udogodnienia to: </p>
              <ul>
                {" "}
                {data[`${y}`].features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </article>
            <aside>
              <h2> Atuty obiektu:</h2>
              <ul>
                {" "}
                {data[`${y}`].features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <button>Zarezerwuj teraz</button>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PropertyDetails;
