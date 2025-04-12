import React from "react";
import { useBetting } from "../../../../context/bettingContext";
interface Props{
  data?:any;
}
const Race17 :React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds} = useBetting();

  console.log(data,"CHECK");
  const playersInfo = data?.t1||[]
  return (
    <div className="casino-table raceto17">
      <div className="casino-table-box">
        {
          (playersInfo||[]).map((item:any,i:number)=>{
            return(
              <div className="casino-odd-box-container">
              <div className="casino-nation-name">{item?.nat}</div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:(item?.bp||item?.b1),  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                  
                  })
                }} className={`casino-odds-box back ${(item?.status === "suspended"||item?.gstatus === "suspended") ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp||item?.b1}</span>
              </div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:(item?.lp||item?.l1),  runnerName:`${item?.nat}`,type:"lay",
                   className:"lay",eventKey:'t1',
                   
                  })
                }} className={`casino-odds-box lay ${(item?.status === "suspended"||item?.gstatus=== "suspended") ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.lp||item?.l1}</span>
              </div>
              <div className="casino-nation-book text-center w-100"></div>
            </div>
            )
          })
        }
       
        
      </div>
    </div>
  );
};

export default Race17;
