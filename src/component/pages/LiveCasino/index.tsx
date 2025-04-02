import { useTableCardsFixture } from "../../../Framework/tablecards";
import React, { useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useParams } from "react-router-dom";

import CasinoResultModal from "../../modals/resultModal";
import { renderTable } from "../../../Framework/utils/static";
import ScorecardBoard from "./scorecard";
const suspendedData = {
  success: true,
  update: "2025-03-25 23:47:07",
  auto: "28",
  mid: " 101250325234446",
  img: "9HH,KDD,1,ASS,KHH,1",
  t1: [
    {
      nat: "Player A Main",
      status: "suspend",
      bp: "0",
      lp: "0",
      sid: 1,
    },
    {
      nat: "Player A Consecutive",
      status: "suspend",
      bp: "0",
      lp: "0",
      sid: 2,
    },
    {
      nat: "Player B Main",
      status: "suspend",
      bp: "0",
      lp: "0",
      sid: 3,
    },
    {
      nat: "Player B Consecutive",
      status: "suspend",
      bp: "0",
      lp: "0",
      sid: 4,
    },
  ],
  t2: [
    {
      nat: "Odd Card 1",
      bp: "0",
      status: "suspend",
      sid: 1,
      type: "even",
    },
    {
      nat: "Odd Card 2",
      bp: "0",
      status: "suspend",
      sid: 2,
      type: "even",
    },
    {
      nat: "Odd Card 3",
      bp: "0",
      status: "suspend",
      sid: 3,
      type: "even",
    },
    {
      nat: "Odd Card 4",
      bp: "0",
      status: "suspend",
      sid: 4,
      type: "even",
    },
    {
      nat: "Odd Card 5",
      bp: "1.97",
      status: "active",
      sid: 5,
      type: "even",
    },
    {
      nat: "Odd Card 6",
      bp: "0",
      status: "suspend",
      sid: 6,
      type: "even",
    },
    {
      nat: "Even Card 1",
      bp: "0",
      status: "suspend",
      sid: 7,
      type: "even",
    },
    {
      nat: "Even Card 2",
      bp: "0",
      status: "suspend",
      sid: 8,
      type: "even",
    },
    {
      nat: "Even Card 3",
      bp: "0",
      status: "suspend",
      sid: 9,
      type: "even",
    },
    {
      nat: "Even Card 4",
      bp: "0",
      status: "suspend",
      sid: 10,
      type: "even",
    },
    {
      nat: "Even Card 5",
      bp: "1.97",
      status: "active",
      sid: 11,
      type: "even",
    },
    {
      nat: "Even Card 6",
      bp: "0",
      status: "suspend",
      sid: 12,
      type: "even",
    },
  ],
};
const resultData = [
  {
    success: true,
    "Player A": ["6SS", "8DD", "QDD"],
    "Player B": ["QCC", "6CC", "AHH"],
    Round_Id: "101250326005612",
    timestamp: "2025-03-26 01:00:51",
    result: {
      "Round Id": "101250326005612",
      "Match Time": "26/03/2025 00:56:12",
      Winner: "Player B",
      "Odd/Even": ["Even", "Even", "Even", "Even", "Even", "Odd"],
      Consecutive: {
        "Player A": "No",
        "Player B": "No",
      },
    },
  },
  {
    success: true,
    "Player A": ["10DD", "8DD", "2DD"],
    "Player B": ["2HH", "QHH", "ACC"],
    Round_Id: "101250326005941",
    timestamp: "2025-03-26 01:03:33",
    result: {
      "Round Id": "101250326005941",
      "Match Time": "26/03/2025 00:59:41",
      Winner: "Player A",
      "Odd/Even": ["Even", "Even", "Even", "Even", "Even", "Odd"],
      Consecutive: {
        "Player A": "No",
        "Player B": "Yes",
      },
    },
  },
];
const LiveCasino = () => {
  const { val } = useParams();

  const { data } = useTableCardsFixture(val);
  const [openResultModal, setOpenResultModal] = useState(false);
  const [casinoResult, setCasinoresult] = useState({});
  // const {t1=[],t2=[]} = data;

  return (
    <div className="center-main-container casino-page">
      <div className="center-container">
        <div className="casino-page-container teenpatti1day">
          <div className="casino-header">
            <span className="casino-name">
              {renderTable(val)?.title}{" "}
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
          {
            (val === "superover" || val === "cricketv3" || val === "superover3") ? <ScorecardBoard/>:""
          }
          
          <div>
            <div className="casino-video">
              <div className="video-box-container">
                <div className="casino-video-box">
                  <iframe src="/mediaplayer/teen20c/9c87abd8-82be-4a9c-a2ee-87062bc1d1ab?ip=103.44.52.180"></iframe>
                </div>
              </div>
              {renderTable(val, data)?.cardRenders}

              <div className="clock flip-clock-wrapper">
                <FlipClockCountdown
                  to={Date.now() + (parseInt(data?.auto, 10) || 0) * 1000}
                  digitBlockStyle={{
                    width: 50,
                    height: 60,
                    fontSize: 40,
                    background: "#333",
                    color: "#fff",
                  }}
                  duration={0.5} // Flip speed
                  // Removes labels (hours, minutes)
                  // separatorStyle={{ display: "none" } as any} // Removes colons
                />
              </div>
            </div>
            <div className="casino-detail">
              {renderTable(val, data)?.table}

              <div className="casino-last-result-title">
                <span>Last Result</span>
                <span>
                  <a href="/casino-results/teen">View All</a>
                </span>
              </div>

              <div className="casino-last-results">
                {(resultData || []).map((item: any, i: number) => {
                  const result = item?.result?.Winner;
                  const WinnerName = ((result || "").split(" ") || [])[1];
                  return (
                    <span
                      onClick={() => {
                        setOpenResultModal(true);
                        setCasinoresult(item);
                      }}
                      className={`result result-${
                        WinnerName === "A" ? "a" : "b"
                      }`}
                    >
                      {WinnerName}
                    </span>
                  );
                })}
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
      <CasinoResultModal
        openModal={openResultModal}
        setOpenModal={setOpenResultModal}
        casinoResult={casinoResult}
        title={renderTable(val)?.title}
      />
    </div>
  );
};

export default LiveCasino;
