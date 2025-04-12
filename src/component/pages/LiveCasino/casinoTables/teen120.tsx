import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";
 interface Props{
data:any
}
const Teen120 :React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds,casinoOdds} = useBetting();

  console.log(data,"CHECK")
  const playerInfo = data?.t1
  return (
    <div className="casino-table onecard20">
      <div className="casino-table-full-box">
        {
         (playerInfo||[])?.map((item:any,i:number)=>{
          return(
<div className={`onecard20oddbox onecard20${(item?.nat||"").toLowerCase()} `}>
          <div className="casino-odds text-center">{item?.bp}</div>
          <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back casino-odds-box-theme ${item?.status === "suspended"?'suspended-box':''}`}>
            <span className="casino-odds">{item?.nat}</span>
          </div>
          <div className="casino-nation-book text-center"></div>
        </div>
          )
         })
        }
        
       
      </div>
    </div>
  );
};

export default Teen120;
