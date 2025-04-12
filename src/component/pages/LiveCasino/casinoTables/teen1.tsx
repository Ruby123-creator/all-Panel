import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}
const Teen1 :React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds,casinoOdds} = useBetting();
  console.log(data,"CHECK::")
  const table1 = data?.t1||[]
  return (
    <div className="casino-table onecard1day">
      <div className="casino-table-box">
        {
          (table1||[]).map((item:any,i:number)=>{
            return(
<>
<div className="casino-table-left-box">
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">{item?.nat}</div>
                <div className="casino-nation-book text-success"></div>
              </div>
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
              <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.lp,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.lp}</span>
              </div>
            </div>
          </div>
        </div>
        {
        
          i === 0 ? <div className="casino-table-box-divider"></div>:""
        }
</>
            )
          })
        }
        
        
      </div>
      <div className="casino-table-box mt-3 sevenupbox">
        <div className="casino-table-left-box">
          <h4 className="d-md-none mb-2">Player</h4>
          <div className="seven-up-down-box">
            <div className="up-box suspended-box">
              <div className="up-down-book"></div>
              <div className="text-end">
                <div className="up-down-odds">0</div>
                <span>DOWN</span>
              </div>
            </div>
            <div className="down-box suspended-box">
              <div className="up-down-book"></div>
              <div className="text-start">
                <div className="up-down-odds">0</div>
                <span>UP</span>
              </div>
            </div>
            <div className="seven-box">
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/trape-seven.png" />
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <h4 className="d-md-none mb-2">Dealer</h4>
          <div className="seven-up-down-box">
            <div className="up-box suspended-box">
              <div className="up-down-book"></div>
              <div className="text-end">
                <div className="up-down-odds">0</div>
                <span>DOWN</span>
              </div>
            </div>
            <div className="down-box suspended-box">
              <div className="up-down-book"></div>
              <div className="text-start">
                <div className="up-down-odds">0</div>
                <span>UP</span>
              </div>
            </div>
            <div className="seven-box">
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/trape-seven.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teen1;
