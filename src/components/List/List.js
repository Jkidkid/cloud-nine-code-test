import React from "react";
import ListItem from "../List-item/List-item";
import { Link } from "react-router-dom";
import "./list.css";

const List = props => {
  return (
    <ul className="list">
      <Link to="/salon">
        {Array.from(Array(5), (e, i) => {
          return (
            <ListItem
              key={i}
              time="12:00"
              title={`Salon-${i}`}
              address={`Address-${i}`}
              price={325}
              duration={30}
            />
          );
        })}
      </Link>
    </ul>
  );
};

export default List;
