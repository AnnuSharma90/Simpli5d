import React, { Component } from "react";
import {
 BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import App from "./App.js";
import Carslist from "./Carslist";
import Cardetail from "./Cardetail";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Simpli5d" exact component={App} />
          <Route path="/Simpli5d/Carslist" component={Carslist} />
          <Route path="/Simpli5d/Cardetail/:id" component={Cardetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
