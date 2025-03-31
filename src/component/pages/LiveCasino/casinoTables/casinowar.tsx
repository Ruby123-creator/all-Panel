import React, { useState } from "react";


interface Props{
  data?:any
}
const Casinowar:React.FC<Props> = ({data}) => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  console.log(data,"CHECK")
 
  const cardsInfo = [
    { nat: "Winner", items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Winner")) },
    { nat: "Black", items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Black")) },
    { nat: "Red", items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Red")) },
    { nat: "Odds", items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Odd")) },
    { nat: "Even", items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Even")) },
    { nat: <img src={`/assets/images/playingCards/spade.png`} />, items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Spade")) },
    { nat: <img src={`/assets/images/playingCards/heart.png`} />, items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Heart")) },
    { nat: <img src={`/assets/images/playingCards/club.png`} />, items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Club")) },
    { nat: <img src={`/assets/images/playingCards/diamond.png`} />, items: (data?.t1 || []).filter((item: any) => (item?.nat || "").includes("Diamond")) },
  ];

  return (
    <div className="casino-table casino-war">
      <div className="casino-table-header w-100">
        <div className="casino-nation-detail"></div>
        {
          [data?.C1, data?.C2 ,data?.C3 , data?.C4 , data?.C5 , data?.C6].map((val:string,i:number)=>{
             return(
              <div className="casino-odds-box ">
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <img src={`/assets/images/playingCards/${val}.jpg`} />
                  </div>
                 
                </div>
              </div>
            </div>
             )
          })
        }
      
      </div>
      <div className="casino-table-full-box d-none d-md-block">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box ">1</div>
          <div className="casino-odds-box ">2</div>
          <div className="casino-odds-box ">3</div>
          <div className="casino-odds-box ">4</div>
          <div className="casino-odds-box ">5</div>
          <div className="casino-odds-box ">6</div>
        </div>
        <div className="casino-table-body">
          {
            (cardsInfo||[]).map((item:any,i:number)=>{
              return(
<div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">
                <span>{item?.nat}</span>
              </div>
            </div>
            {
              (item?.items||[]).map((val:any,index:number)=>{
                return(
                  <div className={`casino-odds-box back ${val?.gstatus ? '' : 'suspended-box'}`}>
                  <span className="casino-odds">{val?.b1}</span>
                </div>
                )
              })
            }
           
           
          </div>
              )
            })
          }
          
         
        </div>
      </div>
      <div className="casino-table-full-box d-md-none">
      <ul className="menu-tabs d-xl-none nav nav-tabs" role="tablist">
        {[1, 2, 3, 4, 5, 6].map((val, i) => (
          <li className="nav-item" role="presentation" key={i}>
            <button
              type="button"
              id={`uncontrolled-tab-example-tab-${i}`}
              role="tab"
              data-rr-ui-event-key={i}
              aria-controls={`uncontrolled-tab-example-tabpane-${i}`}
              aria-selected={activeTab === i}
              className={`nav-link ${activeTab === i ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {val}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {Array(6)
          .fill(6)
          .map((_, i) => (
            <div
              key={i}
              role="tabpanel"
              id={`uncontrolled-tab-example-tabpane-${i}`}
              aria-labelledby={`uncontrolled-tab-example-tab-${i}`}
              className={`fade tab-pane ${activeTab === i ? "active show" : ""}`}
            >
              <div className="casino-table-body">
                <div className="row row5">
                  <div className="col-6">
                    {cardsInfo.slice(0, 5).map((item, index) => (
                      <div className="casino-table-row" key={index}>
                        <div className="casino-nation-detail">
                          <div className="casino-nation-name">{item?.nat}</div>
                        </div>
                        <div className="casino-odds-box back suspended-box">
                          <span className="casino-odds">{item?.items[i]?.b1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-6">
                    {cardsInfo.slice(5).map((item, index) => (
                      <div className="casino-table-row" key={index}>
                        <div className="casino-nation-detail">
                          <div className="casino-nation-name">{item?.nat}</div>
                        </div>
                        <div className="casino-odds-box back suspended-box">
                          <span className="casino-odds">{item?.items[i]?.b1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Casinowar;
