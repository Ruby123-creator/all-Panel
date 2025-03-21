import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
import BetSlip from "../../../common/BettingWindow/betSlip";
import { useCurrentBetsData } from "../../../../Framework/placeBet";

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
  updateTime: string;
}

type BlinkState = Record<string, boolean>;

interface Props {
  data: DataItem[];
  updatedTime: string;
}

const MatchOddBookmaker: React.FC<Props> = ({ data, updatedTime }) => {
  const { betOdds, betWindow, setBetWindow ,setMatchedBets} = useUI();
  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
  const { data: allBets } = useCurrentBetsData();
  const LayBack = ({item,price,size,className='',eventKey,betType}:any)=>{
    
    return(
      <div className={`market-odd-box ${className}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min})
      }}
      >
      <span className="market-odd">{price}</span>
      <span className="market-volume">{size}</span>
    </div>
    )
  }

  const calculateProfitLoss = (type: string) => {
    if (type === "session") {
      return ((Number(betOdds.size) * betOdds?.amount) / 100).toFixed(2);
    } else if (type === "bookmaker") {
      return ((Number(betOdds.odds) * betOdds?.amount) / 100).toFixed(2);
    } else {
      return (Number(betOdds.odds) * betOdds?.amount - betOdds?.amount).toFixed(
        2
      );
    }
  };
  // Helper function to compare previous and current data
  const getBlinkFields = (
    currentData: DataItem[],
    previousData: DataItem[]
  ): BlinkState[] => {
    return currentData.map((item, index) => {
      const changes: BlinkState = {};
      Object.keys(item).forEach((key) => {
        changes[key] =
          item[key as keyof DataItem] !==
          previousData[index]?.[key as keyof DataItem];
      });
      return changes;
    });
  };

  useEffect(() => {
    if (data && prevData.length === data.length) {
      const newBlinkFields = getBlinkFields(data, prevData);
      setBlinkFields(newBlinkFields);

      // Reset blinking effect after 1 second
      const timeout = setTimeout(() => {
        setBlinkFields(data.map(() => ({})));
      }, 1000);

      return () => clearTimeout(timeout);
    }

    if (data) {
      setPrevData([...data]);
    }
  }, [data]);

  // Helper function to render LayBack components
  // const renderLayBack = (
  //   title: string,
  //   item: DataItem,
  //   type: "back" | "lay",
  //   priceKey: keyof DataItem,
  //   sizeKey: keyof DataItem,
  //   className: string,
  //   index: number
  // ) => {
  //   const price = item[priceKey] as string;
  //   const size = item[sizeKey] as string;
  //   const isBlinking =
  //     blinkFields[index]?.[priceKey] || blinkFields[index]?.[sizeKey];

  //   return (
  //     <LayBack
  //       val={price}
  //       size={size}
  //       max={item.max}
  //       type={type}
  //       eventKey={priceKey}
  //       runnerName={item.RunnerName}
  //       time={updatedTime}
  //       betType={title}
  //       allowed={true}
  //       betTrue={true}
  //       min={Number(item?.min)}
  //       className={`${className} ${isBlinking ? "blink" : ""}`}
  //     />
  //   );
  // };

  // const setMatchOddsValues = ()=>{
  //   setMatchedBets({ ...betOdds, odds: val, max: max, runnerName,key:eventKey ,type,betType: betType === "Bookmaker" ? "bookmaker":"odd",time,min})
  // }
  console.log(allBets, "BetWindow");
  return (
    <div className="game-market market-4 ">
      <div className="market-title">
        <span>MATCH_ODDS</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">Max: 1L</span>
        </div>
        <div className="market-odd-box no-border d-none d-md-block"></div>
        <div className="market-odd-box no-border d-none d-md-block"></div>
        <div className="market-odd-box back">
          <b>Back</b>
        </div>
        <div className="market-odd-box lay">
          <b>Lay</b>
        </div>
        <div className="market-odd-box"></div>
        <div className="market-odd-box no-border"></div>
      </div>
     
      <div className="market-body " data-title="OPEN">
       
      {
        (data||[]).map((item,i)=>{
          return( <div className="market-row " data-title="ACTIVE">
            <div className="market-nation-detail">
              <span className="market-nation-name">{item?.RunnerName}</span>
              <div className="market-nation-book"></div>
            </div>
            <LayBack item={item} price={item?.BackPrice2} size={item?.BackSize2} eventKey="BackPrice2" betType ="back"  className="back2"/>
            <LayBack item={item} price={item?.BackPrice3} size={item?.BackSize3} eventKey="BackPrice3" betType ="back" className="back1"/>
            <LayBack item={item} price={item?.BackPrice1} size={item?.BackSize1} eventKey="BackPrice1" betType ="back" className="back"/>
            <LayBack item={item} price={item?.LayPrice1} size={item?.LaySize1} eventKey="LayPrice1" betType ="lay" className="lay"/>
            <LayBack item={item} price={item?.LayPrice2} size={item?.LaySize2} eventKey="LayPrice2" betType ="lay" className="lay1"/>
            <LayBack item={item} price={item?.LayPrice3} size={item?.LaySize3} eventKey="LayPrice3" betType ="lay" className="lay2"/>

           
          </div>)
        })
      }
      </div>
    </div>
  );
};

export default MatchOddBookmaker;
