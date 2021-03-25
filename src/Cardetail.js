import React, {useEffect, useState} from "react";
import Singlecar from "./Singlecar";
//import { database } from "./database";

function Cardetail(props) {

  const [database, setDatabase] = React.useState({});
  const id = props.match.params.id;

  useEffect(() => {
    fetch("/api/data/" + id)
      .then((result) => result.json())
      .then((body) => setDatabase(body));
  }, []);
  
  console.log("on car details");
  
    return (
        <Singlecar
          src={database.src}
          name={database.name}
          price={database.price}
          description={database.description}
          fuel={database.fuel}
          engine={database.engine}
        />
      );

   
}
export default Cardetail;
