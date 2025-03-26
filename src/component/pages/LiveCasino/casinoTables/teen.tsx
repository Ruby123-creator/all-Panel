import React from "react";

interface Props{
  data?:any
}
const Teen:React.FC<Props> = ({data}) => {
  const playerInfo = data?.t1 || [];
  const cardsInfo = data?.t2 ||[];
    const playerA = (playerInfo || []).filter((val: any) =>
      (val?.nat || "").includes("Player A")
    );
    const playerB = (playerInfo || []).filter((val: any) =>
      (val?.nat || "").includes("Player B")
    );
    const oddCards = (cardsInfo || []).filter(
      (val: any) =>
        (
          (val?.nat || "").includes("Odd")
         
        )
    );
    const evenCards = (cardsInfo || []).filter(
      (val: any) =>
        (
          (val?.nat || "").includes("Even")
         
        )
    );
    console.log(data, playerInfo, "CHECK::::::::::::::::");

  return (
    <div className="casino-table">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            {
              (playerA || []).map((item:any,i:any)=>{
                const extractedNat = (item.nat||"").replace(/Player A /, "");
                return (   <div className={`casino-table-row ${item?.status === 'suspend' ? 'suspended-box' :''}`}>
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{extractedNat}</div>
                  </div>
                  <div className="casino-odds-box back">
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div className="casino-odds-box lay">
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                </div>)
              })
            }
           
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
          {
              (playerB || []).map((item:any,i:any)=>{
                const extractedNat = (item.nat||"").replace(/Player B /, "");
                return (   <div className={`casino-table-row ${item?.status === 'suspend' ? 'suspended-box' :''}`}>
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{extractedNat}</div>
                  </div>
                  <div className="casino-odds-box back">
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  <div className="casino-odds-box lay">
                    <span className="casino-odds">{item?.lp}</span>
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </div>
      <div className="casino-table-full-box teenpatti1day-other-odds mt-3">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box">Card 1</div>
          <div className="casino-odds-box">Card 2</div>
          <div className="casino-odds-box">Card 3</div>
          <div className="casino-odds-box">Card 4</div>
          <div className="casino-odds-box">Card 5</div>
          <div className="casino-odds-box">Card 6</div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Odd</div>
            </div>
            {
              (oddCards||[]).map((item:any,i:number)=>{
                return (
<div className={`casino-odds-box back ${item?.status === 'suspend' ? 'suspended-box' :''}`}>
              <span className="casino-odds">{item?.bp}</span>
            </div>
                )
              })
            }
            
          
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Even</div>
            </div>
            {
              (evenCards||[]).map((item:any,i:number)=>{
                return (
<div className={`casino-odds-box back ${item?.status === 'suspend' ? 'suspended-box' :''}`}>
              <span className="casino-odds">{item?.bp}</span>
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

export default Teen;
