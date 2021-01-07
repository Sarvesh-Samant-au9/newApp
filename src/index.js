import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import CountryByCode from "./Components/CountryByCode";
import EachCountry from "./Components/EachCountry";
import Asia from "./Components/Region/Asia";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/countryName/:id" component={EachCountry} />
        <Route path="/countryCode/:code" component={CountryByCode} />
        <Route path="/region/:regional" component={Asia} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
