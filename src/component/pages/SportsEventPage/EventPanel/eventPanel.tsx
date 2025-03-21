import React, { useEffect, useState } from "react";

import { useSportDetailsById } from "../../../../Framework/sportsData";
import MatchOddBookmaker from "./MatchOddBookmaker";
import FancyComp from "./fancy";
import { useParams } from "react-router-dom";

import BookmakerComp from "./Bookmaker";

const EventPanel: React.FC = () => {
  const { sport, eventId }: any = useParams();
  const [val, setValue] = useState("");

  useEffect(() => {
    if (sport === "horseRacing_racecard") {
      setValue("racecard");
    } else if (sport === "greyhound_racecard") {
      setValue("racecard/greyhound");
    } else {
      setValue(sport);
    }
  }, [sport]);
  const { data, isLoading, isError } = useSportDetailsById({
    id: eventId,
    sport: val,
  });

 

  const matchOdds = (data?.market || [])[0]?.events;
  const bookMaker = data?.bookmaker;
  console.log(data,matchOdds,bookMaker, "matchessss::::::::::::");

  return (
    <div className="detail-page-container">
      {
        (sport === "greyhound_racecard"||sport === "horseRacing_racecard") ?<>
        <div className="horse-banner"><img src="/assets/images/banner/racing.png" className="img-fluid"/><div className="horse-banner-detail"><div className="text-success">SUSPENDED</div><div className="time-detail"><p>GB  &gt;  Hove</p><h5><span>20/03/2025 23:56:00</span><span>| </span></h5></div></div></div>
        </>:<>
        
        <div className="game-header">
        <span>{data?.title}</span>
       
      </div>
      {
    
        (matchOdds||[])?.length ? <MatchOddBookmaker data={matchOdds} updatedTime={data?.updateTime}/> :""
      }
      {
        (bookMaker||[])?.length ?  <BookmakerComp data={bookMaker} updatedTime={data?.updateTime}/>: ""
      }
     {
      sport === "cricket" ? <FancyComp/>:""
     }
        </>
      }
     
      
    </div>
    
  );
};

export default EventPanel;
