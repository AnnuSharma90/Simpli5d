import React from "react";
import Singlecar from "./Singlecar";
import { database } from "./database";

function Cardetail(props) {
  console.log("on car details");
    const id = props.match.params.id;

   // console.log("id:" + id);

    var car = database.find(item => item.id === id);

   // console.log("car:" + car);

    return (
        <Singlecar
          src={car.src}
          name={car.name}
          price={car.price}
          description={car.description}
          fuel={car.fuel}
          engine={car.engine}
        />
      );

   
}
export default Cardetail;
