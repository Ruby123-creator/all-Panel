import React from 'react'
import { useNavigate } from 'react-router-dom';
const casinoTabs = [
    { name: "All Casino", path: "/live-casino/all-casino" },
    { name: "Roulette", path: "/live-casino/all-casino" },
    { name: "Teenpatti", path: "/live-casino/all-casino" },
    { name: "Poker", path: "/live-casino/all-casino" },
    { name: "Baccarat", path:"/live-casino/all-casino" },
    { name: "Dragon Tiger", path: "/live-casino/all-casino" },
    { name: "32 Cards", path: "/live-casino/all-casino" },
    { name: "Andar Bahar", path: "/live-casino/all-casino" },
    { name: "Lucky 7", path: "/live-casino/all-casino" },
    { name: "3 Card Judgement", path: "/live-casino/all-casino" },
    { name: "Casino War", path: "/live-casino/all-casino" },
    { name: "Worli", path: "/live-casino/all-casino"},
    { name: "Sports", path: "/live-casino/all-casino" },
    { name: "Bollywood", path: "/live-casino/all-casino" },
    { name: "Lottery", path: "/live-casino/all-casino" },
    { name: "Queen", path: "/live-casino/all-casino" },
    { name: "Race", path: "/live-casino/all-casino" },
    { name: "Others", path: "/live-casino/all-casino" },
  ];
const CasinoTabs = () => {
    const Navigate = useNavigate();
  return (
    <div className="col-xl-2 d-none d-xl-flex">
    <ul className="nav nav-pills casino-sub-tab">
      {casinoTabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <div className="nav-link"  onClick={()=>{
Navigate(`/live-casino/${tab?.name}`)
          }}>
            <span>{tab.name}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default CasinoTabs