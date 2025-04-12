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
  const {userData,stacks,setStacks} = useUI();
  console.log(casinoOdds,"Matching")
    const { data:ipAddress} = useIPDetails();
   const { mutate: placingBet, isError: error } = usePlaceCasinoBet();
   const { data } = useTableCardsFixture(val);
    const [sum, setSum] = useState<number>(0);
    const [edit, setEdit] = useState<boolean>(false);
  const [values, setValues] = useState(stacks)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
          const updatedStacks = stacks.map((item: any, i: number) => (i === index ? Number(e.target.value) : item));
          setValues(updatedStacks);
        };
     console.log(data,"MINKAKIIII");
     const getEventData = () =>{
        const casinoTableData = data[`${casinoOdds?.eventKey}`]
        const val =  (casinoTableData||[]).find((item:any)=>item?.nat === casinoOdds?.runnerName);
        return val;
     }

     
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

     if(checkCurrentBet?.status === "SUSPENDED"||checkCurrentBet?.status==="suspended"){
      showToasterMessage({messageType:"error",description:"Bet Suspended or odds invalid"})
     }

   
  
     
  
  
      
      
    
  
  
     
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
    const  checkCurrentBet = getEventData();
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
        "ip": ipAddress?.ip,
        "exposure": calculateProfitLoss()?.exposure,
        "time": format(now, "yyyy-MM-dd hh:mm:ssa"),
        "nation": casinoOdds?.runnerName,
        "section":"casino",
        "roundId": data?.mid,
        "sid":checkCurrentBet?.sid
      };
      placingBet(
        { data: bettingData },
        {
          onSuccess: () => {
            isPlacingBet.current = false; // Reset flag after success
            setCasinoBetOdds({...casinoOdds,odds:0});
            setSum(0);
      showToasterMessage({ messageType: "success", description: "Bet placed successfully" });

          },
          onError: (error) => {
            isPlacingBet.current = false; // Reset flag after failure
      showToasterMessage({ messageType: "error", description: error.message });

          }
        }
      );
     
    };
    
    // Handle bet confirmation
    const handleConfirmBet = () => {
      if ( isPlacingBet.current) return; // Prevent duplicate triggers
    
      const canPlaceBet = checkBetCondition();
      if (!canPlaceBet) return;
    
      placeBet();

     
    };
    
  return (
    <>
    {
      casinoOdds?.odds ? <div className="sidebar-box place-bet-container">
      <div className="sidebar-title">
        <h4>Place Bet</h4>
        {
          casinoOdds?.min ?         <span>Range: {casinoOdds?.min} to {casinoOdds?.max}</span>
          :''
        }
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
        {
          edit ? (
            <div className="container p-2 d-flex flex-wrap gap-2" style={{ maxWidth: "400px" }}>
      {(values||[]).map((val: any, i: number) => (
        <div key={"stackAmount" + i} className="d-flex align-items-center" style={{width:"20%"}}>
         <input
              type="number"
              value={val}
              onChange={(e) => handleInputChange(e, i)}
             
              className="stack-btns form-control rounded-1"
            />
        </div>
      ))}
     
    </div>
          ) : (  <div className="place-bet-buttons">

            {
                (values).map((val:number,i:number)=>{
                    return(
<button key={"stackAmountVal" + i}  onClick={()=>{
  setSum((item)=>item+val);
}} className="btn btn-place-bet">{val}</button>
                    )
                })
            }
          
       
          <button className="btn btn-sm btn-link text-dark flex-fill text-end" onClick={()=>setSum(0)}>
            clear
          </button>
        </div>)
        }
      
        <div className="place-bet-action-buttons">
          <div>
            {
              edit ?  <button className="btn btn-info" onClick={()=>{ setStacks(values)
                 setEdit(false)}}>Update</button>: <button className="btn btn-info" onClick={()=>setEdit(true)}>Edit</button>
            }
           
          </div>
          <div>
            <button className="btn btn-danger me-1" onClick={()=>{setCasinoBetOdds({...casinoOdds,odds:0})}}>Reset</button>
            <button className="btn btn-success" disabled={!sum||isPlacingBet?.current} onClick={()=>handleConfirmBet()}>Submit</button>
          </div>
        </div>
      </div>
    </div>:""
    }
    
    
    </>
  );
});

export default CasinoBettingWindow;
