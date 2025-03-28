import React from "react";
interface Props{
  data?:any
}
const SuperOver : React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  return (
    <div className="casino-detail detail-page-container position-relative">
      <div className="game-market market-2 ">
        <div className="market-title">
          <span>Bookmaker</span>
        </div>
        <div className="market-header">
          <div className="market-nation-detail">
            <span className="market-nation-name">Min: 100 Max: 3L</span>
          </div>
          <div className="market-odd-box back">
            <b>Back</b>
          </div>
          <div className="market-odd-box lay">
            <b>Lay</b>
          </div>
        </div>
        <div className="market-body " data-title="OPEN">
          {
            (data?.bookmaker||[]).map((item:any,i:number)=>{
              return(
                <div className={`market-row ${item?.status === "SUSPENDED" ?"suspended-row":""}`} data-title="SUSPENDED">
                <div className="market-nation-detail">
                  <span className="market-nation-name">{item?.nat}</span>
                  <div className="market-nation-book"></div>
                </div>
                <div className="market-odd-box back   ">
                  <span className="market-odd">-</span>
                  <span className="market-volume">{item?.bp}</span>
                </div>
                <div className="market-odd-box lay   ">
                  <span className="market-odd">-</span>
                  <span className="market-volume">{item?.lp}</span>
                </div>
              </div>
              )
            })
          }
        
          
        </div>
      </div>

      <div className="game-market market-6">
        <div className="market-title">
          <span>Fancy</span>
        </div>
        <div className="row row10">
          <div className="col-md-6">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
          <div className="col-md-6 d-none d-xl-block">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
        </div>
        <div className="market-body " data-title="OPEN">
          <div className="row row10">
            {
              (data?.fancy||[]).map((item:any,i:number)=>{
                return(

            <div className="col-md-6">
              <div className="fancy-market " data-title="ACTIVE">
                <div className="market-row">
                  <div className="market-nation-detail">
                    <span className="market-nation-name">
                      {" "}
                     {item?.nat}
                    </span>
                    <div className="market-nation-book"></div>
                  </div>
                  <div className="market-odd-box back ">
                    <span className="market-odd">{item?.bp}</span>
                    <span className="market-volume">100</span>
                  </div>
                  <div className="market-odd-box lay ">
                    <span className="market-odd">{item?.lp}</span>
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
      </div>

      <div className="game-market market-6">
        <div className="market-title">
          <span>Fancy1</span>
        </div>
        <div className="row row10">
          <div className="col-md-6">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
          <div className="col-md-6 d-none d-xl-block">
            <div className="market-header">
              <div className="market-nation-detail"></div>
              <div className="market-odd-box back">
                <b>Back</b>
              </div>
              <div className="market-odd-box lay">
                <b>Lay</b>
              </div>
              <div className="fancy-min-max-box"></div>
            </div>
          </div>
        </div>
        <div className="market-body " data-title="OPEN">
          <div className="row row10">
            {
              (data?.fancy1||[]).map((item:any,i:number)=>{
                return(

            <div className="col-md-6">
              <div className="fancy-market " data-title="ACTIVE">
                <div className="market-row">
                  <div className="market-nation-detail">
                    <span className="market-nation-name">
                      {" "}
                     {item?.nat}
                    </span>
                    <div className="market-nation-book"></div>
                  </div>
                  <div className="market-odd-box back ">
                    <span className="market-odd">{item?.bp}</span>
                    <span className="market-volume">100</span>
                  </div>
                  <div className="market-odd-box lay ">
                    <span className="market-odd">{item?.lp}</span>
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
      </div>
      
    </div>
  );
};

export default SuperOver;
