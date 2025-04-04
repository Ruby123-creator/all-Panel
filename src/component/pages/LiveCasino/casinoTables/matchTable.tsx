import React from "react";

interface Props{
  data:any;
}
const MatchTable :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const ballsInfo = data?.t1
  return (
    <div className="casino-table cricket20">
      <div className="cricket20-container">
        <div className="cricket20-left">
          {
            (ballsInfo||[]).slice(0,5).map((item:any,i:number)=>{
              return(
                <div className="score-box">
                <div className="team-score">
                  <div>
                    <div className="text-center">
                      <b>Team A</b>
                    </div>
                    <div className="text-center">
                      <span className="ml-1">231/4 </span>
                      <span className="ml-2">20 Over</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <b>Team B</b>
                    </div>
                    <div className="text-center">
                      <span className="ml-1">219/3 </span>
                      <span className="ml-1">19.5 Overs</span>
                    </div>
                  </div>
                </div>
                <div className="ball-icon">
                  <img src={`/assets/images/balls/ball${((item?.nat||"").split(" ")||[])[1]}.png`} />
                </div>
                <div className="blbox">
                  <div className={`casino-odds-box back ${item?.gstatus === "SUSPENDED" ? "suspended-box" :""}`}>
                    <span className="casino-odds">{item?.b1}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.gstatus === "SUSPENDED" ? "suspended-box" :""}`}>
                    <span className="casino-odds">{item?.l1}</span>
                  </div>
                </div>
              </div>
              )
            })
          }
        
          
        </div>
        <div className="cricket20-right">
        {
            (ballsInfo||[]).slice(5).map((item:any,i:number)=>{
              return(
                <div className="score-box">
                <div className="team-score">
                  <div>
                    <div className="text-center">
                      <b>Team A</b>
                    </div>
                    <div className="text-center">
                      <span className="ml-1">231/4 </span>
                      <span className="ml-2">20 Over</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">
                      <b>Team B</b>
                    </div>
                    <div className="text-center">
                      <span className="ml-1">219/3 </span>
                      <span className="ml-1">19.5 Overs</span>
                    </div>
                  </div>
                </div>
                <div className="ball-icon">
                  <img src={`/assets/images/balls/ball${((item?.nat||"").split(" ")||[])[1]}.png`} />
                </div>
                <div className="blbox">
                  <div className={`casino-odds-box back ${item?.gstatus === "SUSPENDED" ? "suspended-box" :""}`}>
                    <span className="casino-odds">{item?.b1}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.gstatus === "SUSPENDED" ? "suspended-box" :""}`}>
                    <span className="casino-odds">{item?.l1}</span>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="casino-remark mt-1">
        {/* <marquee scrollamount="3">Team B Need 12 Runs to WIN Match. If The Score is Tie Team B will WIN. </marquee> */}
      </div>
    </div>
  );
};

export default MatchTable;
