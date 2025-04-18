import React, { useState } from 'react';

import PanelComp from './panel';

import RaceCardPanel from './racecardPanel';
import { useUI } from '../../../context/ui.context';
import CasinoComp from '../../common/Casino';
import { MdSportsCricket } from 'react-icons/md';
import NavbarComp from './navbar';
import EventModal from '../../modals/eventModal';
import { useNavigate } from 'react-router-dom';
import { useSportFixture } from '../../../Framework/sportsData';
import { extractEventDetails } from '../../../Framework/utils/constant';


const Home: React.FC = () => {
  const {activeNav} = useUI();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useSportFixture('cricket');
  const inPlayEvents = (data||[]).filter((item:any)=>item?.inPlay === 'True');

  return (
    <>

              <div className="center-main-container home-page">
                <div className="center-container">
                  <div className="latest-event d-none d-xl-flex">
                     {
                              (inPlayEvents||[]).slice(0,5).map((item:any,i:Number)=>{
                                const detail = extractEventDetails(item?.eventName);
                    
                                return (
                                  <div className="latest-event-item pointer" key={`cricketEvents${i}`}>
                                  <div className="blink_me" onClick={()=>{
                                          navigate(`/event-page/cricket/${item?.gameId}`);
                    
                                  }}>
                        <MdSportsCricket fill="#ffff"/>
                                    <span>                        {detail?.team1} v {detail?.team2}
                                    </span>
                                  </div>
                                </div>
                                )
                              })
                            }
                   
                  </div>

                 <NavbarComp/>
                </div>
                <div style={{width:"100%"}} className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px] w-full">
                <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
                  {
    
     (activeNav?.title||"").includes("Racing") ? <RaceCardPanel/> :<PanelComp/>
                  }
      
     
      </div>
    
              <CasinoComp/>
            </div>
              </div>
             
            <EventModal/>
    </>
   
  );
};

export default Home;
