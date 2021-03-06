import React from "react";
import Ratings from "../Ratings/Ratings";
import "./list-item.css";

const listItem = props => {
  return (
    <li className="list-item" key={props.childKey}>
      <div className="time-container">
        <p>
          {props.time}
        </p>
      </div>
      <div className="salon-info">
        <h3 className="salon-title">
          {props.title}
        </h3>
        <Ratings rating={props.rating} reviews={props.reviews} />
        <div className="salon-address">
          {props.address}
        </div>
      </div>
      <div className="salon-price-duration">
        <div className="price">
          {props.price}
          {props.curreny}
        </div>
        <div className="duration">
          {props.duration}
        </div>
      </div>
    </li>
  );
};

export default listItem;
