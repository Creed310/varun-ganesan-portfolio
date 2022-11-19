import React from "react";
import HeaderStripes from "./HeaderStripes/HeaderStripes";
import "./Header.css";

const Header = () => {
  return (
    <div className="absolute-center header-container">
      <div className="header-content-container">
        <div className="header-vg-logo-container">
          <img
            className="header-vg-logo"
            src={require("../../logos/vg-logo1.png")}
            alt="vg-logo"
          />
        </div>
        <div className="header-stripes-container">
          <HeaderStripes />
        </div>
      </div>
    </div>
  );
};

export default Header;
