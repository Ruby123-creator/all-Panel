import { useTableCardsFixture } from "../../../Framework/tablecards";
import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
const LiveCasino = () => {
  const { data } = useTableCardsFixture();
  // const {t1=[],t2=[]} = data;
  const playerInfo = (data?.t1 || []);
  
  console.log(data, playerInfo, "CHECK::::::::::::::::");
  const playerVal = (playerInfo||[]).filter((val:any)=>(val?.nat||"").includes('Player'));
  const othercards = (playerInfo||[]).filter((val:any)=>((val?.nat||"").includes('Total')));
  const cards = (playerInfo||[]).filter((val:any)=>(!((val?.nat||"").includes('Total')||(val?.nat||"").includes('Player'))));

  return (
    <div className="center-main-container casino-page">
      <div className="center-container">
        <div className="casino-page-container teenpatti20">
          <div className="casino-header">
            <span className="casino-name">
              20-20 Teenpatti C{" "}
              <a className="ms-1">
                <small>Rules</small>
              </a>
            </span>
            <span className="casino-rid d-none d-xl-inline-block">
              <small>
                Round ID: <span>{data?.mid}</span>
              </small>
            </span>
          </div>

          <div className="casino-title-header-mobile d-xl-none">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <div className="nav-link active">Game</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Placed Bet (0)</div>
              </li>
            </ul>
            <div className="pe-2">
              <span className="casino-rid">
                Round ID: <span>{data?.mid}</span>
              </span>
            </div>
          </div>

          <div className="casino-video">
            <div className="video-box-container">
              <div className="casino-video-box">
                <iframe src="/mediaplayer/teen20c/9c87abd8-82be-4a9c-a2ee-87062bc1d1ab?ip=103.44.52.180"></iframe>
              </div>
            </div>

            <div className="casino-video-cards">
              {["Player A", "Player B"].map((player, index) => (
                <div key={index} className="mt-1">
                  <h5>{player}</h5>
                  <div className="flip-card-container">
                    {(data?.img||[]).map((card:any, idx:number) => (
                      <div key={idx} className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <img
                              src={`/assets/images/playingCards/${card}.jpg`}
                              alt={card}
                            />
                          </div>
                          <div className="flip-card-back">
                            <img
               src={`/assets/images/playingCards/${card}.jpg`}

                              alt={card}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="clock flip-clock-wrapper">
              <FlipClockCountdown
                to={Date.now() + 20 * 1000} // Countdown for 20 seconds
                digitBlockStyle={{
                  width: 50,
                  height: 60,
                  fontSize: 40,
                  background: "#333",
                  color: "#fff",
                }}
                duration={0.5} // Flip speed
                labels={["Seconds"] as any} // Removes labels (hours, minutes)
                separatorStyle={{ display: "none" } as any} // Removes colons
              />
            </div>
          </div>

          <div className="casino-detail">
            <div className="casino-table">
              {["Player A", "Player B"].map((player, index) => (
                <div key={index} className="casino-table-box">
                  <div className="casino-table-left-box">
                    <div className="casino-table-header">
                      <div className="casino-nation-detail">{player}</div>
                    </div>
                    <div className="casino-table-body">
                      <div className="casino-table-row">
                        {Array(4)
                          .fill(4)
                          .map((_, idx) => (
                            <div
                              key={idx}
                              className="casino-odds-box back suspended-box"
                            >
                              <span className="casino-odds">0</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="casino-table-box">
            <div className="casino-table-left-box">
              <div className="casino-table-header">
                <div className="casino-nation-detail"></div>
                <div className="casino-odds-box back">Back</div>
                <div className="casino-odds-box lay">Lay</div>
              </div>
              <div className="casino-table-body">
                {
                  (playerVal||[]).slice(0,4).map((item:any,i:number)=>{
                    return(
<div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.b1}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.l1}</span>
                  </div>
                </div>
                    )
                  })
                }
                
                
              </div>
            </div>
            <div className="casino-table-box-divider"></div>
            <div className="casino-table-right-box">
              <div className="casino-table-header">
                <div className="casino-nation-detail"></div>
                <div className="casino-odds-box back">Odd</div>
                <div className="casino-odds-box back">Even</div>
              </div>
              <div className="casino-table-body">
              {
                  (playerVal||[]).slice(4,8).map((item:any,i:number)=>{
                    return(
<div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.b1}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.status === "SUSPENDED" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.l1}</span>
                  </div>
                </div>
                    )
                  })
                }
             
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <div className="sidebar right-sidebar casino-right-sidebar">
        <div className="sidebar-box my-bet-container">
          <div className="sidebar-title">
            <h4>My Bet</h4>
          </div>
          <div className="my-bets">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Matched Bet</th>
                    <th className="text-end">Odds</th>
                    <th className="text-end">Stake</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCasino;
