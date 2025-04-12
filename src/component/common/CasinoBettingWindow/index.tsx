import React, { useRef, useState } from "react";
import { useUI } from "../../../context/ui.context";
import { useBetting } from "../../../context/bettingContext";
import { usePlaceCasinoBet } from "../../../Framework/placeBet";
import { showToasterMessage } from "../../../Framework/utils/constant";
import { format } from "date-fns";
import { useIPDetails } from "../../../Framework/login";
import { Modal } from "antd";
import { useParams } from "react-router-dom";
import { useTableCardsFixture } from "../../../Framework/tablecards";
import { renderTable } from "../../../Framework/utils/static";
import { IoIosClose } from "react-icons/io";

const CasinoBettingWindow = React.memo(() => {
  const { val } = useParams();

  const { casinoOdds ,setCasinoBetOdds} = useBetting();
  const {userData} = useUI();
  console.log(casinoOdds,"Matching")
    const { data:ipAddress} = useIPDetails();
   const { mutate: placingBet, isError: error } = usePlaceCasinoBet();
   const { data } = useTableCardsFixture(val);
    const [sum, setSum] = useState<number>(0);
    const [edit, setEdit] = useState<boolean>(false);
    const [betProcessed, setBetProcessed] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(2);
   
     console.log(data,"MINKAKIIII");
     const getEventData = () =>{
        const casinoTableData = data[`${casinoOdds?.eventKey}`]
        const arr =  (casinoTableData||[]).find((item:any)=>item?.nat === casinoOdds?.runnerName);
        return arr;
     }
    // const eventData = casinoOdds?.betType === "session" ? fancyData?.session as EventData[] :(casinoOdds?.betType === "odd" ? ((matchData||[])[0]?.events) as EventData[]:matchData as EventData[]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
     
    const isPlacingBet = useRef(false); // Track ongoing API request
  
    const calculateMaxAmount = (val: string | number): number => {
      if (typeof val === "number") {
        return val;
      }
    
      if (typeof val === "string") {
        let num = parseFloat(val);
        
        if (val.toUpperCase().includes("L")) {
          return num * 100000; // Convert Lakh to numeric value
        } 
        if (val.toUpperCase().includes("K")) {
          return num * 1000; // Convert Thousand to numeric value
        }
      }
    
      return 0; // Default return value
    };
    const checkBetCondition = (): boolean => {
      

 const checkCurrentBet = getEventData();
   console.log(checkCurrentBet,"CUrrent")
   console.log(userData,checkCurrentBet,getEventData(),sum,"BETDONE")
    if (!userData || !casinoOdds || !checkCurrentBet) return false;
    if(!(Object.keys(userData||{})?.length)){
      showToasterMessage({ messageType: "error", description: "LOGIN WITH REALID" });
      return false;
    }
    // Check user status and balance
    if (userData.status === "deactive" || (Number(userData?.Balance)-Number(Math.abs(userData?.Exposure))) < sum ) {
      showToasterMessage({ messageType: "error", description: "LOW BALANCE" });
      return false;
    }
      
    if((sum<Number(casinoOdds?.min))||
    //  sum>Number(calculateMaxAmount(casinoOdds?.max))     || 
    sum<100){
      showToasterMessage({ messageType: "error", description: "INVALID BET AMOUNT" });
      return false;
    }
  
    // Check odds validity
    // const currentOdds = parseFloat(checkCurrentBet[`${casinoOdds?.eventKey}`]);
    // const betOddsValue = parseFloat(casinoOdds?.odds);
    //  const currentsize = parseFloat(checkCurrentBet[`${casinoOdds?.sizeKey}`])

   

    // if(casinoOdds?.betType === 'session'){
    //     if(Number(casinoOdds?.size) !== Number(currentsize)){
    //       showToasterMessage({ messageType: "error", description: "size invalid" });

    //       return false;
    //     }

    //     if((casinoOdds.type === "lay" && currentOdds < betOddsValue) ||
    //     (casinoOdds.type === "back" && currentOdds > betOddsValue)){
    //       showToasterMessage({ messageType: "error", description: "Odds invalid" });

    //       return false;
    //     }
    // }

    
    // else{
    //   if (
    //     (casinoOdds.type === "lay" && currentOdds > betOddsValue) ||
    //     (casinoOdds.type === "back" && currentOdds < betOddsValue) || (checkCurrentBet?.status === "SUSPENDED" || (checkCurrentBet?.status === "Ball Running"))
    //   ) {
    //     showToasterMessage({ messageType: "error", description: "Odds invalid" });
    //     return false;
    //   }
    // }
  
     
  
  
      
      
    
  
  
     
      return true; // All conditions are valid
    };
    const  calculateProfitLoss = ()=>{
          if(casinoOdds?.type === 'back'){
             return{
              profiltloss: ((Number(casinoOdds?.odds) * sum)-sum).toFixed(2),
              exposure: sum,
             }
          }
          else{
            return{
              exposure: ((Number(casinoOdds?.odds) * sum)-sum).toFixed(2),
              profiltloss: sum,
             }
          }
     }
    // Helper function to place a bet
    const placeBet = () => {
      if (isPlacingBet.current) return; // Prevent duplicate API calls
    isPlacingBet.current = true; // Set flag
      if (!userData || !casinoOdds ) return;
        const eventInfo = {}
       console.log(eventInfo,"eventsss","fitnesss")
      const now = new Date();
      // setBetProcessed(false);
  
      const bettingData = {
        userName: userData.UserName,
       
      
        "eventName": renderTable(val)?.title,
        "profitloss": calculateProfitLoss()?.profiltloss,
        "betTypes": casinoOdds?.type,
        "amount": sum,
        "placeDate": format(now, "yyyy-MM-dd hh:mm:ssa"),
        "MatchDate": "2025-04-09",
        "accountType": "User",
        "userRate": Number(casinoOdds?.odds),
        "ip": ipAddress,
        "exposure": calculateProfitLoss()?.exposure,
        "time": format(now, "yyyy-MM-dd hh:mm:ssa"),
        "nation": casinoOdds?.runnerName,
        "section":"casino",
        "roundId": data?.mid,
        "sid": "1"
      };
      placingBet(
        { data: bettingData },
        {
          onSuccess: () => {
            isPlacingBet.current = false; // Reset flag after success
          },
          onError: () => {
            isPlacingBet.current = false; // Reset flag after failure
          }
        }
      );
      setCasinoBetOdds({...casinoOdds,odds:0})
      showToasterMessage({ messageType: "success", description: "Bet placed successfully" });
    };
    
    // Handle bet confirmation
    const handleConfirmBet = () => {
      if ( isPlacingBet.current) return; // Prevent duplicate triggers
    
      const canPlaceBet = checkBetCondition();
      if (!canPlaceBet) return;
    
      // setBetProcessed(true);
      setTimer(2);
    
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 0) {
            clearInterval(intervalRef.current!);
            if (!isPlacingBet.current) {
              placeBet();
            }
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    };
    
  return (
    <>
    <div className="sidebar-box place-bet-container">
      <div className="sidebar-title">
        <h4>Place Bet</h4>
        {/* <span>Range: 100 to 3L</span> */}
      </div>
      <div className="place-bet-box andarbg andarbg3">
        <div className="place-bet-box-header">
          <div className="place-bet-for">(Bet for)</div>
          <div className="place-bet-odds">Odds</div>
          <div className="place-bet-stake">Stake</div>
          <div className="place-bet-profit">Profit</div>
        </div>
        <div className="place-bet-box-body">
          <div className="place-bet-for">
            <IoIosClose fill="#FF0000" size={20}/>
          
            <span>{casinoOdds?.runnerName}</span>
          </div>
          <div className="place-bet-odds">
            <input type="text" className="form-control" value={casinoOdds?.odds}/>
          </div>
          <div className="place-bet-stake">
            <input type="number" className="form-control" value={sum} />
          </div>
          <div className="place-bet-profit"></div>
        </div>
        <div className="place-bet-buttons">
            {
                [25,50,100,200,500,100].map((val,i)=>{
                    return(
<button  onClick={()=>{
  setSum((item)=>item+val);
}} className="btn btn-place-bet">+{val}</button>
                    )
                })
            }
          
       
          <button className="btn btn-sm btn-link text-dark flex-fill text-end" onClick={()=>setSum(0)}>
            clear
          </button>
        </div>
        <div className="place-bet-action-buttons">
          <div>
            <button className="btn btn-info">Edit</button>
          </div>
          <div>
            <button className="btn btn-danger me-1" >Reset</button>
            <button className="btn btn-success" onClick={()=>handleConfirmBet()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
});

export default CasinoBettingWindow;
