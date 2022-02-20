import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

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
              <h1>
                {salon.title}
              </h1>
              <p>
                {salon.address} {salon.city}
              </p>
              <p>
                {salon.opening_hours[getDate]}
              </p>
              <p>
                {salon.phone_number}
              </p>
              <p>
                {salon.url}
              </p>
              <p>
                {salon.desctiption}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Salon;
