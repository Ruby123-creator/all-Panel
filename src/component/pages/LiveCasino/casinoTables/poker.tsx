import React from "react";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}
const Poker :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const {setCasinoBetOdds} = useBetting();

  const playerInfo = data?.t1;
  const playerA = (data?.t2||[]).find((val:any)=>val?.nat === "Player B 2 Cards Bonus");
  const playerB = (data?.t2||[]).find((val:any)=>val?.nat === "Player A 2 Cards Bonus");
   
  return (
    <div className="casino-table">
      <div className="casino-table-box">
        {
          (playerInfo||[]).map((item:any,i:number)=>{
            return(
              <>
               <div className="casino-table-left-box">
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">{item?.nat}</div>
              </div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.bp,  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.status === "suspended" ? "suspended-box":""}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.lp,  runnerName:`${item?.nat}`,type:"lay",
                   className:"lay"
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box lay ${item?.status === "suspended" ? "suspended-box":""}`}>
                <span className="casino-odds">{item?.lp}</span>
              </div>
            </div>
          </div>
        </div>
        {
          i === 0 ?   <div className="casino-table-box-divider"></div>:""
        }
      
              </>
            )
          })
        }
       
     
      </div>
      <div className="poker1day-other-odds">
      <div className="casino-table-left-box">
          <div className="w-100 d-xl-none mobile-nation-name">PLAYER A</div>
          <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:playerA?.b1,  runnerName:`${playerA?.nat}`,type:"back",
                   className:"back",eventKey:'t2',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${playerA?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">2 card bonus</span>
          </div>
          <div className={`casino-odds-box back  ${playerA?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">7 Cards Bonus</span>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
       
      
        <div className="casino-table-right-box">
          <div className="w-100 d-xl-none mobile-nation-name">Player B</div>
          <div className={`casino-odds-box back  ${playerB?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">2 Cards Bonus</span>
          </div>
          <div className={`casino-odds-box back  ${playerB?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">7 Cards Bonus</span>
          </div>
        </div>
      </div>
      <div className="casino-remark mt-1">
        {/* <marquee scrollAmount={3}>Play &amp; Win </marquee> */}
      </div>
    </div>
  );
};

export default Poker;
