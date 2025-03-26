import React from "react";

const Patti2 = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player A</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-odds">0</span>
              </div>
            </div>
            <div className="casino-table-row mini-baccarat">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Mini Baccarat A</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">2.1</span>
              </div>
            </div>
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Total A</div>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-volume">14</span>
                <span className="casino-odds">95</span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-volume">15</span>
                <span className="casino-odds">105</span>
              </div>
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player B</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">1.98</span>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-odds">0</span>
              </div>
            </div>
            <div className="casino-table-row mini-baccarat">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Mini Baccarat B</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">2.1</span>
              </div>
            </div>
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Total B</div>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-volume">14</span>
                <span className="casino-odds">95</span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-volume">15</span>
                <span className="casino-odds">105</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box color-plus my-2">
        <div className="casino-odds-box back suspended-box">
          <span className="casino-odds">Color Plus</span>
        </div>
      </div>
    </div>
  );
};

export default Patti2;
