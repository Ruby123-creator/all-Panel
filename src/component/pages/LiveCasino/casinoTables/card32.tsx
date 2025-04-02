import React from "react";
interface Props{
  data?:any;
}
const Card32:React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const playerInfo = data?.t1;
  return (
    <div className="casino-table cards32a">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            {
              (playerInfo||[]).slice(0,2).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row ">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className={`casino-odds-box back ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                </div>
                )
              })
            }
           
           
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header d-none d-md-flex">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
          {
              (playerInfo||[]).slice(2).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row ">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className={`casino-odds-box back ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div className={`casino-odds-box lay ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card32;
