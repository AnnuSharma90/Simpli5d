import React from "react";
import "tachyons";
import {Link, NavLink } from "react-router-dom";

function Cars({ id, src, name, price }) {
  return (
    <div style={{ background: "black" }}>
      <div className="tc pa3 pa5-ns">
        <div className="hide-child relative ba b--black-20 mw5 center">
          <img src={src} className="db" alt="Photo of Jesse Grant" />
          <div className="pa1 bt b--black-20">
            <p className="f6 db link dark-blue hover-blue" href="#">
              Name:{name}
            </p>
            <p className="f6 gray mv1">Price:{price}</p>
            <NavLink to={`/Cardetail/${id}`} activeStyle={{color:"white", textDecoration:"none"}} >View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cars;
