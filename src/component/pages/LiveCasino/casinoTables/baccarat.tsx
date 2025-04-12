import React from "react";
import { useParams } from "react-router-dom";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}

const Baccarat:React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds,casinoOdds} = useBetting();

  const {val} = useParams();
  console.log(data,"CHECK")
  const statics = data?.t1;
  const playerPair = (data?.t1||[]).find((val:any)=>val?.nat === "Player Pair");
  const player = (data?.t1||[]).find((val:any)=>val?.nat === "Player");
  const tie = (data?.t1||[]).find((val:any)=>val?.nat === "Tie");
  const banker = (data?.t1||[]).find((val:any)=>val?.nat === "Banker");
  const bankerPair = (data?.t1||[]).find((val:any)=>val?.nat === "Banker Pair");

  return (
    <div className={`casino-table baccarat ${val === "baccarat2" ? 'baccarat2' :''}`}>
      <div className="casino-table-full-box ">
        <div className="baccarat-graph text-center">
          <h4 className="">Statistics</h4>
          <div style={{ height: "160px", width: "100%" }}>
            <div
              id="reactgooglegraph-1"
              style={{ height: "160px", width: "100%" }}
            >
              <div style={{ position: "relative" }}>
                <div
                  dir="ltr"
                  style={{
                    position: "relative",
                    width: "124px",
                    height: "160px",
                  }}
                >
                  <div
                    aria-label="A chart."
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <svg
                      width="124"
                      height="160"
                      aria-label="A chart."
                      style={{ overflow: "hidden" }}
                    >
                      <defs id="_ABSTRACT_RENDERER_ID_92"></defs>
                      <g>
                        <rect
                          x="90"
                          y="3"
                          width="34"
                          height="34"
                          stroke="none"
                          stroke-width="0"
                          fill-opacity="0"
                          fill="#ffffff"
                        ></rect>
                        <g column-id="Player">
                          <rect
                            x="90"
                            y="3"
                            width="34"
                            height="8"
                            stroke="none"
                            stroke-width="0"
                            fill-opacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              text-anchor="start"
                              x="101"
                              y="9.8"
                              font-family="Arial"
                              font-size="8"
                              stroke="none"
                              stroke-width="0"
                              fill="#222222"
                            >
                              Player
                            </text>
                          </g>
                          <circle
                            cx="94"
                            cy="7"
                            r="4"
                            stroke="none"
                            stroke-width="0"
                            fill="#086cb8"
                          ></circle>
                        </g>
                        <g column-id="Banker">
                          <rect
                            x="90"
                            y="16"
                            width="34"
                            height="8"
                            stroke="none"
                            stroke-width="0"
                            fill-opacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              text-anchor="start"
                              x="101"
                              y="22.8"
                              font-family="Arial"
                              font-size="8"
                              stroke="none"
                              stroke-width="0"
                              fill="#222222"
                            >
                              Ban…
                            </text>
                            <rect
                              x="101"
                              y="16"
                              width="23"
                              height="8"
                              stroke="none"
                              stroke-width="0"
                              fill-opacity="0"
                              fill="#ffffff"
                            ></rect>
                          </g>
                          <circle
                            cx="94"
                            cy="20"
                            r="4"
                            stroke="none"
                            stroke-width="0"
                            fill="#ae2130"
                          ></circle>
                        </g>
                        <g column-id="Tie">
                          <rect
                            x="90"
                            y="29"
                            width="34"
                            height="8"
                            stroke="none"
                            stroke-width="0"
                            fill-opacity="0"
                            fill="#ffffff"
                          ></rect>
                          <g>
                            <text
                              text-anchor="start"
                              x="101"
                              y="35.8"
                              font-family="Arial"
                              font-size="8"
                              stroke="none"
                              stroke-width="0"
                              fill="#222222"
                            >
                              Tie
                            </text>
                          </g>
                          <circle
                            cx="94"
                            cy="33"
                            r="4"
                            stroke="none"
                            stroke-width="0"
                            fill="#279532"
                          ></circle>
                        </g>
                      </g>
                      <g>
                        <path
                          d="M77,76.3L77,83.7A37,29.6,0,0,1,53.62060844933308,111.22138398229225L53.62060844933308,103.82138398229225A37,29.6,0,0,0,77,76.3"
                          stroke="#06518a"
                          stroke-width="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M40,76.3L40,83.7L53.62060844933308,111.22138398229225L53.62060844933308,103.82138398229225"
                          stroke="#06518a"
                          stroke-width="1"
                          fill="#06518a"
                        ></path>
                        <path
                          d="M40,76.3L40,46.699999999999996A37,29.6,0,0,1,53.62060844933308,103.82138398229225L40,76.3A0,0,0,0,0,40,76.3"
                          stroke="#086cb8"
                          stroke-width="1"
                          fill="#086cb8"
                        ></path>
                        <text
                          text-anchor="start"
                          x="51.536207929012896"
                          y="76.32422796335706"
                          font-family="Arial"
                          font-size="8"
                          stroke="none"
                          stroke-width="0"
                          fill="#ffffff"
                        >
                          44%
                        </text>
                      </g>
                      <g>
                        <path
                          d="M40,76.3L40,83.7L14.67175708063851,62.122528628326215L14.67175708063851,54.72252862832622"
                          stroke="#1d7026"
                          stroke-width="1"
                          fill="#1d7026"
                        ></path>
                        <path
                          d="M40,76.3L14.67175708063851,54.72252862832622A37,29.6,0,0,1,40,46.699999999999996L40,76.3A0,0,0,0,0,40,76.3"
                          stroke="#279532"
                          stroke-width="1"
                          fill="#279532"
                        ></path>
                      </g>
                      <g>
                        <path
                          d="M53.62060844933308,103.82138398229225L53.62060844933308,111.22138398229225A37,29.6,0,0,1,3,83.7L3,76.3A37,29.6,0,0,0,53.62060844933308,103.82138398229225"
                          stroke="#831924"
                          stroke-width="1"
                          fill="#831924"
                        ></path>
                        <path
                          d="M40,76.3L53.62060844933308,103.82138398229225A37,29.6,0,0,1,14.67175708063851,54.72252862832622L40,76.3A0,0,0,0,0,40,76.3"
                          stroke="#ae2130"
                          stroke-width="1"
                          fill="#ae2130"
                        ></path>
                        <text
                          text-anchor="start"
                          x="15.648128995135544"
                          y="86.82923442889019"
                          font-family="Arial"
                          font-size="8"
                          stroke="none"
                          stroke-width="0"
                          fill="#ffffff"
                        >
                          44%
                        </text>
                      </g>
                      <g></g>
                    </svg>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      aria-label="A tabular representation of the data in the chart."
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>P</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Player</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Banker</td>
                            <td>44</td>
                          </tr>
                          <tr>
                            <td>Tie</td>
                            <td>12</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: "170px",
                    left: "134px",
                    whiteSpace: "nowrap",
                    fontFamily: "Arial",
                    fontSize: "8px",
                  }}
                >
                  44%
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="baccarat-odds-container">
          <div className="baccarat-other-odds">
            {
              (statics||[]).slice(0,val === "baccarat2" ? 5 :4).map((item:any,i:number)=>{
                return(
<div className="baccarat-other-odd-box-container">
              <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1'
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`baccarat-other-odd-box ${item?.status === "SUSPENDED" ? "suspended-box" :""}`}>
                <span>{item?.nat}</span>
                <span>{item?.bp}:1</span>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
                )
              })
            }
            
          
          </div>
          <div className="baccarat-main-odds mt-3">
            <div className="player-pair-box-container">
              <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:playerPair?.bp,  runnerName:`${playerPair?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`player-pair-box ${playerPair?.status === "SUSPENDED" ? 'suspended-box' :''}`}>
                <div>Player Pair</div>
                <div>{playerPair?.bp}:1</div>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
            <div className="player-box-container">
              <div
              onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setCasinoBetOdds({...casinoOdds, odds:player?.bp,  runnerName:`${player?.nat}`,type:"back",
                 className:"back",eventKey:'t1',
                  // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                })
              }}
              className={`player-box ${player?.status === "SUSPENDED" ? 'suspended-box' :''}`}>
                <div>Player</div>
                <div>{player?.bp}:1</div>
                <div>
                  {
                   ( player?.img||[]).map((val:any)=>{
                    return(
                      <img src={`/assets/images/playingCards/${val}.jpg`} />

                    )
                   })
                  }
                 
                </div>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
            <div className="tie-box-container">
              <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:tie?.bp,  runnerName:`${tie?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`tie-box ${tie?.status === "SUSPENDED" ? 'suspended-box' :''}`}>
                <div>Tie</div>
                <div>{tie?.bp}:1</div>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
            <div className="banker-box-container">
              <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:banker?.bp,  runnerName:`${banker?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`banker-box ${banker?.status === "SUSPENDED" ? 'suspended-box' :''}`}>
                <div>Banker</div>
                <div>{banker?.bp}:1</div>
                <div>
                  {
                    (banker?.img||[]).map((val:any)=>{
                      return(
                      <img src={`/assets/images/playingCards/${val}.jpg`} />

                      )
                    })
                  }
                 
                </div>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
            <div className="banker-pair-box-container">
              <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:bankerPair?.bp,  runnerName:`${bankerPair?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`banker-pair-box ${bankerPair?.status === "SUSPENDED" ? 'suspended-box' :''}`}>
                <div>Banker Pair</div>
                <div>{bankerPair?.bp}:1</div>
              </div>
              <div className="casino-nation-book text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baccarat;
