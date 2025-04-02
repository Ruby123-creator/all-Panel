import React from "react";
interface Props{
    data?:any
}
const Bollywood:React.FC<Props> = ({data}) => {
    console.log(data,"CHECK")
    const aaa = (data?.t1||[]).filter((val:any)=>val?.nat === "Amar" || val?.nat === "Akbar" || val?.nat === "Anthony")
    const evenOdd = (data?.t1||[]).filter((val:any)=>val?.nat === "Even" || val?.nat === "Odd");
    const cards = (data?.t1||[]).filter((val:any)=>val?.nat === "Red" || val?.nat === "Black");
    const underOver = (data?.t1||[]).filter((val:any)=>val?.nat === "Under 7" || val?.nat === "Over 7");
    const cardNumber = (data?.t1||[]).find((val:any)=>val?.nat === "Card 1");
  return (
    <div className="casino-table aaa">
      <div className="casino-table-box">
        {
            (aaa||[]).map((item:any,i:number)=>{
                return(
                    <div className="casino-odd-box-container">
                    <div className="casino-nation-name">
                      A. {item?.nat}<div className="casino-nation-book d-md-none"></div>
                    </div>
                    <div className={`casino-odds-box back ${item?.gstatus === "SUSPENDED" ? "suspended-box": ""}`}>
                      <span className="casino-odds">{item?.b1}</span>
                    </div>
                    <div className={`casino-odds-box lay ${item?.gstatus === "SUSPENDED" ? "suspended-box": ""}`}>
                      <span className="casino-odds">{item?.l1}</span>
                    </div>
                    <div className="casino-nation-book text-center d-none d-md-block w-100"></div>
                  </div>
                )
            })
        }
       
       
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
            {
                (evenOdd||[]).map((item:any,i:number)=>{
                    return(
                        <div className="aaa-odd-box">
                        <div className="casino-odds text-center">{item?.b1}</div>
                        <div className={`casino-odds-box back casino-odds-box-theme ${item?.gstatus === "SUSPENDED" ? 'suspended-box':''}`}>
                          <span className="casino-odds">{item?.nat}</span>
                        </div>
                        <div className="casino-nation-book text-center"></div>
                      </div>
                    )
                })
            }
         
         
        </div>
        <div className="casino-table-center-box">
        {
                (cards||[]).map((item:any,i:number)=>{
                    return(
                        <div className="aaa-odd-box">
                        <div className="casino-odds text-center">{item?.b1}</div>
                        <div className={`casino-odds-box back casino-odds-box-theme ${item?.gstatus === "SUSPENDED" ? 'suspended-box':''}`}>
                          <span className="casino-odds">{item?.nat === "Red" ? <>
                          <img src="/assets/images/playingCards/heart.png"/>
                          <img src="/assets/images/playingCards/diamond.png"/>
                          </>:<>
                          <img src="/assets/images/playingCards/spade.png"/>
                          <img src="/assets/images/playingCards/club.png"/>
                          </>}</span>
                        </div>
                        <div className="casino-nation-book text-center"></div>
                      </div>
                    )
                })
            }
       
        </div>
        <div className="casino-table-right-box">
        {
                (underOver||[]).map((item:any,i:number)=>{
                    return(
                        <div className="aaa-odd-box">
                        <div className="casino-odds text-center">{item?.b1}</div>
                        <div className={`casino-odds-box back casino-odds-box-theme ${item?.gstatus === "SUSPENDED" ? 'suspended-box':''}`}>
                          <span className="casino-odds">{item?.nat}</span>
                        </div>
                        <div className="casino-nation-book text-center"></div>
                      </div>
                    )
                })
            }
        </div>
      </div>
      <div className="casino-table-full-box aaacards mt-3">
        <h4 className="w-100 text-center mb-2">
          <b>12</b>
        </h4>
        {
            [1,2,3,4,5,6,7,8,9,10,11,12,13].map((val,i)=>{
              return(
                <div className="card-odd-box">
                <div className={cardNumber?.gstatus === "SUSPENDED" ? "suspended-box":""}>
                  <img src={`/assets/images/AB_Images/${val}.jpg`} />
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default Bollywood;
