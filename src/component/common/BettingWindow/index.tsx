
import React, { useState } from "react";

import BetSlip from "./betSlip";

import { useUI } from "../../../context/ui.context";

import { useCurrentBetsData } from "../../../Framework/placeBet";
import { useBetting } from "../../../context/bettingContext";

const BettingWindow: React.FC = () => {
 
 
  const { betOdds} = useBetting();
  const { data } = useCurrentBetsData();
  console.log(betOdds,"RUBY:::::::::::::::::")
  return (
    (betOdds?.odds) ? <div className="sidebar-box place-bet-container">
      <div className="sidebar-title">
        <h4>Place Bet</h4>
        <span>Range: {betOdds?.min} to {betOdds?.max}</span>
      </div>
      <div className={`place-bet-box ${betOdds?.type === "back" ? "back" :"lay"}`}>
        <div className="place-bet-box-header">
          <div className="place-bet-for">(Bet for)</div>
          <div className="place-bet-odds">Odds</div>
          <div className="place-bet-stake">Stake</div>
          <div className="place-bet-profit">Profit</div>
        </div>
        <BetSlip/>
      </div>
    </div>
  :<></>
  );
};

export default BettingWindow;
