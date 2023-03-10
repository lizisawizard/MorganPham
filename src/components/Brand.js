import React from "react";
import { NavLink } from "react-router-dom";
import circleLogo from "../images/T+V_Buttons-02.png";

const Brand = ({ openMenu }) => {
  return (
    <div className={`brand ${openMenu ? "nav-open" : ""}`}>
      <NavLink
        to="/home"
        className={(e) =>
          e.isActive ? "navigation--item active" : "navigation--item"
        }
      >
        <div className="brand img-container">
          <img className="brand img" src={circleLogo} alt="Branding Logo" />
        </div>
      </NavLink>
      <span>
        <h1 className="brand--names">Taylor & Vu</h1>
        <p className="brand--slogan">working for you</p>
      </span>
    </div>
  );
};

export default Brand;
