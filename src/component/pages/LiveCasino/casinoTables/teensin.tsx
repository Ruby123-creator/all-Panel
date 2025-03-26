import React from "react";
interface Props{
  data?:any
}
const Teensin :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK::::")
  const playerA = data?.t1;
  const playerB = data?.t2;
  const winner = data?.t3;
  return (
    <div className="casino-table baccarat29">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
             
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
            {
                (playerA||[]).map((item:any,i:number)=>{
                  return(
<div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
                <span className="casino-nation-book"></span>
              </div>
                  )
                })
              }
              
              
            </div>
          </div>
        </div>
        <div className="casino-table-box-divider"></div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Winner</div>
              <div className="casino-odds-box">High Card</div>
              <div className="casino-odds-box">Pair</div>
              <div className="casino-odds-box">Color Plus</div>
            </div>
            <div className="casino-table-row">
            {
                (playerB||[]).map((item:any,i:number)=>{
                  return(
<div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
                <span className="casino-nation-book"></span>
              </div>
                  )
                })
              }
           
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box mt-3">
        <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/lucky9.png" />
        <div className="casino-odd-box-container">
          <div className={`casino-odds-box back ${((winner||[])[0])?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{((winner||[])[0])?.bp}</span>
          </div>
          <div className={`casino-odds-box lay ${((winner||[])[0])?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{((winner||[])[0])?.lp}</span>
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Teensin;
