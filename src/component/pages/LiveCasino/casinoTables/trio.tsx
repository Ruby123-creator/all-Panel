import React from "react";
import { FaInfoCircle } from "react-icons/fa";

interface Props{
  data?:any;
}

const Trio :React.FC<Props> = ({data}) => {
  const cardsInfo =  data?.t1||[]
  console.log(data,"CHECK")
  return (
    <div className="casino-table trio">
      <div className="casino-table-box">
        {
          (cardsInfo||[]).slice(0,3).map((item:any,i:number)=>{
            return(
<div className="casino-odd-box-container">
          <div className="casino-nation-name pointer">
            {item?.nat} {i===0 ? <FaInfoCircle/>: ""} 
          </div>
          <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.bp}</span>
            <span className="casino-volume">{item?.bs}</span>
          </div>
          <div className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.lp}</span>
            <span className="casino-volume">{item?.ls}</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
            )
          })
        }
        
        
      </div>
      <div className="casino-table-box triocards mt-3">
      {
          (cardsInfo||[]).slice(3,7).map((item:any,i:number)=>{
            return(
<div className="casino-odd-box-container">
          <div className="casino-nation-name">
            {item?.nat}
          </div>
          <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.bp}</span>
          
          </div>
          <div className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.lp}</span>
       
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
            )
          })
        }
       
      </div>
      <div className="casino-table-box trioodds mt-3">
      {
          (cardsInfo||[]).slice(7).map((item:any,i:number)=>{
            return(
<div className="casino-odd-box-container">
          <div className="casino-nation-name">
            {item?.nat}
          </div>
          <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.bp}</span>
          
          </div>
         
          <div className="casino-nation-book text-center w-100"></div>
        </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Trio;
