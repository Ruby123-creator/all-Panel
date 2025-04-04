import React, { useEffect, useRef, useState } from "react";
import { useUI } from "../../../context/ui.context";
import EditStack from "./editStacks";
import { Modal } from "antd";
import { CiStopwatch } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useSportDetailsById, useCricketFancyData } from "../../../Framework/sportsData";
import { fetchIPAdress, useAdminDetails, useIPDetails } from "../../../Framework/login";
import { checkTimeDifference, extractDetails, extractEventDetails, showToasterMessage } from "../../../Framework/utils/constant";
import { usePlaceBet } from "../../../Framework/placeBet";
import { format, isToday, isTomorrow, parse } from "date-fns";
import { useCurrentBetsData } from "../../../Framework/placeBet";

interface BetOdds {
  betType: string;
  runnerName: string;
  key: string;
  odds: string;
  type: "back" | "lay";
  time: string;
}

interface EventData {
  RunnerName: string;
  [key: string]: any; // Allow dynamic keys
}

interface UserData {
  status: string;
  Balance: number;
  ExposureLimit: number;
  UserName: string;
}

const BetSlip: React.FC = () => {
  const { betOdds, stacks ,setMatchedBets,userData,setStacks} = useUI();
  const { sport, eventId }: any = useParams();
   const [val,setValue] = useState('');

   const [values, setValues] = useState(stacks)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
       const updatedStacks = stacks.map((item: any, i: number) => (i === index ? Number(e.target.value) : item));
       setValues(updatedStacks);
     };
   useEffect(()=>{
     
     if(sport === 'horseRacing_racecard'){
      setValue("racecard") 
     }else if(sport === 'greyhound_racecard'){
       setValue("racecard/greyhound") 
       
     }
     else{
       setValue(sport);
     }
    },[sport])
      const {data,isLoading,isError} = useSportDetailsById({id:eventId,sport:val});
     console.log(userData,"gfdsfdgsdfg");
  const {data:fancyData} = useCricketFancyData(eventId);
  const { data:ipAddress} = useIPDetails();
  const { mutate: placingBet, isError: error } = usePlaceBet();
  
  const [sum, setSum] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [betProcessed, setBetProcessed] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(2);
 
   
   const getEventData = () =>{
    let eventData: EventData[] =[]; 
         if(sport === "greyhound_racecard" || sport === "horseRacing_racecard"){
            eventData = data?.data;
           
         }
         else{
            if(betOdds?.betType === "session"){
              eventData = fancyData?.session;
            }
            else{
              if(betOdds?.betType === "odd"){
                 eventData = ((data?.market||[])[0])?.events;
              }
              else{
                
                eventData = data?.bookmaker;
               
              }
            }
         }

         return eventData;
   }
  // const eventData = betOdds?.betType === "session" ? fancyData?.session as EventData[] :(betOdds?.betType === "odd" ? ((matchData||[])[0]?.events) as EventData[]:matchData as EventData[]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
   
  const isPlacingBet = useRef(false); // Track ongoing API request

   
  const checkBetCondition = (): boolean => {
    
    const checkCurrentBet = (getEventData()||[])?.find((item) => (item?.RunnerName === betOdds?.runnerName||item?.nation === betOdds?.runnerName));
   console.log(checkCurrentBet,"CUrrent")
   console.log(userData,betOdds,checkCurrentBet,getEventData(),sum,"BETDONE")
    if (!userData || !betOdds || !checkCurrentBet) return false;
    if(!(Object.keys(userData||{})?.length)){
      showToasterMessage({ messageType: "error", description: "LOGIN WITH REALID" });
      return false;
    }
    // Check user status and balance
    if (userData.status === "deactive" || (Number(userData?.Balance)-Number(Math.abs(userData?.Exposure))) < sum ) {
      showToasterMessage({ messageType: "error", description: "LOW BALANCE" });
      return false;
    }
      
    if((sum<Number(betOdds?.min))|| sum>Number(calculateMaxAmount(betOdds?.max)) || sum<100){
      showToasterMessage({ messageType: "error", description: "INVALID BET AMOUNT" });
      return false;
    }
  
    // Check odds validity
    const currentOdds = parseFloat(checkCurrentBet[`${betOdds?.key}`]);
    const betOddsValue = parseFloat(betOdds.odds);
     const currentsize = parseFloat(checkCurrentBet[`${betOdds?.sizeKey}`])

   

    if(betOdds?.betType === 'session'){
        if(Number(betOdds?.size) !== Number(currentsize)){
          showToasterMessage({ messageType: "error", description: "size invalid" });

          return false;
        }

        if((betOdds.type === "lay" && currentOdds < betOddsValue) ||
        (betOdds.type === "back" && currentOdds > betOddsValue)){
          showToasterMessage({ messageType: "error", description: "Odds invalid" });

          return false;
        }
    }

    
    else{
      if (
        (betOdds.type === "lay" && currentOdds > betOddsValue) ||
        (betOdds.type === "back" && currentOdds < betOddsValue) || (checkCurrentBet?.status === "SUSPENDED" || (checkCurrentBet?.status === "Ball Running"))
      ) {
        showToasterMessage({ messageType: "error", description: "Odds invalid" });
        return false;
      }
    }
    // Check timeout condition
    // const updatedTime = (betOdds.time||"").replace(" ", "T"); // Convert to ISO format
    // const isWithin10Seconds = checkTimeDifference(updatedTime);
  
    // if (!isWithin10Seconds) {
    //   showToasterMessage({ messageType: "error", description: "Timeout" });
    //   return false;
    // }

    const givenTimestamp = ( data?.update_time) * 1000;

    // Format the date
    const formattedDate = data?.update_time ?  format(new Date(givenTimestamp||""), 'yyyy-MM-dd HH:mm:ss'): data?.updateTime;
    const time =  (formattedDate||"").replace(" ", "T"); // Convert to ISO format
    

// Current timestamp

    const isWithin10Second = checkTimeDifference(time);
  
    if (!isWithin10Second) {
      showToasterMessage({ messageType: "error", description: "data Timeout!!" });
      return false;
    }
  
    return true; // All conditions are valid
  };
    const calculateProfitLoss = (type:string)=>{

      if(type === "session"){
          return(
            (Number(betOdds.size) * (sum))/100
          )
      }
      else if( type === "bookmaker"){
        return(
          (Number(betOdds.odds) * sum)/100
        )  
      }
      else{
         return ( Number(betOdds.odds) * (sum) - (sum));  
      }

    }
    
  // Helper function to place a bet
  const placeBet = () => {
    if (isPlacingBet.current) return; // Prevent duplicate API calls
  isPlacingBet.current = true; // Set flag
    if (!userData || !betOdds || !data) return;
    const checkCurrentBet = (getEventData()||[])?.find((item) => (item?.RunnerName === betOdds?.runnerName||item?.nation === betOdds?.runnerName));
    const eventInfo = extractDetails(checkCurrentBet?.title)
     console.log(eventInfo,"eventsss","fitnesss")
    const now = new Date();
    setBetProcessed(false);

    const bettingData = {
      userName: userData.UserName,
      eventName: `${eventInfo?.team1} v ${eventInfo?.team2}` ,
      profitloss: betOdds?.type === "back" ? calculateProfitLoss(betOdds?.betType) : sum,
      betTypes: betOdds?.type,
      amount: sum,
      placeDate: format(now, "yyyy-MM-dd hh:mm:ssa"),
      MatchDate: eventInfo?.date,
      accountType: "User",
      userRate: betOdds?.odds,
      ip: ipAddress?.ip, // IP address
      exposure:  betOdds?.type === "back" ? sum :calculateProfitLoss(betOdds?.betType),
      time: format(now, "yyyy-MM-dd hh:mm:ssa"),
      gameid: eventId,
      evetsType: betOdds?.betType,
      nation: betOdds?.runnerName,
      section: sport === "greyhound_racecard"? "greyhound" : sport === "horseRacing_racecard" ? "horserace" : sport,
      bhav: betOdds?.size
    };
    placingBet(
      { data: bettingData, sport },
      {
        onSuccess: () => {
          isPlacingBet.current = false; // Reset flag after success
        },
        onError: () => {
          isPlacingBet.current = false; // Reset flag after failure
        }
      }
    );
    setMatchedBets({...betOdds,odds:0,amount:0})
    showToasterMessage({ messageType: "success", description: "Bet placed successfully" });
  };
  
  // Handle bet confirmation
  const handleConfirmBet = () => {
    if (betProcessed || isPlacingBet.current) return; // Prevent duplicate triggers
  
    const canPlaceBet = checkBetCondition();
    if (!canPlaceBet) return;
  
    setBetProcessed(true);
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
  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(Number(e.target.value));
  };

  // Helper function to handle stack button click
  const handleStackClick = (val: number) => {
    setSum((prevSum) => Number(prevSum) + val);
   
  };


  return (
    <>
    <div className="place-bet-box-body">
          <div className="place-bet-for">
            <span>{betOdds?.runnerName}</span>
          </div>
          <div className="place-bet-odds">
            <input type="text" className="form-control" value={betOdds?.odds} />
           
          </div>
          <div className="place-bet-stake">
            <input type="number" className="form-control" value={sum||betOdds?.amount} onChange={(e)=>handleStakeChange(e)}/>
          </div>
          <div className="place-bet-profit"> { (calculateProfitLoss(betOdds?.betType)||0).toFixed(2)  }</div>
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
               (stacks||[]).map((val:number,i:number)=>{
                return(
                  <button className="btn btn-place-bet" onClick={()=>{
                         handleStackClick(val);
                  }}>{val}</button>
  
                )
               }) 
            }
            
            <button className="btn btn-sm btn-link text-dark flex-fill text-end" onClick={()=>{
              setMatchedBets({...betOdds,amount:0});
            }}>
              clear
            </button>
          </div>)
        }
      
        <div className="place-bet-action-buttons">
          <div>
            {
              edit ? 
            <button className="btn btn-info" onClick={()=>{
              setEdit(false)
            setStacks(values)
            }}>Update</button>
:
<button className="btn btn-info" onClick={()=>setEdit(true)}>Edit</button>

            }
          
            </div>
          <div>
            <button className="btn btn-danger me-1" onClick={()=>setMatchedBets({})}>Reset</button>
            <button className="btn btn-success" onClick={()=>handleConfirmBet()}>Submit</button>
          </div>
        </div>
        <div className="LoaderModal" style={{widows:"200px"}}>
        <Modal open={betProcessed} footer={null} closable={false} centered>
      <div className="bet-loader text-center p-4">
        <div className="bet-div">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <div className="loader"></div>
            <span className="fw-semibold position-absolute text-primary">
              {Number(timer)}
            </span>
          </div>
          <p className="fw-semibold mt-2">Your bet is being processed...</p>
          <p className="fw-semibold text-muted">Please wait...</p>
        </div>
      </div>
    </Modal>
        </div>
       
    </>
   
  );
};

export default BetSlip;
