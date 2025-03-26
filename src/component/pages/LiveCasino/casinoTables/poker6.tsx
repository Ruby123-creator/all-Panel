import React from "react";

const Poker6 = () => {
  return (
    <div className="casino-table">
      <ul className="mb-1 nav nav-pills" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-hands"
            role="tab"
            data-rr-ui-event-key="hands"
            aria-controls="uncontrolled-tab-example-tabpane-hands"
            aria-selected="true"
            className="nav-link active"
          >
            Hands
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-pattern"
            role="tab"
            data-rr-ui-event-key="pattern"
            aria-controls="uncontrolled-tab-example-tabpane-pattern"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
          >
            Pattern
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-hands"
          aria-labelledby="uncontrolled-tab-example-tab-hands"
          className="fade hands tab-pane active show"
        >
          <div className="row row5">
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 1
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      A<span className="card-black ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 2
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      5<span className="card-red ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 3
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      8<span className="card-red ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 4
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      K<span className="card-black ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 5
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      6<span className="card-black ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">
                  Player 6
                  <div className="patern-name ms-3">
                    <span className="card-icon ms-2">
                      J<span className="card-red ms-1"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-pattern"
          aria-labelledby="uncontrolled-tab-example-tab-pattern"
          className="fade pattern tab-pane"
        >
          <div className="row row5">
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">High Card</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Pair</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Two Pair</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Three of a Kind</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Straight</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Flush</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Full House</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Four of a Kind</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="casino-odds-box back suspended-box">
                <div className="casino-nation-name">Straight Flush</div>
                <div>
                  <span className="casino-odds">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-remark mt-1"></div>
    </div>
  );
};

export default Poker6;
