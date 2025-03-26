import React from "react";

const Lotterycard = () => {
  return (
    <div className="casino-table">
      <div className="nav nav-pills" role="tablist">
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="single"
            id="lottery-tabs-tab-single"
            aria-controls="lottery-tabs-tabpane-single"
            aria-selected="false"
            className="nav-link"
            tabIndex={-1}
            href="#"
          >
            Single (0)
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="double"
            id="lottery-tabs-tab-double"
            aria-controls="lottery-tabs-tabpane-double"
            aria-selected="true"
            tabIndex={0}
            className="nav-link active"
            href="#"
          >
            Double (0)
          </a>
        </div>
        <div className="nav-item">
          <a
            role="tab"
            data-rr-ui-event-key="tripple"
            id="lottery-tabs-tab-tripple"
            aria-controls="lottery-tabs-tabpane-tripple"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
            href="#"
          >
            Tripple (0)
          </a>
        </div>
      </div>
      <div className="w-100 tab-content">
        <div
          role="tabpanel"
          id="lottery-tabs-tabpane-single"
          aria-labelledby="lottery-tabs-tab-single"
          className="fade tab-pane"
        >
          <div className="single">
            <div className="lottery-box">
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="lottery-tabs-tabpane-double"
          aria-labelledby="lottery-tabs-tab-double"
          className="fade tab-pane active show"
        >
          <div className="double">
            <div className="lottery-box">
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
              </div>
            </div>
            <div className="random-bets">
              <h4 className="w-100 text-center mb-1">Random Bets</h4>
              <button className="lottery-btn active">5</button>
              <button className="lottery-btn active">10</button>
              <button className="lottery-btn active">15</button>
              <button className="lottery-btn active">20</button>
              <button className="lottery-btn active">25</button>
              <button className="lottery-btn active">50</button>
              <button className="lottery-btn active">75</button>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="lottery-tabs-tabpane-tripple"
          aria-labelledby="lottery-tabs-tab-tripple"
          className="fade tab-pane"
        >
          <div className="tripple">
            <div className="lottery-box">
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
              </div>
              <div className="lottery-card">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
              </div>
            </div>
            <div className="random-bets">
              <h4 className="w-100 text-center mb-1">Random Bets</h4>
              <button className="lottery-btn active">5</button>
              <button className="lottery-btn active">10</button>
              <button className="lottery-btn active">15</button>
              <button className="lottery-btn active">20</button>
              <button className="lottery-btn active">25</button>
              <button className="lottery-btn active">50</button>
              <button className="lottery-btn active">100</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lottery-buttons d-xl-none">
        <button className="btn btn-lottery">Repeat</button>
        <button className="btn btn-lottery">Clear</button>
        <button className="btn btn-lottery">Remove</button>
      </div>
    </div>
  );
};

export default Lotterycard;
