import React from "react";

const OnedayDragonTiger = () => {
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
                <div className="casino-nation-name">Dragon</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">0</span>
              </div>
              <div className="casino-odds-box lay suspended-box">
                <span className="casino-odds">0</span>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Tiger</div>
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
        <div className="casino-table-right-box dtpair">
          <div className="casino-odds text-center">0</div>
          <div className="casino-odds-box back casino-odds-box-theme suspended-box">
            <span className="casino-odds">Pair</span>
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Even</div>
            <div className="casino-odds-box back">Odd</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Dragon</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">0</span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">0</span>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Tiger</div>
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
        <div className="casino-table-right-box dtredblack">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">
              <span>Red</span>
              <span className="card-icon ms-1">
                <span className="card-red "></span>
              </span>
              <span className="card-icon ms-1">
                <span className="card-red "></span>
              </span>
            </div>
            <div className="casino-odds-box back">
              <span>Black</span>
              <span className="card-icon ms-1">
                <span className="card-black "></span>
              </span>
              <span className="card-icon ms-1">
                <span className="card-black "></span>
              </span>
            </div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Dragon</div>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">0</span>
              </div>
              <div className="casino-odds-box back suspended-box">
                <span className="casino-odds">0</span>
              </div>
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Tiger</div>
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
      <div className="casino-table-full-box dt1day-other-odds mt-3">
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
              <span className="card-black "></span>
            </span>
          </div>
          <div className="casino-odds-box">
            <span className="card-icon ms-1">
              <span className="card-red "></span>
            </span>
          </div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Dragon</div>
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
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Tiger</div>
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
  );
};

export default OnedayDragonTiger;
