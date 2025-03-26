import React from "react";

const Instantworli = () => {
  return (
    <div className="casino-table">
      <div className="tab-content">
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-single"
          aria-labelledby="worli-tabs-tab-single"
          className="fade single tab-pane active show"
        >
          <div className="worlibox suspended-box">
            <div className="worli-left">
              <div className="worli-box-title">
                <b>9</b>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">1</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">2</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">3</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">4</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">5</span>
                </div>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">6</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">7</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">8</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">9</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">0</span>
                </div>
              </div>
            </div>
            <div className="worli-right">
              <div className="worli-box-title">
                <b>9</b>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">Line 1</span>
                  <span className="d-block">1|2|3|4|5</span>
                </div>
                <div className="worli-odd-box back selected">
                  <span className="worli-odd">ODD</span>
                  <span className="d-block">1|3|5|7|9</span>
                </div>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">Line 2</span>
                  <span className="d-block">6|7|8|9|0</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">EVEN</span>
                  <span className="d-block">2|4|6|8|0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instantworli;
