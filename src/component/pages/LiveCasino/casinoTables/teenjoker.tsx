import React from "react";

const TeenJoker = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player A</div>
              </div>
              <div className="casino-odds-box back">
                <span className="casino-odds">2.65</span>
              </div>
              <div className="casino-odds-box lay">
                <span className="casino-odds">2.87</span>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Player B</div>
              </div>
              <div className="casino-odds-box back">
                <span className="casino-odds">1.54</span>
              </div>
              <div className="casino-odds-box lay">
                <span className="casino-odds">1.6</span>
              </div>
            </div>
          </div>
        </div>
        <div className="casino-table-right-box joker-other-odds">
          <div className="joker-other-odds">
            <div className="casino-table-header">
              <div className="casino-nation-detail"></div>
              <div className="casino-odds-box ">Even</div>
              <div className="casino-odds-box ">Odd</div>
              <div className="casino-odds-box ">
                <span>Red</span>
                <span className="card-icon ms-1">
                  <span className="card-red "></span>
                  <span className="card-red "></span>
                </span>
              </div>
              <div className="casino-odds-box">
                <span>Black</span>
                <span className="card-icon ms-1">
                  <span className="card-black "></span>
                  <span className="card-black "></span>
                </span>
              </div>
            </div>
            <div className="casino-table-body">
              <div className="casino-table-row">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Joker</div>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="joker-other-odds dtredblack">
            <div className="casino-table-header">
              <div className="casino-nation-detail"></div>
              <div className="casino-odds-box">
                <span className="card-icon ms-1">
                  <span className="card-black "></span>
                </span>
              </div>
              <div className="casino-odds-box">
                <span className="card-icon ms-1">
                  <span className="card-red "></span>
                </span>
              </div>
              <div className="casino-odds-box">
                <span className="card-icon ms-1">
                  <span className="card-red "></span>
                </span>
              </div>
              <div className="casino-odds-box">
                <span className="card-icon ms-1">
                  <span className="card-black "></span>
                </span>
              </div>
            </div>
            <div className="casino-table-body">
              <div className="casino-table-row ">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">Joker</div>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
                <div className="casino-odds-box back suspended-box">
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenJoker;
