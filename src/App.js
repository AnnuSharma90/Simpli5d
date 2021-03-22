import "./App.css";
import "tachyons";
import React, { Component } from "react";
import {Link } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <h1>READY TO BUY</h1>
      <h1 style={{ color: "rgb(51, 71, 102)" }}>A NEW CAR!</h1>
      <p>
        A new car will likely be more reliable than a used one, even though
        pre-owned cars are much more dependable than in the past. If a new car
        breaks down, you can have it fixed for free under the included factory
        warranty, at least for the first 36,000 miles or three years that most
        carmakers offer
      </p>
      
      <Link to={"/Carslist"}>Buy Now!</Link>
    </div>
  );
}

export default App;
