import React from "react";

interface Props{
  data?:any;
}
const Patti2 : React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const playerInfo = data?.t1;
  return (
    <div className="casino-table teenpatti2cards">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-body">
            {
              (playerInfo||[]).slice(0,3).map((item:any,i:number)=>{
                return(
                  <div className={`casino-table-row ${(item?.nat||"").includes('Baccarat') ? 'mini-baccarat':''}`}>
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  {
                    (item?.nat||"").includes('Baccarat') ? '' :<div className="casino-odds-box lay suspended-box">
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                  }
                  
                </div>
                )
              })
            }
           
           
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-body">
          {
              (playerInfo||[]).slice(3).map((item:any,i:number)=>{
                return(
                  <div className={`casino-table-row ${(item?.nat||"").includes('Baccarat') ? 'mini-baccarat':''}`}>
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.nat}</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  {
                    (item?.nat||"").includes('Baccarat') ? '' :<div className="casino-odds-box lay suspended-box">
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                  }
                  
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="casino-table-full-box color-plus my-2">
        <div className="casino-odds-box back suspended-box">
          <span className="casino-odds">Color Plus</span>
        </div>
      </div>
    </div>
  );
};

export default Patti2;
