import React, { useEffect, useState } from "react";

import { useSportDetailsById } from "../../../../Framework/sportsData";
import MatchOddBookmaker from "./MatchOddBookmaker";
import FancyComp from "./fancy";
import { useParams } from "react-router-dom";

import BookmakerComp from "./Bookmaker";
import RacingBet from "./RacingBet/racingbet";
import SoccerCard from "./soccerCard";
import ScoreCard from "./scoreCard";
import { MdLiveTv } from "react-icons/md";
import MatchedBets from "../../../common/BettingWindow/matchedBet";

const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();

  const { data, isLoading, isError } = useSportDetailsById({
    id: eventId,
    sport,
  });
  const [watchTv, setWatchTv] = useState(false);
  const matchOdds = (data?.market || [])[0]?.events;
  const bookMaker = data?.bookmaker;
  console.log(data, matchOdds, bookMaker, "matchessss::::::::::::");
  const [activeTab, setActiveTab] = useState("Odds");
  return (
    <div className="detail-page-container">
     
      {
        (isError ) ? <div className="game-header">
        <span>Event is not live yet</span>
      </div>: <>
        {sport === "horse-racing" || sport === "greyhound-racing" ? (
        <>
          <RacingBet data={data} />
        </>
      ) : (
        <>
          <div className="game-header">
            <span>{data?.title}</span>
          </div>
          <ul className="nav nav-tabs d-xl-none menu-tabs">
            <li className="nav-item" onClick={() => setActiveTab("Odds")}>
              <a className={`nav-link ${activeTab === "Odds" ? 'active':''}`} data-bs-toggle="tab">
                Odds
              </a>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("Bet")}>
              <a className={`nav-link ${activeTab === "Bet" ? 'active':''}`} data-bs-toggle="tab">
                Matched Bet (0)
              </a>
            </li>
            <li className="nav-item" onClick={() => setWatchTv(!watchTv)}>
              <a className="nav-link">
                <MdLiveTv />
              </a>
            </li>
          </ul>
        
        
          {activeTab === "Odds" ? (
            <>
              {sport === "cricket" && (data?.teams || []).length > 1 && watchTv ? (
            <div className="live-tv d-xl-none">
              <iframe
                allow="autoplay"
                src="https://demo.livestream11.com/user/821378516/Microsoft Windows/103.44.52.176/470089d9-5b42-4e88-a0b2-e3fa86284958"
                style={{ width: "100%", border: "0px" }}
              ></iframe>
            </div>
          ) : (
            ""
          )}
              {sport === "cricket" && (data?.teams || []).length > 1 ? (
            <ScoreCard data={data} />
          ) : (
            ""
          )}
              {(matchOdds || [])?.length ? (
                <MatchOddBookmaker
                  data={matchOdds}
                  updatedTime={data?.updateTime}
                />
              ) : (
                ""
              )}
              {(bookMaker || [])?.length ? (
                <BookmakerComp
                  data={bookMaker}
                  updatedTime={data?.updateTime}
                />
              ) : (
                ""
              )}
              {sport === "cricket" ? <FancyComp /> : ""}
            </>
          ) : (
            ""
          )}
        </>
      )}
      {activeTab === "Bet" ? (
        <div className="table-responsive w-100">
         <MatchedBets/>
        </div>
      ) : (
        ""
      )}
        </>
      }
      
    </div>
  );
};

export default EventPanel;
