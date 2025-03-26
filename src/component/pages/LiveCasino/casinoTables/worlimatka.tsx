import React from "react";

const Worlimatka = () => {
  return (
    <div className="casino-table">
      <div className="nav nav-pills" role="tablist">
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="single"
            id="worli-tabs-tab-single"
            aria-controls="worli-tabs-tabpane-single"
            aria-selected="true"
            className="nav-link active"
            tabIndex={0}
            href="#"
          >
            Single
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="pana"
            id="worli-tabs-tab-pana"
            aria-controls="worli-tabs-tabpane-pana"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Pana
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="sp"
            id="worli-tabs-tab-sp"
            aria-controls="worli-tabs-tabpane-sp"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            SP
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="dp"
            id="worli-tabs-tab-dp"
            aria-controls="worli-tabs-tabpane-dp"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            DP
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="trio"
            id="worli-tabs-tab-trio"
            aria-controls="worli-tabs-tabpane-trio"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Trio
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="cycle"
            id="worli-tabs-tab-cycle"
            aria-controls="worli-tabs-tabpane-cycle"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Cycle
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="motor"
            id="worli-tabs-tab-motor"
            aria-controls="worli-tabs-tabpane-motor"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Motor SP
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="chart56"
            id="worli-tabs-tab-chart56"
            aria-controls="worli-tabs-tabpane-chart56"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            56 Charts
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="chart64"
            id="worli-tabs-tab-chart64"
            aria-controls="worli-tabs-tabpane-chart64"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            64 Charts
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="abr"
            id="worli-tabs-tab-abr"
            aria-controls="worli-tabs-tabpane-abr"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            ABR
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="commonsp"
            id="worli-tabs-tab-commonsp"
            aria-controls="worli-tabs-tabpane-commonsp"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Common SP
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="commondp"
            id="worli-tabs-tab-commondp"
            aria-controls="worli-tabs-tabpane-commondp"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Common DP
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="colordp"
            id="worli-tabs-tab-colordp"
            aria-controls="worli-tabs-tabpane-colordp"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Color DP
          </a>
        </div>
      </div>
      <div className="tab-content">
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-single"
          aria-labelledby="worli-tabs-tab-single"
          className="fade single tab-pane active show"
        >
          <div className="worlibox">
            <div className="worli-left">
              <div className="worli-box-title">
                <b>9.5</b>
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
                <b>9.5</b>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">Line 1</span>
                  <span className="d-block">1|2|3|4|5</span>
                </div>
                <div className="worli-odd-box back">
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
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-pana"
          aria-labelledby="worli-tabs-tab-pana"
          className="fade pana tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title"></div>
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
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-sp"
          aria-labelledby="worli-tabs-tab-sp"
          className="fade sp tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
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
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">SP ALL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-dp"
          aria-labelledby="worli-tabs-tab-dp"
          className="fade dp tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
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
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">DP ALL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-trio"
          aria-labelledby="worli-tabs-tab-trio"
          className="fade trio tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title"></div>
            <div className="worli-box-row">
              <div className="worli-odd-box back">
                <span className="worli-odd">ALL TRIO</span>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-cycle"
          aria-labelledby="worli-tabs-tab-cycle"
          className="fade cycle tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title">
              <b>&nbsp;</b>
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
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-motor"
          aria-labelledby="worli-tabs-tab-motor"
          className="fade motorsp tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title"></div>
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
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-chart56"
          aria-labelledby="worli-tabs-tab-chart56"
          className="fade chart56 tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
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
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">56 ALL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-chart64"
          aria-labelledby="worli-tabs-tab-chart64"
          className="fade chart64 tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
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
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">64 ALL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-abr"
          aria-labelledby="worli-tabs-tab-abr"
          className="fade abr tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">A</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">B</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">R</span>
                </div>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">AB</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">AR</span>
                </div>
                <div className="worli-odd-box back">
                  <span className="worli-odd">BR</span>
                </div>
              </div>
            </div>
            <div className="worli-right">
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">ABR</span>
                </div>
              </div>
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">ABR CUT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-commonsp"
          aria-labelledby="worli-tabs-tab-commonsp"
          className="fade commonsp tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title"></div>
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
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-commondp"
          aria-labelledby="worli-tabs-tab-commondp"
          className="fade commondp tab-pane"
        >
          <div className="worli-full">
            <div className="worli-box-title"></div>
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
        </div>
        <div
          role="tabpanel"
          id="worli-tabs-tabpane-colordp"
          aria-labelledby="worli-tabs-tab-colordp"
          className="fade colordp tab-pane"
        >
          <div className="worlibox">
            <div className="worli-box-title"></div>
            <div className="worli-left">
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
              <div className="worli-box-row">
                <div className="worli-odd-box back">
                  <span className="worli-odd">COLOR DP ALL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worlimatka;
