import React, { useEffect, useState } from "react";
import Cars from "./Cars";

const Carslist = () => {
  const [database, setDatabase] = React.useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((result) => result.json())
      .then((body) => setDatabase(body));
  }, []);

  return (
    <>
      {Object.entries(database).map((car, i) => {
        return (
          <Cars
            key={database[i].id}
            id={database[i].id}
            src={database[i].src}
            name={database[i].name}
            price={database[i].price}
          />
        );
      })}
    </>
  );
};

export default Carslist;
