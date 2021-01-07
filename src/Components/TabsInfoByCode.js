// import React, { useState, useEffect } from "react";
// import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import ChartsExp from "./ChartsExp";
// import LandChart from "./LandChart";
// import "./TabsStyle.css";

// const TabsInfoByCode = (props) => {
//   console.log(props);
//   const [pop, setPop] = useState("");
//   // const [worldPop, setWorldPop] = useState("");
//   const [land, setLand] = useState("");
//   const solutionPop = () => {
//     if (props.tabsInfoPassed.region === "Asia") {
//       setPop(props.populationInfo.AsiaPopulation);
//       setLand(props.landInfo.AsiaLand);
//     } else if (props.tabsInfoPassed.region === "Europe") {
//       setPop(props.populationInfo.EuropePopulation);
//       setLand(props.landInfo.EuropeLand);
//     } else if (props.tabsInfoPassed.region === "Africa") {
//       setPop(props.populationInfo.AfricaPopulation);
//       setLand(props.landInfo.AfricaLand);
//     } else if (props.tabsInfoPassed.region === "Americas") {
//       setPop(props.populationInfo.AmericasPopulation);
//       setLand(props.landInfo.AmericaLand);
//     } else if (props.tabsInfoPassed.region === "Oceania") {
//       setPop(props.populationInfo.OceaniaPopulation);
//       setLand(props.landInfo.OceaniaLand);
//     }
//   };
//   useEffect(() => {
//     solutionPop();
//     // setWorldPop(props.populationInfo.WorldPopulation);
//   }, []);
//   // console.log(pop);
//   const numberWithCommas = (n) => {
//     n = n.toString();
//     var pattern = /(-?\d+)(\d{3})/;
//     while (pattern.test(n)) n = n.replace(pattern, "$1,$2");
//     return n;
//   };
//   const renderPosts = (
//     <Tabs
//       defaultIndex={1}
//       onSelect={(index) => console.log(index)}
//       style={{ minHeight: "10vh", marginBottom: "100px" }}
//     >
//       <TabList>
//         <Tab>
//           <h4>Languages</h4>
//         </Tab>
//         <Tab>
//           <h4>Population</h4>
//         </Tab>
//         <Tab>
//           <h4>Land Distribution</h4>
//         </Tab>
//       </TabList>
//       <TabPanel>
//         {props.tabsInfoPassed.languages.map((language, index) => {
//           return (
//             <h5 className="tabsHeading" key={index}>
//               {language.name}
//             </h5>
//           );
//         })}
//       </TabPanel>
//       <TabPanel>
//         <h5 className="tabsHeading">{numberWithCommas(pop)}</h5>
//         <h4>
//           {pop && <ChartsExp popInfo={pop} mainInfo={props.tabsInfoPassed} />}
//           Population of {props.tabsInfoPassed.name} accounts about{" "}
//           <span className="information">
//             {(props.tabsInfoPassed.population / pop).toFixed(4).toString()}
//           </span>{" "}
//           percentage of {props.tabsInfoPassed.region}
//         </h4>
//       </TabPanel>
//       <TabPanel>
//         <h5 className="tabsHeading">{numberWithCommas(land)}</h5>
//         <h4>
//           {land && (
//             <LandChart landInfo={land} mainInfo={props.tabsInfoPassed} />
//           )}
//           Landarea Covered of {props.tabsInfoPassed.name} is about{" "}
//           <span className="information">
//             {(props.tabsInfoPassed.area / land).toFixed(4).toString()}
//           </span>{" "}
//           percentage of {props.tabsInfoPassed.region}
//         </h4>
//       </TabPanel>
//     </Tabs>
//   );

//   return <div>{renderPosts}</div>;
// };

// export default TabsInfoByCode;
