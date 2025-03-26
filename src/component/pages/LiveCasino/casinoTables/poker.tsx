import React from "react";

const Poker = () => {
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
                <span className="casino-odds">0</span>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-odds">0</span>
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
              <div className="casino-odds-box back">
                <span className="casino-odds">1.24</span>
              </div>
              <div className="casino-odds-box lay">
                <span className="casino-odds">1.27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="poker1day-other-odds">
        <div className="casino-table-left-box">
          <div className="w-100 d-xl-none mobile-nation-name">Player A</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">2 Cards Bonus</span>
          </div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">7 Cards Bonus</span>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="w-100 d-xl-none mobile-nation-name">Player B</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">2 Cards Bonus</span>
          </div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">7 Cards Bonus</span>
          </div>
        </div>
      </div>
      <div className="casino-remark mt-1">
        {/* <marquee scrollAmount={3}>Play &amp; Win </marquee> */}
      </div>
    </div>
  );
};

export default Poker;
