import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";
interface Props {
  data?: any;
}
const Teenmuf: React.FC<Props> = ({ data }) => {
  const {setCasinoBetOdds,casinoOdds} = useBetting();

  console.log(data,"CHECK::::::::::::::")
  const playerInfo = data?.t1 || [];
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
          <div className="casino-table-row">
            {
              ((playerInfo||[]).slice(0,3)||[]).map((item:any,i:number)=>{
                return(

              <div className="casino-odds-box">{item?.nat}</div>
             
           
                )
              })
            }
             </div>
<div className="casino-table-row">

              {
              ((playerInfo||[]).slice(0,3)||[]).map((item:any,i:number)=>{
                return(
              <div onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
                 className:"back",eventKey:'t1',
                  // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                })
              }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
           
                )
              })
            }
             </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
          <div className="casino-table-row">
            {
              ((playerInfo||[]).slice(3,6)||[]).map((item:any,i:number)=>{
                return(

              <div className="casino-odds-box">{item?.nat}</div>
             
           
                )
              })
            }
             </div>
<div className="casino-table-row">

              {
              ((playerInfo||[]).slice(3,6)||[]).map((item:any,i:number)=>{
                return(
              <div onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
                 className:"back",eventKey:'t1',
                  // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                })
              }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
           
                )
              })
            }
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teenmuf;
