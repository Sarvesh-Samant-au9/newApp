import React, { Component } from "react";
import { Link } from "react-router-dom";
import TabsInfo from "./TabsInfo";

export class EachCountry extends Component {
  constructor() {
    super();
    this.state = { individualCountry: [], populationInfo: "", landInfo: "" };
  }
  componentDidMount = async () => {
    // const id = this.props.location.state.countryInfo.name;
    const getNameId = this.props.match.params.id;
    // console.log(this.props, "Each Country");
    // console.log(this.props.location.state);
    // console.log(id);
    this.setState({
      populationInfo: this.props.location.state.populationInfo,
      landInfo: this.props.location.state.landInfo,
    });
    // id.reduce(function () {}, "");
    const required = await fetch(
      `https://restcountries.eu/rest/v2/name/${getNameId}?fullText=true`
    );
    const response = await required.json();
    this.setState({
      individualCountry: response,
    });
  };
  render() {
    console.log(this.state, "Each Country");
    const getInfo = this.state.individualCountry[0];
    console.log(getInfo);
    return (
      <div className="container-fluid">
        {this.state.individualCountry.length !== 0 && (
          <div>
            <img
              src={getInfo.flag}
              className="img-fluid text-center"
              style={{
                width: "90vw",
                margin: "auto",
                display: "block",
                height: "80vh",
              }}
              alt={getInfo.name}
            />
            <h1 style={{ textAlign: "center" }}>{getInfo.name}</h1>
            <h4>Bordering Nations</h4>
            {getInfo.borders.length !== 0 ? (
              <>
                {getInfo.borders.map((border, indexKey) => {
                  return (
                    <Link
                      to={{
                        pathname: `/countryCode/${border}`,
                        state: {
                          landInfo: this.props.location.state.landInfo,
                          populationInfo: this.props.location.state
                            .populationInfo,
                        },
                      }}
                      key={indexKey}
                      className="btn btn-outline-success mr-3  mb-2"
                    >
                      {border}
                    </Link>
                  );
                })}
              </>
            ) : (
              <h3>"No Bordering Nation Available"</h3>
            )}

            <hr />
            <TabsInfo
              tabsInfoPassed={getInfo}
              landInfo={this.state.landInfo}
              populationInfo={this.state.populationInfo}
            />
            <Link to="/" className="btn btn-outline-danger btn-lg mb-3">
              Go Back
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default EachCountry;
