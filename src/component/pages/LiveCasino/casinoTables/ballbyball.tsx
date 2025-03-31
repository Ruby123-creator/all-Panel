import React from "react";
interface Props{
    data?:any
}
const Ballbyball :React.FC<Props> = ({data}) => {
    console.log(data,"CHECK")
    const tableInfo = data?.t1;
  return (
    <div className="casino-detail detail-page-container position-relative ball-by-ball">
      <div className="game-market market-6 container-fluid container-fluid-5">
        <div className="market-title row row5">Runs</div>
        <div className="market-header row row5">
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="fancy-min-max-box"></div>
        </div>
        <div className="market-body row row5">
            {
                (tableInfo||[]).map((item:any,i:number)=>{
                    return(
<div className="col-12 col-md-4">
            <div className="fancy-market" data-title={item?.status}>
              <div className="market-row">
                <div className="market-nation-detail">
                  <span className="market-nation-name pointer">{item?.nat}</span>
                </div>
                <div className=" blb-box ">
                  <div className={`market-odd-box back ${item?.status === "SUSPENDED" ?"suspended-row":""}`}>
                    <span className="market-odd">{item?.bp}</span>
                    <span className="market-volume">{item?.bs}</span>
                  </div>
                </div>
                <div className="fancy-min-max-box">
                  <div className="fancy-min-max">
                    <span className="w-100 d-block">Min: {item?.min}</span>
                    <span className="w-100 d-block">Max: {item?.max}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    )
                })
            }
          
          
        </div>
      </div>
      <div className="casino-remark mt-1">
        <div className="remark-icon">
          <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/remark.png" />
        </div>
        {/* <marquee scrollamount="3">Results are based on stream only. Score board may be different or updated later.</marquee> */}
      </div>
     
    </div>
  );
};

export default Ballbyball;
