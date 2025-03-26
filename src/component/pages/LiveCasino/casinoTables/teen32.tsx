import React from "react";
interface Props {
  data?: any;
}
const Teen32: React.FC<Props> = ({ data }) => {
  console.log(data, "CHECK");
  const playerInfo = data?.t1 || [];
  const playerResult =  data?.t2 || []
  return (
    <div className="casino-table teenpatti2">
      <div className="casino-table-box">
        {(playerInfo || []).map((item: any, i: number) => {
          return (
            <>
              <div className="casino-table-left-box">
                <div className="casino-table-header">
                  <div className="casino-nation-detail">{item?.nat}</div>
                  <div className="casino-odds-box back">Back</div>
                  <div className="casino-odds-box lay">Lay</div>
                </div>
                <div className="casino-table-body">
                  <div className="casino-table-row">
                    <div className="casino-nation-detail">
                      <div className="casino-nation-name">Main</div>
                    </div>
                    <div
                      className={`casino-odds-box back ${
                        item?.status === "suspended" ? "suspended-box" : ""
                      }`}
                    >
                      <span className="casino-odds">{item?.bp}</span>
                    </div>
                    <div
                      className={`casino-odds-box lay ${
                        item?.status === "suspended" ? "suspended-box" : ""
                      }`}
                    >
                      <span className="casino-odds">{item?.lp}</span>
                    </div>
                  </div>
                  {(i === 1 && (playerResult||[])?.length) ? (
                    <div className="casino-table-row under-over-row">
                      {
                       ( playerResult||[]).map((item:any,i:number)=>{
                        return(
                          <div className="uo-box">
                          <div className="casino-nation-detail">
                            <div className="casino-nation-name">
                              {item?.nat}
                            </div>
                          </div>
                          <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                            <span className="casino-odds">{item?.bp}</span>
                          </div>
                        </div>
                        )
                       })
                      }
                     
                      
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {i === 0 ? <div className="casino-table-box-divider"></div> : ""}
            </>
          );
        })}
      </div>
      <div className="casino-remark mt-1">
        {/* <marquee scrollamount="3">BET LIMIT IS OPEN NOW . BET RANGE UPTO 100-200K....!!!HURRY UP !!!</marquee> */}
      </div>
    </div>
  );
};

export default Teen32;
