import React from "react";
import "./ratings.css";
import star from "../../icons/star-solid.svg";

const Ratings = props => {
  return (
    <div className="star-ratings">
      {Array.from(Array(props.rating), (e, i) => {
        return <img key={i} src={star} alt="star" />;
      })}
      <span className="reviews">
        ({props.reviews})
      </span>
    </div>
  );
};

export default Ratings;
