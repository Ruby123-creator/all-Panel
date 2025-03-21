import React from "react";
import { useSportDetailsById } from "../../../Framework/sportsData";
import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import LeftDeskSideBar from "../../common/LeftDeskSidebar";
import InPlayEvents from "../../common/InPlayEvents";
import UpcomingEvents from "../../common/UpComingEvents";
import Accordian from "../../common/Accordian";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import EventPanel from "./EventPanel/eventPanel";
import { useParams } from "react-router-dom";
import { IoTennisball } from "react-icons/io5";
import { GiHorseHead, GiHound } from "react-icons/gi";
import BettingWindow from "../../common/BettingWindow";
import MatchedBets from "../../common/BettingWindow/matchedBet";
import { FaCircleInfo } from "react-icons/fa6";
import { useUI } from "../../../context/ui.context";

const SportsEventPage: React.FC = () => {
  const { sport, eventId }: any = useParams();
   const {betOdds} = useUI();
  const pageName = (id: string) => {
    switch (id) {
      case "cricket":
        return {
          sidebarIcon: (
            <BiSolidCricketBall fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Cricket",
          icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
        };
      case "soccer":
        return {
          sidebarIcon: (
            <BiFootball fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Football",
          icon: <BiFootball fill="#8B191B" size={20} />,
        };
      case "tennis":
        return {
          sidebarIcon: (
            <IoTennisball fill="var(--color-quaternary)" size={20} />
          ),
          sportsName: "Tennis",
          icon: <IoTennisball fill="#8B191B" size={20} />,
        };
      case "horseRacing_racecard":
        return {
                sidebarIcon:<img alt="horse" src="/icons/white-horse.svg" width={20} height={20}/>,
          
          sportsName: "Horse Racing",
          icon: <GiHorseHead fill="#8B191B" size={20} />,
        };
      case "greyhound_racecard":
        return {
          sidebarIcon:<img alt="horse" src="/icons/white_greyhound.svg" width={20} height={20}/>,

          sportsName: "Greyhound Racing",
          icon: <GiHound fill="#8B191B" size={20} />,
        };

      default:
        break;
    }
  };

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
