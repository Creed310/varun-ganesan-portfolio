import React from "react";
import "./NavBar.css";

const tabs = ["ABOUT", "WORK", "CONTACT"];

const NavBar = () => {
  return (
    <div className="absolute-center navbar-container">
      <div className="absolute-center navbar-content">
        <div className="absolute-center navbar-tab-container">
          <div className="cur-po navbar-tab-text">ABOUT</div>
        </div>
        <div className="separator"></div>
        <div className="absolute-center navbar-tab-container">
          <div className="cur-po navbar-tab-text">WORK</div>
        </div>
        <div className="separator"></div>
        <div className="absolute-center navbar-tab-container">
          <div className="cur-po navbar-tab-text">CONTACT</div>
        </div>
        {/* {tabs.map((tab) => {
          return (
            <div className="absolute-center">
              <div className="absolute-center navbar-tab-container">
                <div className="cur-po navbar-tab-text">{tab}</div>
              </div>
              <div className="absolute-center separator">wow</div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default NavBar;
