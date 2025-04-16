import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
import BetSlip from "../../../common/BettingWindow/betSlip";
import { useCurrentBetsData } from "../../../../Framework/placeBet";
import { Modal } from "antd";
import BettingWindowModal from "../../../modals/bettingWindowModal";
import { useBetting } from "../../../../context/bettingContext";
import BettingWindow from "../../../common/BettingWindow";
import useWindowWidth from "../../../common/windowWidth";

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
  const {  betWindow, setBetWindow } = useUI();
  const width = useWindowWidth();
  const {betOdds,setMatchedBets} = useBetting()
  const [prevData, setPrevData] = useState<DataItem[]>([]);
  const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
  const { data: allBets } = useCurrentBetsData();
  const [isModalOpen, setIsModalOpen] = useState(false);

 console.log(width,"please check");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const LayBack = ({item,price,size,className='',eventKey,betType,index,sizeKey}:any)=>{
    const isBlinking =
    blinkFields[index]?.[eventKey] || blinkFields[index]?.[sizeKey];

    return(
      <div className={`market-odd-box ${className} ${isBlinking ? "blink" : ""}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min});
        if(width<1200){
          setIsModalOpen(true);

        }
      }}
      >
      <span className="market-odd">{price}</span>
      <span className="market-volume">{size}</span>
    </div>
    )
  }

 
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
  
      // Update prevData for next comparison
      setPrevData([...data]);
  
      const timeout = setTimeout(() => {
        setBlinkFields(data.map(() => ({})));
      }, 1000);
  
      return () => clearTimeout(timeout);
    } else if (data) {
      setPrevData([...data]);
    }
  }, [data]);

 
  const minmax = (data||[])[0]
  console.log(allBets, "BetWindow");
  return (
    <div className="game-market market-4 ">
      <div className="market-title">
        <span>MATCH_ODDS</span>
        <button className="btn btn-success btn-sm">Cashout</button>
      </div>
      <div className="market-header">
        <div className="market-nation-detail">
          <span className="market-nation-name">Max: {minmax?.max}</span>
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
            <LayBack item={item} index={i} price={item?.BackPrice2} size={item?.BackSize2} eventKey="BackPrice2" sizeKey="BackSize2" betType ="back"  className="back2"/>
            <LayBack item={item} index={i} price={item?.BackPrice3} size={item?.BackSize3} eventKey="BackPrice3" sizeKey="BackSize3" betType ="back" className="back1"/>
            <LayBack item={item} index={i} price={item?.BackPrice1} size={item?.BackSize1} eventKey="BackPrice1" sizeKey="BackSize1" betType ="back" className="back"/>
            <LayBack item={item} index={i} price={item?.LayPrice1} size={item?.LaySize1} eventKey="LayPrice1" sizeKey="LaySize1" betType ="lay" className="lay"/>
            <LayBack item={item} index={i} price={item?.LayPrice2} size={item?.LaySize2} eventKey="LayPrice2" sizeKey="LaySize2" betType ="lay" className="lay1"/>
            <LayBack item={item} index={i} price={item?.LayPrice3} size={item?.LaySize3} eventKey="LayPrice3" sizeKey="LaySize3" betType ="lay" className="lay2"/>

           
          </div>)
        })
      }
      </div>
      {
        width<1200 ? <Modal closeIcon={false} footer={null} title={
          <div className="modal-header"><div className="modal-title h4">Place Bet</div><button type="button" onClick={()=>setIsModalOpen(false)} className="btn-close" aria-label="Close"></button></div>
        } open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
         <BettingWindowModal/>
        </Modal>:""
      }
      
    </div>
  );
};

export default MatchOddBookmaker;
