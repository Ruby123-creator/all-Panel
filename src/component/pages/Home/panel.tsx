import React from "react";
import Accordian from "../../common/Accordian";
import CarousalComp from "../../common/carousal";
import { BsSuitSpadeFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import UpcomingEvents from "../../common/UpComingEvents";
import {
  bannerImages,
  cardGames,
  carousalImages,
  casinoProviders,
  popularGames,
} from "../../../Framework/utils/static";
import { Carousel } from "antd";
import "../../../assets/css/style.css";
import { MdSportsCricket } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";

import TrendingGames from "../../common/Tabs";
import InPlayEvents from "../../common/InPlayEvents";
import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { IoTennisball } from "react-icons/io5";
import CasinoProvider from "../../common/casinoProvider";
import { useSportFixture } from "../../../Framework/sportsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useUI } from "../../../context/ui.context";
import { useNavigate } from "react-router-dom";
import { extractEventDetails } from "../../../Framework/utils/constant";
const PanelComp: React.FC = () => {
  const { isLogin, setLoginModal, activeNav } = useUI();
  const naviagte = useNavigate();
  const { data, isLoading, isError } = useSportFixture(
    activeNav?.val
  );
  const events = (data || []).sort((a: any, b: any) => {
    if (a?.inPlay === "True" && b?.inPlay !== "True") return -1;
    if (a?.inPlay !== "True" && b?.inPlay === "True") return 1;
    return 0;
  });
  console.log(activeNav, events, "navbar");

 

  return (
    <div className="tab-content mt-1">
      <div className="tab-pane active">
        <div className="bet-table">
          <div className="bet-table-header">
            <div className="bet-nation-name">
              <b>Game</b>
            </div>
            <div className="bet-nation-odd">
              <b>1</b>
            </div>
            <div className="bet-nation-odd">
              <b>X</b>
            </div>
            <div className="bet-nation-odd">
              <b>2</b>
            </div>
          </div>
          <div className="bet-table-body">
            {
              isError ? <div className="bet-table-row">No Record Found</div> : <>
                {(events || []).map((item: any, index: number) => {
              const detail = extractEventDetails(item?.eventName);
              return (
                <div key={index} className="bet-table-row">
                  
                  <div className="bet-nation-name">
                    <div className={`bet-nation-game-name ${item?.inPlay === "True" ? "pointer":""}`} onClick={()=>{
                                                   if(item?.inPlay === "True"){

                                                    naviagte(`/event-page/${activeNav?.val}/${item?.gameId}`);
                                                   }
                                                   
                                                }}>
                      <span>
                        {detail?.team1} v {detail?.team2}
                      </span>
                      {detail?.date && <span> / {detail?.date}</span>}
                      {detail?.time && <span> / {detail?.time}</span>}
                    </div>
                    {
                        item?.inPlay === "True" ?   <div className="game-icons">
                     
                        <div className="game-icon">
                          <span className="active"></span>
                        </div>
                        <div className="game-icon"></div>
                        <div className="game-icon">
                          <MdOutlineLiveTv />
                        </div>
                      </div>:""
                      }
                  
                  </div>
                  <div className="bet-nation-odd">
                    <div className="back odd-box">
                      <span className="bet-odd">
                        <b>{item?.lay1}</b>
                      </span>
                    </div>
                    <div className="lay odd-box">
                      <span className="bet-odd">
                        <b>{item?.back1}</b>
                      </span>
                    </div>
                  </div>
                  <div className="bet-nation-odd">
                    <div className="back odd-box">
                      <span className="bet-odd">
                        <b>{item?.lay11}</b>
                      </span>
                    </div>
                    <div className="lay odd-box">
                      <span className="bet-odd">
                        <b>{item?.back11}</b>
                      </span>
                    </div>
                  </div>
                  <div className="bet-nation-odd">
                    <div className="back odd-box">
                      <span className="bet-odd">
                        <b>{item?.lay12}</b>
                      </span>
                    </div>
                    <div className="lay odd-box">
                      <span className="bet-odd">
                        <b>{item?.back12}</b>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
              </>
            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelComp;
