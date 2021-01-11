import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Asia(props) {
  console.log(props.location.state.populationInfo);
  console.log(props.location.state.landInfo);
  console.log(props.match.params.regional);
  const code = props.match.params.regional;
  const [search, setSearch] = useState("");
  const [allCountryArray, setAllCountryArray] = useState([]);
  const getChanged = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://restcountries.eu/rest/v2/region/${code}`
      );
      const jsonConv = await result.json();
      const resp = await jsonConv;
      setAllCountryArray(resp);
    };
    fetchData();
    console.log(allCountryArray);
  }, []);

  const filteredCountries = allCountryArray.filter((country) => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="container-fluid">
      {filteredCountries.length !== 0 ? (
        <>
          <h1 style={{ textAlign: "center" }}>{code}</h1>
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

                          state: {
                            countryInfo: country,
                            populationInfo: props.location.state.populationInfo,
                            landInfo: props.location.state.landInfo,
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
          <Link to="/" className="btn btn-outline-danger btn-lg">
            Go Back
          </Link>
        </>
      ) : (
        <h1>
          There is no such Country in {props.match.params.regional} continent
          <br />
          <Link to="/" className="btn btn-outline-danger btn-lg">
            Go Back
          </Link>
        </h1>
      )}
    </div>
  );
}

export default Asia;
