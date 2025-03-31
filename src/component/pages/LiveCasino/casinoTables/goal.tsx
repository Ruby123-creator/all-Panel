import React from "react";
interface Props{
  data?:any
}
const Goal :React.FC<Props> = ({data}) => {
   console.log(data,"CHECK")
   const table1 = data?.t1;
   const table2 = data?.t2;
  return (
    <div className="casino-detail detail-page-container position-relative goal">
      <div className="game-market market-6">
        <div className="market-title">Who Will Goal Next?</div>
        <div className="market-header row">
          <div className="col-12 col-md-12 d-none d-md-block">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-md-none">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="fancy-min-max-box"></div>
        </div>
        <div className="market-body row">
          {
            (table1||[]).map((item:any,i:number)=>{
              return(
                <div className="col-12 col-md-12">
                <div className="fancy-market" data-title={item?.status}>
                  <div className="market-row">
                    <div className="market-nation-detail">
                      <span className="market-nation-name pointer">
                        {item?.nat}
                      </span>
                    </div>
                    <div className={` blb-box ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                      <div className="market-odd-box back ">
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
      <div className="game-market market-6">
        <div className="market-title">Method Of Next Goal</div>
        <div className="market-header row">
          <div className="col-12 col-md-12 d-none d-md-block">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-md-none">
            <div className="market-row">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
            </div>
          </div>
          <div className="fancy-min-max-box"></div>
        </div>
        <div className="market-body row">
        {
            (table2||[]).map((item:any,i:number)=>{
              return(
                <div className="col-12 col-md-12">
                <div className="fancy-market" data-title={item?.status}>
                  <div className="market-row">
                    <div className="market-nation-detail">
                      <span className="market-nation-name pointer">
                        {item?.nat}
                      </span>
                    </div>
                    <div className={` blb-box ${item?.status === "SUSPENDED" ? 'suspended-box':""}`}>
                      <div className="market-odd-box back ">
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
        {/* <marquee scrollamount="3">Results are based on stream&nbsp;only</marquee> */}
      </div>
     
    </div>
  );
};

export default Goal;
