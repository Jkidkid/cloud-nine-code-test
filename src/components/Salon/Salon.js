import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import image_small from "../../images/image.jpg";
import image_medium from "../../images/image@2x.jpg";
import image_large from "../../images/image@3x.jpg";
import "./salon.css";
import Ratings from "../Ratings/Ratings";
import arrow from "../../icons/arrow.svg";
import heart from "../../icons/heart.svg";
import globe from "../../icons/globe.svg";
import pin from "../../icons/pin.svg";
import phone from "../../icons/phone.svg";
import clock from "../../icons/clock.svg";

const Salon = props => {
  let params = useParams();

  const getSalon = (data, id) => {
    return data.filter(salon => salon.id === id);
  };

  const getRes = [...getSalon(data, params.id)];
  const getDate = new Date().getDay();

  return (
    <div>
      {getRes &&
        getRes.map(salon => {
          return (
            <div className="salon-continer" key={params.id}>
              <div className="salon--hero">
                <div className="salon--hero-media">
                  <img
                    src={image_small}
                    srcset={`
                        ${image_small} 375w, 
                        ${image_medium} 750w, 
                        ${image_large} 1024w
                      `}
                    sizes="
                      (min-width: 750px) 1024px,
                      (min-width: 375px) 750px,
                      100vw
                    "
                    alt="Salon"
                  />
                </div>
                <div className="topbar">
                  <Link to={`/`}>
                    <img className="arrow" src={arrow} alt="arrow" />
                  </Link>
                  <img className="heart" src={heart} alt="heart" />
                </div>
                <div className="salon--hero-content">
                  <h1>
                    {salon.title}
                  </h1>
                  <Ratings rating={salon.ratings} reviews={salon.reviews} />
                </div>
              </div>
              <div className="tabs--container">
                <div className="tab">
                  <h3 className="info">Info</h3>
                </div>
                <div className="tab">
                  <h3 className="schema">Schema</h3>
                </div>
              </div>
              <div className="salon--info">
                <p className="salon--info-row salon--address">
                  <span className="salon-info--icon">
                    <img src={pin} alt="pin" />
                  </span>
                  {salon.address} {salon.city}
                </p>
                <p className="salon--info-row salon--hours">
                  <span className="salon-info--icon">
                    <img src={clock} alt="clock" />
                  </span>
                  {salon.opening_hours[getDate]}
                </p>
                <p className="salon--info-row salon--phone">
                  <span className="salon-info--icon">
                    <img src={phone} alt="phone" />
                  </span>
                  {salon.phone_number}
                </p>
                <p className="salon--info-row salon--url">
                  <span className="salon-info--icon">
                    <img src={globe} alt="globe" />
                  </span>
                  {salon.url}
                </p>
                <p className="salon--info-row salon--description">
                  {salon.desctiption}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Salon;
