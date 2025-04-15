import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
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
  updateTime?: string;
}
type BlinkState = Record<string, boolean>;
interface Props {
  data: DataItem[];
  updatedTime: string;
}
const BookmakerComp: React.FC<Props> = ({ data, updatedTime }) => {
  const {setMatchedBets,betOdds} = useBetting();
  const width = useWindowWidth();
    const [prevData, setPrevData] = useState<DataItem[]>([]);
    const [blinkFields, setBlinkFields] = useState<BlinkState[]>([]);
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
  
  const LayBack = ({item,price,size,className='',eventKey,betType,index,sizeKey}:any)=>{
    const isBlinking =
    blinkFields[index]?.[eventKey] || blinkFields[index]?.[sizeKey];
    return(
      
      <div className={`market-odd-box ${className} ${isBlinking ? "blink" : ""}`}
      onClick={()=>{
        setMatchedBets({ ...betOdds, odds: price, max: item?.max, runnerName:item?.RunnerName,key:eventKey ,type:betType,betType: "bookmaker",time:updatedTime,min: item?.min})
     setIsModalOpen(true);
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
                    <LayBack item={item} index={i} sizeKey={"BackSize1"} price={item?.BackPrice1} size={item?.BackSize1} eventKey="BackPrice1" betType ="back"  className="back"/>
                    <LayBack item={item} index={i} sizeKey={"LaySize1"} price={item?.LayPrice1} size={item?.LaySize1} eventKey="LayPrice1" betType ="lay"  className="lay"/>
                   
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

export default BookmakerComp;
