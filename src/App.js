import React, { Component } from "react";
import AllCountry from "./Components/AllCountry";
import Navbar from "./Components/Navbar/Navbar";
const countryUrl = `https://restcountries.eu/rest/v2/all`;
export class App extends Component {
  constructor() {
    super();
    this.state = {
      allContry: [],
      worldPop: 0,
      AsiaPop: 0,
      AmericasPop: 0,
      EuropesPop: 0,
      AfricasPop: 0,
      AustraliasPop: 0,
      PolarPopulation: 0,
      AsiaLand: 0,
      WorldLand: 0,
      EuropeLand: 0,
      AfricaLand: 0,
      AmericaLand: 0,
      OceaniaAusLand: 0,
      PolarLand: 0,
    };
  }
  componentDidMount() {
    fetch(countryUrl)
      .then(function (data) {
        return data.json();
      })
      .then((response) => {
        this.setState({
          allContry: response,
          worldPop: response
            .map((country) => {
              return country.population;
            })
            .reduce((prev, next) => {
              return prev + next;
            }, 0),
          AsiaPop: response
            .filter((region) => {
              return region.region === "Asia";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          AmericasPop: response
            .filter((region) => {
              return region.region === "Americas";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          EuropesPop: response
            .filter((region) => {
              return region.region === "Europe";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          AustraliasPop: response
            .filter((region) => {
              return region.region === "Oceania";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          AfricasPop: response
            .filter((region) => {
              return region.region === "Africa";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          PolarPopulation: response
            .filter((region) => {
              return region.region === "Polar";
            })
            .map(function (pop) {
              return pop.population;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          WorldLand: response
            .map((country) => {
              return country.area;
            })
            .reduce((prev, next) => {
              return prev + next;
            }, 0),
          AsiaLand: response
            .filter((region) => {
              return region.region === "Asia";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          AmericaLand: response
            .filter((region) => {
              return region.region === "Americas";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          EuropeLand: response
            .filter((region) => {
              return region.region === "Europe";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          AfricaLand: response
            .filter((region) => {
              return region.region === "Africa";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          OceaniaAusLand: response
            .filter((region) => {
              return region.region === "Oceania";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
          PolarLand: response
            .filter((region) => {
              return region.region === "Polar";
            })
            .map(function (pop) {
              return pop.area;
            })
            .reduce(function (prev, next) {
              return prev + next;
            }, 0),
        });
      })
      .catch((error) => this.setState({ allContry: error }));
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Navbar
          allCountryArray={this.state.allContry}
          landInfo={{
            WorldLand: this.state.WorldLand,
            AsiaLand: this.state.AsiaLand,
            AmericaLand: this.state.AmericaLand,
            AfricaLand: this.state.AfricaLand,
            EuropeLand: this.state.EuropeLand,
            OceaniaLand: this.state.OceaniaAusLand,
            PolarLand: this.state.PolarLand,
          }}
          populationInfo={{
            WorldPopulation: this.state.worldPop,
            AsiaPopulation: this.state.AsiaPop,
            AmericasPopulation: this.state.AmericasPop,
            AfricaPopulation: this.state.AfricasPop,
            OceaniaPopulation: this.state.AustraliasPop,
            EuropePopulation: this.state.EuropesPop,
            PolarPopulation: this.state.PolarPopulation,
          }}
        />
        <AllCountry
          allCountryArray={this.state.allContry}
          landInfo={{
            WorldLand: this.state.WorldLand,
            AsiaLand: this.state.AsiaLand,
            AmericaLand: this.state.AmericaLand,
            AfricaLand: this.state.AfricaLand,
            EuropeLand: this.state.EuropeLand,
            OceaniaLand: this.state.OceaniaAusLand,
            PolarLand: this.state.PolarLand,
          }}
          populationInfo={{
            WorldPopulation: this.state.worldPop,
            AsiaPopulation: this.state.AsiaPop,
            AmericasPopulation: this.state.AmericasPop,
            AfricaPopulation: this.state.AfricasPop,
            OceaniaPopulation: this.state.AustraliasPop,
            EuropePopulation: this.state.EuropesPop,
            PolarPopulation: this.state.PolarPopulation,
          }}
        />
      </div>
    );
  }
}

export default App;
