import React from "react";
import { useBetting } from "../../../../context/bettingContext";
interface Props{
  data?:any;
}
const Poker20:React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const playersInfo = data?.t1;
  const {setCasinoBetOdds} = useBetting();

  return (
    <div className="casino-table poker20">
      <div className="poker20-other-odds">
        <div className="casino-table-box">
          <div className="casino-table-left-box">
            <div className="w-100 d-xl-none mobile-nation-name">Player A</div>
            {
              (playersInfo||[]).slice(0,9).map((item:any,i:number)=>{
                const words = (item?.nat||"").split(" ");
    words.pop(); // Remove the last word
    const players = words.join(" ");
    
                return(
                  <div className="casino-odds-box-container">
                  <div className="casino-nation-name text-center">{players}</div>
                  <div   onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.status === 'suspended' ? 'suspended-box':''}`}>

                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                </div>
                )
              })
            }
           
      
          </div>
          <div className="casino-table-box-divider"></div>
          <div className="casino-table-right-box">
            <div className="w-100 d-xl-none mobile-nation-name">Player B</div>
            {
              (playersInfo||[]).slice(9).map((item:any,i:number)=>{
                const words = (item?.nat||"").split(" ");
    words.pop(); // Remove the last word
    const players = words.join(" ");

                return(
                  <div className="casino-odds-box-container">
                  <div className="casino-nation-name text-center">{players}</div>
                  <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.status === 'suspended' ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poker20;
