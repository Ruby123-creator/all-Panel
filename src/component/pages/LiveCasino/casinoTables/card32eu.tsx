import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";
interface Props{
  data?:any
}
const Card32eu:React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const {setCasinoBetOdds,casinoOdds} = useBetting();

  const playersInfo = (data?.t1||[])
  return (
    <div className="casino-table cards32b">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            {
              (playersInfo||[]).slice(0,4).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box': ''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.lay,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box': ''}`}>

                    <span className="casino-odds">{item?.lay}</span>
                  </div>
                </div>
                )
              })
            }
          
           
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Odd</div>
            <div className="casino-odds-box back">Even</div>
          </div>
          <div className="casino-table-body">
          {
              (playersInfo||[]).slice(4,8).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box': ''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp1,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box': ''}`}>

                    <span className="casino-odds">{item?.bp1}</span>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            {
              (playersInfo||[]).slice(8,11).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box': ''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.lay,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box': ''}`}>

                    <span className="casino-odds">{item?.lay}</span>
                  </div>
                </div>
                )
              })
            }
           
           
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box cards32total">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>

          </div>
          <div className="casino-table-body">
          {
              (playersInfo||[]).slice(11).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box': ''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.bp,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box': ''}`}>

                    <span className="casino-odds">{item?.bp1}</span>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="casino-table-full-box mt-3 card32numbers">
        <h4 className="w-100 text-center mb-2">
          <b>9.5</b>
        </h4>
        <div className="card32numbers-container">
          {
          [1,2,3,4,5,6,7,8,9,0].map((val,i)=>{
            return(
              <div className="casino-odds-box back"
              onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setCasinoBetOdds({...casinoOdds, odds:9.5,  runnerName:`${val}`,type:"back",
                 className:"back",eventKey:'t1',
                  // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                })
              }}
              >
              <span className="casino-odds">{val}</span>
            </div>
            )
          })

          }
        
        </div>
      </div>
    </div>
  );
};

export default Card32eu;
