import React from "react";
import "./salons.css";
import List from "../List/List";
import filter from "../../icons/filter.svg";
import arrow from "../../icons/arrow.svg";

const Salons = props => {
  return (
    <div className="salons-container">
      <div className="salons-header">
        <img className="salons-header--icon arrow" src={arrow} alt="arrow" />
        <h1 className="heading">Salons</h1>
        <img className="salons-header--icon filter" src={filter} alt="filter" />
      </div>
      <div className="filter-section">
        <p className="filter-price">Pris 250 - 500 kr</p>
        <img className="filter-section--icon" src={arrow} alt="arrow" />
      </div>
      <List />
    </div>
  );
};

export default Salons;
