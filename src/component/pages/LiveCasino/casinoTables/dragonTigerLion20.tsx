import React from "react";
import { useUI } from "../../../../context/ui.context";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any;
}
const reduceData = (data:any)=>{
  const groupedData = data.reduce((acc:any, item:any) => {
    // Extract category and type (e.g., "Straight" and "Tiger")
    const [category, type] = item.nat.split(" ");

    // Find or create the object for this category
    let obj = (acc||[]).find((o: { natname: any; }) => o.natname === category);
    if (!obj) {
        obj = { natname: category };
        acc.push(obj);
    }

    // Assign values dynamically
    obj[`${type.toLowerCase()}bp`] = item.bp;
    obj[`${type.toLowerCase()}status`] = item.status;

    return acc;
}, []);
return groupedData;
}
const reduceData1 = (data:any)=>{
  const groupedData = data.reduce((acc:any, item:any) => {
    // Extract category and type (e.g., "Straight" and "Tiger")
    const [type, category] = item.nat.split(" ");

    // Find or create the object for this category
    let obj = (acc||[]).find((o: { natname: any; }) => o.natname === category);
    if (!obj) {
        obj = { natname: category };
        acc.push(obj);
    }

    // Assign values dynamically
    obj[`${type.toLowerCase()}bp`] = item.bp;
    obj[`${type.toLowerCase()}status`] = item.status;

    return acc;
}, []);
return groupedData;
}
const DragonTigerLion20 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const {setCasinoBetOdds} = useBetting();

  const playerInfo = data?.t1 || [];
 
  
    const players = reduceData(playerInfo.slice(0,15));
    const cards = reduceData1(playerInfo.slice(15));
    console.log(players,cards,"CHECK:::::::::::::::::::::::::::")

  return (
    <div className="casino-table dtl20">
      <div className="casino-table-box d-none d-md-flex">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Dragon</div>
            <div className="casino-odds-box back">Tiger</div>
            <div className="casino-odds-box back">Lion</div>
          </div>
          <div className="casino-table-body">
            {
              (players||[]).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">{item?.natname}</div>
                  </div>
                  <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.dbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }}  className={`casino-odds-box back ${item?.dstatus === 'suspended' ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.dbp}</span>
                  </div>
                  <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.tbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.tstatus === 'suspended' ? 'suspended-box':''}`}>

                    <span className="casino-odds">{item?.tbp}</span>
                  </div>
                  <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.lbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.lstatus === 'suspended' ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.lbp}</span>
                  </div>
                </div>
                )
              })
            }
           {
            (cards||[]).slice(0,4).map((item:any,i:number)=>{
              return(
<div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src={`/assets/images/AB_Images/${i+1}.jpg`} />
                </div>
              </div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.dragonbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.dragonstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.dragonbp}</span>
              </div>
              <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.tigerbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.tigerstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.tigerbp}</span>
              </div>
              <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.lionbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.lionstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.lionbp}</span>
              </div>
            </div>
              )
            })
           }
           
            
          
          </div>
        </div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Dragon</div>
            <div className="casino-odds-box back">Tiger</div>
            <div className="casino-odds-box back">Lion</div>
          </div>
          <div className="casino-table-body">
          {
            (cards||[]).slice(4).map((item:any,i:number)=>{
              return(
<div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">
                  <img src={`/assets/images/AB_Images/${i+5}.jpg`} />
                </div>
              </div>
              <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.dragonbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.dragonstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.dragonbp}</span>
              </div>
              <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.tigerbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.tigerstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.tigerbp}</span>
              </div>
              <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.lionbp,  runnerName:`${item?.natname}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.lionstatus === 'suspended' ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.lionbp}</span>
              </div>
            </div>
              )
            })
           }
          
          </div>
        </div>
      </div>
      <ul className="d-xl-none nav nav-pills" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-0"
            role="tab"
            data-rr-ui-event-key="0"
            aria-controls="uncontrolled-tab-example-tabpane-0"
            aria-selected="true"
            className="nav-link active"
          >
            Dragon
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-1"
            role="tab"
            data-rr-ui-event-key="1"
            aria-controls="uncontrolled-tab-example-tabpane-1"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
          >
            Tiger
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            id="uncontrolled-tab-example-tab-2"
            role="tab"
            data-rr-ui-event-key="2"
            aria-controls="uncontrolled-tab-example-tabpane-2"
            aria-selected="false"
            tabIndex={-1}
            className="nav-link"
          >
            Lion
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-0"
          aria-labelledby="uncontrolled-tab-example-tab-0"
          className="fade d-xl-none tab-pane active show"
        >
          <div className="casino-table-box">
            <div className="casino-table-left-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Winner</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Black
                      <span className="card-icon ms-1">
                        <span className="card-black "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-black ">]</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Red
                      <span className="card-icon ms-1">
                        <span className="card-red "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-red ">[</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Odd</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Even</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-table-right-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/J.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/Q.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/K.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-1"
          aria-labelledby="uncontrolled-tab-example-tab-1"
          className="fade d-xl-none tab-pane"
        >
          <div className="casino-table-box">
            <div className="casino-table-left-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Winner</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Black
                      <span className="card-icon ms-1">
                        <span className="card-black "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-black ">]</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Red
                      <span className="card-icon ms-1">
                        <span className="card-red "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-red ">[</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Odd</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Even</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-table-right-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/J.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/Q.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/K.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          id="uncontrolled-tab-example-tabpane-2"
          aria-labelledby="uncontrolled-tab-example-tab-2"
          className="fade d-xl-none tab-pane"
        >
          <div className="casino-table-box">
            <div className="casino-table-left-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Winner</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Black
                      <span className="card-icon ms-1">
                        <span className="card-black "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-black ">]</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      Red
                      <span className="card-icon ms-1">
                        <span className="card-red "></span>
                      </span>
                      <span className="card-icon ms-1">
                        <span className="card-red ">[</span>
                      </span>
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Odd</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">Even</div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="casino-table-right-box">
              <div className="casino-table-body">
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/J.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/Q.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
                <div className="casino-table-row">
                  <div className="casino-nation-detail">
                    <div className="casino-nation-name">
                      <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/K.png" />
                    </div>
                  </div>
                  <div className="casino-odds-box back suspended-box">
                    <span className="casino-odds">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonTigerLion20;
