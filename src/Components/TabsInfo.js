import React, { useState, useEffect } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabsStyle.css";
import { Pie, Line, Bar, Doughnut, Bubble } from "react-chartjs-2";
import Weather from "./Weather";

const TabsInfo = (props) => {
  console.log(props);
  const [pop, setPop] = useState("");
  const [worldPop, setWorldPop] = useState("");
  const [land, setLand] = useState("");

  const solutionPop = () => {
    if (props.tabsInfoPassed.region === "Asia") {
      setPop(props.populationInfo.AsiaPopulation);
      setLand(props.landInfo.AsiaLand);
    } else if (props.tabsInfoPassed.region === "Europe") {
      setPop(props.populationInfo.EuropePopulation);
      setLand(props.landInfo.EuropeLand);
    } else if (props.tabsInfoPassed.region === "Africa") {
      setPop(props.populationInfo.AfricaPopulation);
      setLand(props.landInfo.AfricaLand);
    } else if (props.tabsInfoPassed.region === "Americas") {
      setPop(props.populationInfo.AmericasPopulation);
      setLand(props.landInfo.AmericaLand);
    } else if (props.tabsInfoPassed.region === "Oceania") {
      setPop(props.populationInfo.OceaniaPopulation);
      setLand(props.landInfo.OceaniaLand);
    } else if (props.tabsInfoPassed.region === "Polar") {
      setLand(props.populationInfo.Land);
      setPop(props.populationInfo.PolarPopulation);
    }
  };
  console.log(props.tabsInfoPassed.latlng[0]);
  const latitude = props.tabsInfoPassed.latlng[0];
  const longitude = props.tabsInfoPassed.latlng[1];
  useEffect(() => {
    solutionPop();
    setWorldPop(props.populationInfo.WorldPopulation);
  }, []);
  // console.log(pop);
  const numberWithCommas = (n) => {
    n = n.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(n)) n = n.replace(pattern, "$1,$2");
    return n;
  };

  const charDataPopulation = () => {
    return {
      labels: [props.tabsInfoPassed.region, props.tabsInfoPassed.name],
      datasets: [
        {
          label: "Population",
          data: [pop, props.tabsInfoPassed.population],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    };
  };
  const chardataLand = () => {
    return {
      labels: [props.tabsInfoPassed.region, props.tabsInfoPassed.name],
      datasets: [
        {
          label: "Land Distribution",
          data: [land, props.tabsInfoPassed.area],
          backgroundColor: ["rgba(235, 54, 226, 0.6)", "rgba(1, 7, 1, 0.753)"],
        },
      ],
    };
  };
  const completedData = () => {
    const {
      WorldPopulation,
      AsiaPopulation,
      AmericasPopulation,
      EuropePopulation,
      AfricaPopulation,
      OceaniaPopulation,
      PolarPopulation,
    } = props.populationInfo;

    return {
      labels: ["Asia", "Africa", "Australia", "Europe", "Americas", "Polar"],
      datasets: [
        {
          label: "DemoGraphs For Land",
          data: [
            AsiaPopulation,
            AfricaPopulation,
            OceaniaPopulation,
            EuropePopulation,
            AmericasPopulation,
            PolarPopulation,
          ],
          backgroundColor: [
            "rgb(255, 98, 98)",
            "rgb(255, 168, 38)",
            "rgb(98, 255, 132)",
            "rgb(250, 98, 255)",
            "rgb(255, 245, 98)",
            "rgb(131, 89, 0)",
          ],
        },
      ],
    };
  };
  const completedDataLand = () => {
    const {
      AsiaLand,
      AmericaLand,
      EuropeLand,
      AfricaLand,
      OceaniaLand,
      PolarLand,
    } = props.landInfo;

    return {
      labels: ["Asia", "America", "Europe", "Africa", "Australia", "Polar"],
      datasets: [
        {
          label: "DemoGraphs For Land",
          data: [
            AsiaLand,
            AmericaLand,
            EuropeLand,
            AfricaLand,
            OceaniaLand,
            PolarLand,
          ],
          backgroundColor: [
            "rgb(0, 0, 0)",
            "rgb(0, 132, 255)",
            "rgb(255, 0, 157)",
            "rgb(255, 72, 0)",
            "rgb(0, 255, 55)",
            "rgb(131, 89, 0)",
          ],
        },
      ],
    };
  };
  const renderPosts = (
    <Tabs
      defaultIndex={1}
      onSelect={(index) => console.log(index)}
      style={{ minHeight: "10vh", marginBottom: "100px" }}
    >
      <TabList>
        <Tab>
          <h4>Languages</h4>
        </Tab>
        <Tab>
          <h4>Population</h4>
        </Tab>
        <Tab>
          <h4>Land Distribution</h4>
        </Tab>
        <Tab>
          <h4>General-DemoGraphs</h4>
        </Tab>
        <Tab>
          <h4>Weather Info</h4>
        </Tab>
      </TabList>
      <TabPanel>
        {props.tabsInfoPassed.languages.map((language, index) => {
          return (
            <h5 className="tabsHeading" key={index}>
              {language.name}
            </h5>
          );
        })}
      </TabPanel>
      <TabPanel>
        <h5 className="tabsHeading">
          {numberWithCommas(props.tabsInfoPassed.population)}
        </h5>
        {props.tabsInfoPassed.population < 50000 ? (
          <Line
            data={charDataPopulation()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        ) : (
          <Pie
            data={charDataPopulation()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        )}
        <h4>
          Population of {props.tabsInfoPassed.name} accounts about{" "}
          <span className="information">
            {(props.tabsInfoPassed.population / pop).toFixed(4).toString()}
          </span>{" "}
          percentage of {props.tabsInfoPassed.region}
        </h4>
      </TabPanel>
      <TabPanel>
        <h5 className="tabsHeading">
          {numberWithCommas(props.tabsInfoPassed.area)}
        </h5>
        {props.tabsInfoPassed.area < 3000 ? (
          <Line
            data={chardataLand()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        ) : (
          <Pie
            data={chardataLand()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        )}
        <h4>
          Landarea Covered of {props.tabsInfoPassed.name} is about{" "}
          <span className="information">
            {(props.tabsInfoPassed.area / land).toFixed(4).toString()}
          </span>{" "}
          percentage of {props.tabsInfoPassed.region}
        </h4>
      </TabPanel>
      <TabPanel>
        <h5>Population Spread on the Continents</h5>
        <h6 style={{ textAlign: "center" }}>
          Chart For Population Division
          <Doughnut
            data={completedData()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </h6>
        <hr />
        <h5>Area Spread on the Continents</h5>
        <h6 style={{ textAlign: "center" }}>
          Chart of complete Area Division
          <Pie
            data={completedDataLand()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </h6>
        <hr />
      </TabPanel>
      <TabPanel>
        <Weather latitude={latitude} longitude={longitude} />
      </TabPanel>
    </Tabs>
  );
  return <div>{renderPosts}</div>;
};
export default TabsInfo;
