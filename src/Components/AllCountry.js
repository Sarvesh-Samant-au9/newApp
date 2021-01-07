import React, { useState } from "react";
import "./AllCountryStyle.css";
import { Link } from "react-router-dom";
function AllCountry({ allCountryArray, landInfo, populationInfo }) {
  // console.log(landInfo);
  // console.log(populationInfo);
  const [search, setSearch] = useState("");
  // const [ascending, setDescending] = useState("asc");
  // const [worldPop, setWorldPop] = useState(
  //   allCountryArray.length !==0 ?
  //   allCountryArray
  //     .map(function (country) {
  //       return country.area;
  //     })
  //     .reduce((prev, next) => {
  //       return prev + next;
  //     }, 0): 0
  // );
  const getChanged = (e) => {
    setSearch(e.target.value);
  };
  // const sorted = () => {};
  // console.log(allCountryArray);
  // console.log(worldPop);
  // console.log(allCountryArray);
  const filteredCountries = allCountryArray.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="container-fluid">
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Get Info
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter Your Country Here"
          onChange={getChanged}
        />
      </div>
      <div className="row">
        {filteredCountries.map(function (country, index) {
          return (
            <div
              key={index}
              className="col-md-4 col-12 col-sm-6 col-12 my-4"
              style={{ width: "10rem", minHeight: "100%" }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "whitesmoke",
                  boxShadow: "1px 2px 15px  rgba(0, 0, 0, 0.418)",
                }}
              >
                <img
                  className="card-img-top"
                  src={country.flag}
                  alt={country.name}
                  style={{ borderBottom: "2px solid black" }}
                />
                <div className="card-body">
                  <h3 className="card-title countryName">{country.name}</h3>
                  <h5 className="card-title">
                    <span style={{ color: "red", paddingRight: "0.3rem" }}>
                      Native Name
                    </span>
                    {country.nativeName}
                  </h5>
                  <h5 className="card-title">
                    <span style={{ color: "red", paddingRight: "0.5rem" }}>
                      Region
                    </span>
                    {country.region}
                  </h5>
                  <Link
                    to={{
                      pathname: `/countryName/${country.name}`,
                      state: { countryInfo: country, landInfo, populationInfo },
                    }}
                    className="btn btn-primary"
                  >
                    Fetch More Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCountry;
