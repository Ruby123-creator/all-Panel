import React, { useState } from 'react';

import PanelComp from './panel';

import RaceCardPanel from './racecardPanel';
import { useUI } from '../../../context/ui.context';
import CasinoComp from '../../common/Casino';
import { MdSportsCricket } from 'react-icons/md';
import NavbarComp from './navbar';
import EventModal from '../../modals/eventModal';


const Home: React.FC = () => {
  const {activeNav} = useUI();

  return (
    <>

              <div className="center-main-container home-page">
                <div className="center-container">
                  <div className="latest-event d-none d-xl-flex">
                    <div className="latest-event-item ">
                      <a className="blink_me" href="/game-details/4/828856279">
                        <MdSportsCricket size={20} rotate={"90"} />
                        <span>Indian Premier League</span>
                      </a>
                    </div>
                  </div>

                 <NavbarComp/>
                </div>
                <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px] w-full">
                <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
                  {
    
     (activeNav?.title||"").includes("Racing") ? <RaceCardPanel/> :<PanelComp/>
                  }
      
     
      </div>
    
              <CasinoComp/>
            </div>
              </div>
             
            {/* <EventModal/> */}
    </>
   
  );
};

export default Home;
