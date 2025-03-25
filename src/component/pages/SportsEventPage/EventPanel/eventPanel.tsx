import React, { useEffect, useState } from "react";

import { useSportDetailsById } from "../../../../Framework/sportsData";
import MatchOddBookmaker from "./MatchOddBookmaker";
import FancyComp from "./fancy";
import { useParams } from "react-router-dom";

import BookmakerComp from "./Bookmaker";
import RacingBet from "./RacingBet/racingbet";

const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
  
  const { data, isLoading, isError } = useSportDetailsById({
    id: eventId,
    sport,
  });

  const matchOdds = (data?.market || [])[0]?.events;
  const bookMaker = data?.bookmaker;
  console.log(data, matchOdds, bookMaker, "matchessss::::::::::::");

  return (
    <div className="detail-page-container">
      {sport === "horse-racing" || sport === "greyhound-racing" ? (
        <>
        
          <RacingBet data={data}/>
        </>
      ) : (
        <>
          <div className="game-header">
            <span>{data?.title}</span>
          </div>
          {(matchOdds || [])?.length ? (
            <MatchOddBookmaker
              data={matchOdds}
              updatedTime={data?.updateTime}
            />
          ) : (
            ""
          )}
          {(bookMaker || [])?.length ? (
            <BookmakerComp data={bookMaker} updatedTime={data?.updateTime} />
          ) : (
            ""
          )}
          {sport === "cricket" ? <FancyComp /> : ""}
        </>
      )}
    </div>
  );
};

export default EventPanel;
