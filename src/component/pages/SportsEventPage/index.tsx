import React from "react";



import EventPanel from "./EventPanel/eventPanel";

import BettingWindow from "../../common/BettingWindow";
import MatchedBets from "../../common/BettingWindow/matchedBet";
import { FaCircleInfo } from "react-icons/fa6";
import { useUI } from "../../../context/ui.context";

const SportsEventPage: React.FC = () => {

   const {betOdds} = useUI();


  return (
    <div className="center-main-container detail-page">
      <div className="center-container">
        <EventPanel/>
      </div>
      <div className="sidebar right-sidebar">
      <a className="bet-nation-game-name blink-message" href="/casino/3cardj">
      <FaCircleInfo/>
     
      <div>3 Cards Judgement</div></a>
      {
        betOdds?.odds ? <BettingWindow/>:""
      }
      
      <MatchedBets/>
      </div>
    </div>
   
  );
};

export default SportsEventPage;
