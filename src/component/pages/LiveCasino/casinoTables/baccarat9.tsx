import React from "react";

const Baccarat9 = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">3.25</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">2</span>
                <span className="casino-nation-book"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">3.25</span>
                <span className="casino-nation-book"></span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">2</span>
                <span className="casino-nation-book"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box mt-3">
        <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/lucky9.png" />
        <div className="casino-odd-box-container">
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">4.7</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">5.1</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Baccarat9;
