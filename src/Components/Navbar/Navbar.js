import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ landInfo, populationInfo }) => {
  console.log(landInfo, populationInfo);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar navbar-light my-3"
        style={{ backgroundColor: " #e3f2fd" }}
      >
        <h2 className="navbar-brand">Navbar</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/region/Asia`,
                  state: { landInfo, populationInfo },
                }}
              >
                Asia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/region/Africa`,
                  state: { landInfo, populationInfo },
                }}
              >
                Africa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/region/Europe`,
                  state: { landInfo, populationInfo },
                }}
              >
                Europe
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/region/Americas`,
                  state: { landInfo, populationInfo },
                }}
              >
                Americas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: `/region/Oceania`,
                  state: { landInfo, populationInfo },
                }}
              >
                Oceania
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
