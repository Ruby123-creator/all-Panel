import React from "react";

const Race17 = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Race to 17</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">3.19</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">3.43</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Big Card (7,8,9) - 3</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">4.01</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">4.32</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Zero Card - 3</div>
          <div className="casino-odds-box back">
            <span className="casino-odds">3.22</span>
          </div>
          <div className="casino-odds-box lay">
            <span className="casino-odds">3.45</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Any Zero</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Race17;
