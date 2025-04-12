import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}
const Teen8 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const playerInfo = data?.t1
  const {setCasinoBetOdds, casinoOdds} = useBetting();
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box back">Odds</div>
          <div className="casino-odds-box back">Pair Plus</div>
          <div className="casino-odds-box back">Total</div>
        </div>
        <div className="casino-table-body">
          {
            (playerInfo||[]).map((item:any,i:number)=>{
              return(
<div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                {item?.nat}
                <div className="patern-name">
                  <span className="card-icon ms-2">
                    4<span className="card-black ms-1"></span>
                  </span>
                  <span className="card-icon ms-2">
                    4<span className="card-black ms-1"></span>
                  </span>
                </div>
              </div>
            </div>
            <div
             onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }}
            className={`casino-odds-box back ${item?.status === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.bp}</span>
            </div>
            <div className={`casino-odds-box back ${item?.status === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">Pair Plus {i+1}</span>
            </div>
            <div className={`casino-odds-box back ${item?.status === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.bp}</span>
            </div>
          </div>
              )
            })
          }
          
          
        </div>
      </div>
    </div>
  );
};

export default Teen8;
