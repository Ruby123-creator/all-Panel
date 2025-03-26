import React from "react";
 interface Props{
data:any
}
const Teen120 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const playerInfo = data?.t1
  return (
    <div className="casino-table onecard20">
      <div className="casino-table-full-box">
        {
         (playerInfo||[])?.map((item:any,i:number)=>{
          return(
<div className={`onecard20oddbox onecard20${(item?.nat||"").toLowerCase()}`}>
          <div className="casino-odds text-center">{item?.bp}</div>
          <div className="casino-odds-box back casino-odds-box-theme">
            <span className="casino-odds">{item?.nat}</span>
          </div>
          <div className="casino-nation-book text-center"></div>
        </div>
          )
         })
        }
        
       
      </div>
    </div>
  );
};

export default Teen120;
