import React from "react";

const Ratings = props => {
  return (
    <div className="star-ratings">
      {Array.from(Array(props.rating), (e, i) => {
        return <span key={i}>star</span>;
      })}
      <span>
        ({props.reviewes})
      </span>
    </div>
  );
};

export default Ratings;
