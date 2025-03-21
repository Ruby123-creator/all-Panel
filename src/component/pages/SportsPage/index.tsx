import React, { useState } from "react";


import PanelComp from "../Home/panel";
import RaceCardPanel from "../Home/racecardPanel";
import { useUI } from "../../../context/ui.context";

const SportsDetail: React.FC = () => {
 const {activeNav} = useUI();
  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
      {

(activeNav?.title||"").includes("Racing") ? <RaceCardPanel/> :<PanelComp/>
      }


</div>
</div>
  );
};

export default SportsDetail;
