import React from "react";
import { Route, Link } from "react-router-dom";
import ListItem from "../List-item/List-item";
import Salon from "../Salon/Salon";
import data from "../../data/data.json";

import "./list.css";

const List = props => {
  const minutes = new Date().getMinutes();
  const hour = new Date().getHours();
  const time = `${minutes != 0 ? hour + 1 : hour}:00`;

  return (
    <ul className="list">
      {data &&
        data.map(salon => {
          return (
            <Link
              to={`/salons/${salon.id}`}
              element={<Salon id={salon.id} />}
              key={salon.id}
            >
              <ListItem
                key={salon.id}
                id={salon.id}
                time={time}
                title={salon.title}
                address={salon.address}
                price={salon.service.hairCut.price}
                curreny={salon.service.hairCut.currency}
                duration={salon.service.hairCut.duration}
                reviews={salon.reviews}
                rating={salon.ratings}
              />
            </Link>
          );
        })}
    </ul>
  );
};

export default List;
