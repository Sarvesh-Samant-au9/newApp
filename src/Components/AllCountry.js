import React, { useState, useEffect } from "react";
import "./AllCountryStyle.css";
import { Link } from "react-router-dom";
function AllCountry({ allCountryArray, landInfo, populationInfo }) {
  // console.log(allCountryArray);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(allCountryArray);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setData(allCountryArray);
  }, [allCountryArray]);

  const changeOrder = (orderType) => {
    setSortOrder(orderType);
  };

  const sortArray = (type) => {
    const types = {
      name: "name",
      population: "population",
      area: "area",
    };
    const sortProperty = types[type];
    console.log(sortProperty);
    const sorted = [...allCountryArray].sort(
      (a, b) => b[sortProperty] - a[sortProperty]
    );
    setData(sorted);
    // console.log(sorted);
    if (sortOrder === "higher") {
      if (sortProperty === "name") {
        setData(sorted.reverse());
      }
      setData(sorted);
    } else if (sortOrder === "lower") {
      if (sortProperty === "name") {
        setData(sorted);
      }
      setData(sorted.reverse());
    }
  };

  const getChanged = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = data.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <>
      {allCountryArray && (
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
            <select onChange={(e) => sortArray(e.target.value)}>
              <option value="name">Name (default)</option>
              <option value="population">Population</option>
              <option value="area">Land Area</option>
            </select>

            <select onChange={(e) => changeOrder(e.target.value)}>
              <option value="high">Higher (default)</option>
              <option value="lower">Lower</option>
            </select>
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
                          state: {
                            countryInfo: country,
                            landInfo,
                            populationInfo,
                          },
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
      )}{" "}
    </>
  );
}

export default AllCountry;
