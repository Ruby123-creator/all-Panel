import React from "react";

const Race2 = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Player A</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Player B</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">2.46</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">2.64</span>
          </div>
          <div className="casino-nation-book"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Player C</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">3.13</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">3.45</span>
          </div>
          <div className="casino-nation-book"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Player D</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">3.13</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">3.45</span>
          </div>
          <div className="casino-nation-book"></div>
        </div>
      </div>
    </div>
  );
};

export default Race2;
