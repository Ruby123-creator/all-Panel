import React from "react";
import { useUI } from "../../../../context/ui.context";

interface DataItem {
  RunnerName: string;
  status: string;
  max: string;
  min: number;
  BackPrice1: string;
  BackPrice2: string;
  BackPrice3: string;
  BackSize1: string;
  BackSize2: string;
  BackSize3: string;
  LayPrice1: string;
  LayPrice2: string;
  LayPrice3: string;
  LaySize1: string;
  LaySize2: string;
  LaySize3: string;
  updateTime?: string;
}
interface Props {
  data: DataItem[];
  updatedTime: string;
}
const BookmakerComp: React.FC<Props> = ({ data, updatedTime }) => {
  const {setMatchedBets,betOdds} = useUI();
  const LayBack = ({item,price,size,className='',eventKey,betType}:any)=>{
    
    return(
      
      <div className={`market-odd-box ${className}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "bookmaker",time:updatedTime,min: item?.min})
      }}
      >
      <span className="market-odd">{price}</span>
      <span className="market-volume">{size}</span>
    </div>
    )
  }
  return (
    <div className="game-market market-2 ">
      <div className="market-title">
        <span>Bookmaker IPL CUP</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">Min: 100&nbsp; Max: 50K</span>
        </div>
        <div className="market-odd-box back">
          <b>Back</b>
        </div>
        <div className="market-odd-box lay">
          <b>Lay</b>
        </div>
      </div>
      <div className="market-body " data-title="SUSPENDED">
     
        {
            (data||[]).map((item,i)=>{
                return(
                    <div className={`market-row ${item?.status === "SUSPENDED" ? "suspended-row":""}`} data-title={item?.status}>
                    <div className="market-nation-detail">
                      <span className="market-nation-name">{item?.RunnerName}</span>
                      <div className="market-nation-book"></div>
                    </div>
                    <LayBack item={item} price={item?.BackPrice1} size={item?.BackSize1} eventKey="BackPrice1" betType ="back"  className="back"/>
                    <LayBack item={item} price={item?.LayPrice1} size={item?.LaySize1} eventKey="LayPrice1" betType ="lay"  className="lay"/>
                   
                  </div>
                )
            })
        }
       
       
      </div>
      <div className="market-row">
        <p className="market-remark">
          Play World's Fastest Football Game GOAL, Started In Our Exchange!
        </p>
      </div>
    </div>
  );
};

export default BookmakerComp;
