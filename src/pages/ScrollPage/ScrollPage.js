import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PageOne from "./PageOne/PageOne";

import "./ScrollPage.css";

const ScrollPage = () => {
  return (
    <div className="scroll-page-container">
      <div className="sect page-one">
        <div className="page-one-header">
          <Header />
        </div>
        <div className="page-one-navbar">
          <NavBar />
        </div>
        <div className="page-one-content">
          <PageOne />
        </div>
      </div>
      <div className="sect page-two">
        <div>Page 2</div>
      </div>
      <div className="sect page-three">
        <div>Page 3</div>
      </div>
      <div className="sect page-four">
        <div>Page 4</div>
      </div>
      <div className="sect page-five">
        <div>Page 5</div>
      </div>
      <div className="sect page-six">
        <div>Page 6</div>
      </div>
      <div className="sect page-seven">
        <div>Page 7</div>
      </div>
    </div>
  );
};

export default ScrollPage;
