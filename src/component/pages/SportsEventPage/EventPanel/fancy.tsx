import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCricketFancyData } from "../../../../Framework/sportsData";
import { useUI } from "../../../../context/ui.context";
import BetSlip from "../../../common/BettingWindow/betSlip";
import { CiStopwatch } from "react-icons/ci";
import { useCurrentBetsData } from "../../../../Framework/placeBet";
import { useBetting } from "../../../../context/bettingContext";
import useWindowWidth from "../../../common/windowWidth";
import { Modal } from "antd";
import BettingWindowModal from "../../../modals/bettingWindowModal";
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
const FancyComp: React.FC = () => {
  const { sport, eventId }: any = useParams();
  const width = useWindowWidth();
  const { setMatchedBets, betOdds } = useBetting();
  const { data: currentBets } = useCurrentBetsData();
  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
  const { data } = useCricketFancyData(eventId);
   const [isModalOpen, setIsModalOpen] = useState(false);
  
   console.log(width,"please check");
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
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
    if (data?.session && prevData.length === (data?.session).length) {
      const newBlinkFields = getBlinkFields(data?.session, prevData);
      setBlinkFields(newBlinkFields);
  
      // Update prevData for next comparison
      setPrevData([...(data?.session)]);
  
      const timeout = setTimeout(() => {
        setBlinkFields((data?.session).map(() => ({})));
      }, 1000);
  
      return () => clearTimeout(timeout);
    } else if (data?.session) {
      setPrevData([...data?.session]);
    }
  }, [data?.session]);

  console.log(data);
  const LayBack = ({item,price,size,className='',eventKey,betType,sizeKey,index}:any)=>{
    const isBlinking =
    blinkFields[index]?.[eventKey] || blinkFields[index]?.[sizeKey];
    return(
      
      <div className={`market-odd-box ${className} ${isBlinking ? "blink" : ""}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "session",time: data?.updateTime,min: item?.min ,size:size,sizeKey:sizeKey})
      setIsModalOpen(true);
      }}
      >
      <span className="market-odd">{price}</span>
      <span className="market-volume">{size}</span>
    </div>
    )
  }
  return (
    
    <div style={{width:`${(data?.session || [])?.length===1 ?"100%":"100%"}`}} >
      {(data?.session || [])?.length ? (
        <div className="game-market market-6">
          <div className="market-title">
            <span>Normal</span>
        <button className="btn btn-success btn-sm">Cashout</button>

          </div>
          <div className="row row10">

            <div className="col-md-6">
           
              <div className="market-header">
                <div className="market-nation-detail"></div>
                {
              (data?.session || [])?.length===1 ? "" :<> <div className="market-odd-box lay">
              <b>No</b>
            </div>
            <div className="market-odd-box back">
              <b>Yes</b>
            </div></>
            }
               
                <div className="fancy-min-max-box"></div>
              </div>
            </div>
            <div className="col-md-6 d-none d-xl-block">
              <div className="market-header">
                <div className="market-nation-detail"></div>
                <div className="market-odd-box lay">
                  <b>No</b>
                </div>
                <div className="market-odd-box back">
                  <b>Yes</b>
                </div>
                <div className="fancy-min-max-box"></div>
              </div>
            </div>
          </div>
          <div className="market-body " data-title="OPEN">
           
            <div className="row row10">
              {(data?.session || []).map((item: any, i: number) => {
                return (
                  <div className={`${(data?.session || [])?.length === 1 ? 'col-md-12':'col-md-6'}`}>
                    <div className={`fancy-market ${(item?.GameStatus === "Ball Running"||item?.GameStatus === "SUSPENDED")? "suspended-row":""}`} data-title={item?.GameStatus}>
                      <div className="market-row">
                        <div className="market-nation-detail">
                          <span className="market-nation-name">
                            {item?.RunnerName}
                          </span>
                        </div>
                        <LayBack index={i} item={item} price={item?.LayPrice1} size={item?.LaySize1} eventKey="LayPrice1" betType ="lay"  className="lay" sizeKey={"LaySize1"}/>
            <LayBack index={i} item={item} price={item?.BackPrice1} sizeKey={"BackSize1"} size={item?.BackSize1} eventKey="BackPrice1" betType ="back"  className="back"/>
           
                       
                        <div className="fancy-min-max-box">
                          <div className="fancy-min-max">
                            <span className="w-100 d-block">
                              Min: {item?.min}
                            </span>
                            <span className="w-100 d-block">
                              Max: {item?.max}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
       {
        width<1200 ? <Modal closeIcon={false} footer={null} title={
          <div className="modal-header"><div className="modal-title h4">Place Bet</div><button type="button" onClick={()=>setIsModalOpen(false)} className="btn-close" aria-label="Close"></button></div>
        } open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <BettingWindowModal setIsModalOpen={setIsModalOpen}/>
        </Modal>:""
      }
    </div>
  );
};

export default FancyComp;
