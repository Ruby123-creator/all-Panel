import React from "react";

interface TeamScore {
  runs: number;
  wickets: number;
  overs: number;
}

interface ScoreCardProps {
  data: {
    teams?: string[];
    teamScore?: any[];
    scorecards?: any[]; // Adjust this type based on actual structure
  };
}

const ScoreCard: React.FC<ScoreCardProps> = ({ data = {} }) => {
  const { teams = [], teamScore = [], scorecards = [] } = data;
  const ballsColor = (val: string) => {
    switch (val) {
      case "4":
        return "bg-bg_RefreshBtnBg";
      case "6":
        return "purpleball";
      case "ww":
        return "bg-bg_Primary";
      default:
        return "blueballs";
    }
  };
  return (
    <div className="scorecard">
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="team-1 row">
            <span className="team-name col-3">{(teams||[])[0]}</span>
            <span className="score col-6 text-end">{(teamScore||[])[0]}</span>
            <span className="team-name col-3">
              <span>{(teams||[])[1]} </span>
              <span>RR 19.00</span>
            </span>
          </p>
          <p className="team-1 row mt-2">
            <span className="team-name col-3">{(teams||[])[2]}</span>
            <span className="score col-6 text-end">{(teamScore||[])[1]}</span>
            <span className="team-name col-3"></span>
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12">
              <div className="text-xl-end">
                {/* <span>GT Needed 57 runs from 18 balls</span> */}
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-xl-end ball-by-ball mt-2">
                    {
                      (scorecards||[]).map((item,i:number)=>{
                        return (
                    <span className="ball-runs">{item}</span>

                        )
                      })
                    }
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
