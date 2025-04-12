import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import BettingBtns from "./bettingBtns";
import { Result } from "antd";
import { useUI } from "../../../../../context/ui.context";
import BetSlip from "../../../../common/BettingWindow/betSlip";

interface Props {
  data: any;
}
interface DataItem {
  RunnerName: string;
  status: string;
  title: string;
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
}

// Type to track which fields should blink
type BlinkState = Record<string, boolean>;
const RacingBet: React.FC<Props> = ({ data }) => {
  const { setMatchedBets, betOdds } = useUI();
  const [betwindow, setBetWindow] = useState(-1);

  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
  const LayBack = ({item,price,size,className='',eventKey,betType}:any)=>{
    
    return(
      <div className={`market-odd-box ${className}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "odd",time: data?.update_time,min: item?.min})
      }}
      >
      <span className="market-odd">{price}</span>
      <span className="market-volume">{size}</span>
    </div>
    )
  }
  useEffect(() => {
    if (data && prevData.length === (data?.data || []).length) {
      let newBlinkFields = (data?.data || []).map(
        (item: any, index: number) => {
          let changes: BlinkState = {};

          Object.keys(item).forEach((key) => {
            if (
              item[key as keyof DataItem] !==
              prevData[index]?.[key as keyof DataItem]
            ) {
              changes[key] = true;
            } else {
              changes[key] = false;
            }
          });

          return changes;
        }
      );

      setBlinkFields(newBlinkFields);

      // Reset blinking effect after 1 second
      setTimeout(() => {
        setBlinkFields((data?.data || []).map(() => ({})));
      }, 6000);
    }

    if (data?.data) {
      setPrevData([...data?.data]); // Store a new reference to avoid shallow comparison issues
    }
  }, [data]);
  return (
   
    <>
      <div className="horse-banner">
            <img src="/assets/images/racing.png" className="img-fluid" />
            <div className="horse-banner-detail">
              <div className="text-success">{data?.status === 'active' ? 'OPEN' : 'SUSPENDED'}</div>
              <div className="time-detail">
                <p>{data?.title}</p>
               
                <h5>
                  <span>{data?.time}</span>
                  <span>| </span>
                  <span>{data?.race_card}</span>
                </h5>
              </div>
            </div>
          </div>
    <div className="game-market market-12">
      <div className="market-title">
        <span>MATCH_ODDS</span>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">Max: 50K</span>
        </div>
        <div className="market-odd-box no-border d-none d-md-flex"></div>
        <div className="market-odd-box no-border d-none d-md-flex"></div>
        <div className="market-odd-box back">
          <b>Back</b>
        </div>
        <div className="market-odd-box lay">
          <b>Lay</b>
        </div>
        <div className="market-odd-box d-none d-md-flex"></div>
        <div className="market-odd-box no-border d-none d-md-flex"></div>
      </div>
      <div className="market-body" data-title="OPEN">
       
     {
      (data?.data||[]).filter((val:any)=>!(val?.nation === '-')).map((item:any,i:number)=>{
        return(
          <div className={`market-row ${item?.result ? 'suspended-row':''}`} data-title={item?.result ? item?.result : "ACTIVE"}>
          <div className="market-nation-detail ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="checkbox-runner-0"
                id="checkbox-runner-0"
                value='{"mid":6711702512271,"sid":732600,"tno":0}'
              />
              <label className="form-check-label">
                {/* <div>
                  1<br />
                  (2)
                </div> */}
                {/* <div>
                  <img src="https://sitethemedata.com/race_icons/6711702512271/732600.jpg" />
                </div> */}
                <div>
                  <span className="market-nation-name">
                    <span>{item?.nation}</span>
                    
                  </span>
                  
                </div>
              </label>
            </div>
          </div>
          <LayBack item={item} price={item?.b2_price} size={item?.b2_size} eventKey="b2_price" betType ="back"  className="back2  d-none d-md-flex "/>
          <LayBack item={item} price={item?.b1_price} size={item?.b1_size} eventKey="b1_price" betType ="back"  className="back1  d-none d-md-flex "/>
          <LayBack item={item} price={item?.b_price} size={item?.b_size} eventKey="b_price" betType ="back"  className="back"/>
          <LayBack item={item} price={item?.l_price} size={item?.l_size} eventKey="l_price" betType ="lay"  className="lay"/>
          <LayBack item={item} price={item?.l2_price} size={item?.l2_size} eventKey="l2_price" betType ="lay"  className="lay2 d-none d-md-flex "/>
          <LayBack item={item} price={item?.l1_price} size={item?.l1_size} eventKey="l1_price" betType ="lay"  className="lay1 d-none d-md-flex "/>
       
        </div>
        )
      })
     }
      </div>
    </div>
    </>
  );
};

export default RacingBet;
