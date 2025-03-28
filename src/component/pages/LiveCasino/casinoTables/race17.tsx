import React from "react";
interface Props{
  data?:any;
}
const Race17 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const playersInfo = data?.t1||[]
  return (
    <div className="casino-table raceto17">
      <div className="casino-table-box">
        {
          (playersInfo||[]).map((item:any,i:number)=>{
            return(
              <div className="casino-odd-box-container">
              <div className="casino-nation-name">{item?.nat}</div>
              <div className={`casino-odds-box back ${(item?.status === "suspended"||item?.gstatus === "suspended") ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp||item?.b1}</span>
              </div>
              <div className={`casino-odds-box lay ${(item?.status === "suspended"||item?.gstatus=== "suspended") ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.lp||item?.l1}</span>
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

export default Race17;
