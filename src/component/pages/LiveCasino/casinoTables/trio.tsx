import React from "react";

const Trio = () => {
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name pointer">
            Session <i className="fas fa-info-circle"></i>
          </div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
            <span className="casino-volume">80</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
            <span className="casino-volume">100</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">3 Card Judgement(1 2 4)</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">3 Card Judgement(J Q K)</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
      <div className="casino-table-box triocards mt-3">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Two Red Only</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Two Black Only</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Two Odd Only</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Two Even Only</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-odds-box lay suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
      <div className="casino-table-box trioodds mt-3">
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Pair</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Flush</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Straight</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Trio</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
        <div className="casino-odd-box-container">
          <div className="casino-nation-name">Straight Flush</div>
          <div className="casino-odds-box back suspended-box">
            <span className="casino-odds">0</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Trio;
