import React from "react";
import CasinoTabs from "./casinoTabs";
import CasinoCards from "./casinoCards";

const OurCasino = () => {
  return (
    <div className="center-main-container list-page own-casino-page">
      <div className="center-container">
        <div className="container-fluid container-fluid-5">
          <div className="row row5">
          <CasinoTabs/>
          <div className="col-xl-10 col-12">
            <CasinoCards/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCasino;
