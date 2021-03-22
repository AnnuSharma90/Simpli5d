import React from "react";
import "./Singlecar.css"

function Singlecar({ src, name, price, description, fuel, engine }) {
  //console.log("single car invoked");
  return (
    <div style={{background:"black center center fixed",backgroundSize:"cover", color:"white", width: "100%", height:"100%", overflow:"hidden"}}>
      <img style={{height:"30rem", width: "50%"}} src={src}></img>
      <h1>{name}</h1>
      <p style={{width:"50%"}}>{description}</p>
      <h5>Price: {price}</h5>
      <h5>Fuel-Type: {fuel}</h5>
      <h5>Engine: {engine}</h5>
    </div>
  );
}
export default Singlecar;
