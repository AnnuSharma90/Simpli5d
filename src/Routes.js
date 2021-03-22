import React, { Component } from "react";
import {
 HashRouter,
  Switch,
  Route
} from "react-router-dom";
import App from "./App.js";
import Carslist from "./Carslist";
import Cardetail from "./Cardetail";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Carslist" component={Carslist} />
          <Route path="/Cardetail/:id" component={Cardetail} />
        </Switch>
      </HashRouter>
    );
  }
}
