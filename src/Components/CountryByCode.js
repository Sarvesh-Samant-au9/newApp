import React, { Component } from "react";
import { Link } from "react-router-dom";
import TabsInfo from "../Components/TabsInfo";

export class CountryByCode extends Component {
  constructor(props) {
    super(props);
    // console.log(props, "This Are Props");
    // console.log(this.props.location.state.landInfo)
    this.state = {
      particularLinkInfo: [],
    };
  }
  componentDidMount = async () => {
    console.log(this.props, "Country By Code");
    const code = this.props.match.params.code;
    const data = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
    const wholeInfo = await data.json();
    this.setState({ particularLinkInfo: [wholeInfo] });
  };
  fetchElementsAgain = async (border) => {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${border}`
    );
    const wholeInfo = await data.json();
    this.setState({ particularLinkInfo: [wholeInfo] });
  };
  render() {
    const getInfo = this.state.particularLinkInfo[0];
    // console.log(getInfo, "Country By Code");
    // console.log(this.state, "Country By Code");
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(250,250,240)" }}
      >
        {this.state.particularLinkInfo.length !== 0 && (
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
                      // to={`/countryName/${getInfo.name}`}
                      to={{
                        pathname: `/countryCode/${border}`,
                        state: {
                          landInfo: this.props.location.state.landInfo,
                          populationInfo: this.props.location.state
                            .populationInfo,
                        },
                      }}
                      // to={`/countryCode/${border}`}
                      key={indexKey}
                      className="btn btn-outline-success mr-3 mb-2"
                      onClick={() => {
                        this.fetchElementsAgain(border);
                      }}
                    >
                      {border}
                    </Link>
                  );
                })}{" "}
              </>
            ) : (
              <h3>"No Bordering Nation Present</h3>
            )}

            <hr />
            <TabsInfo
              tabsInfoPassed={getInfo}
              landInfo={this.props.location.state.landInfo}
              populationInfo={this.props.location.state.populationInfo}
            />
            <hr />
            <Link to="/" className="btn btn-outline-danger btn-lg mb-3">
              Go Back
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default CountryByCode;
