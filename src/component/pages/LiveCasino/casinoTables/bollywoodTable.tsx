import React from "react";
import { useUI } from "../../../../context/ui.context";
import { alphaValue } from "../../../../Framework/utils/constant";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}
const BollywoodTable : React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds,casinoOdds} = useBetting();

  console.log(data,"CHECK")
  const actorInfo = data?.t1;
  const dulhaDhulan = (data?.t1||[]).find((val:any)=>val?.nat === "Dulha Dulhan K-Q");
  const bhartiJA = (data?.t1||[]).find((val:any)=>val?.nat === "Barati J-A");
  const red = (data?.t1||[]).find((val:any)=>val?.nat === "Red");
  const black = (data?.t1||[]).find((val:any)=>val?.nat === "Black");

  
  return (
    <div className="casino-table bollywood">
      <div className="casino-table-box">
         {
          (actorInfo||[]).slice(0,6).map((item:any,i:number)=>{
            return(
              <div className="casino-odd-box-container">
              <div className="casino-nation-name">
                {item?.nat}<div className="casino-nation-book d-md-none"></div>
              </div>
              <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.b1,  runnerName:`${item?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${item?.gstatus === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.b1}</span>
              </div>
              <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:item?.b1,  runnerName:`${item?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${item?.gstatus === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.l1}</span>
              </div>
              <div className="casino-nation-book text-center d-none d-md-block w-100"></div>
            </div>
            )
          })
         }
       
       
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box left-odd-box">
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">
              Odd
              <div className="casino-nation-book text-danger d-md-none"></div>
            </div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:((actorInfo||[])[6])?.b1,  runnerName:`${((actorInfo||[])[6])?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box back ${((actorInfo||[])[6])?.gstatus === "suspended" ? 'suspended-box':''}`}>
              <span className="casino-odds">{((actorInfo||[])[6])?.b1}</span>
            </div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:((actorInfo||[])[6])?.l1,  runnerName:`${((actorInfo||[])[6])?.nat}`,type:"lay",
               className:"lay",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className={`casino-odds-box lay ${((actorInfo||[])[6])?.gstatus === "suspended" ? 'suspended-box':''}`}>
              <span className="casino-odds">{((actorInfo||[])[6])?.l1}</span>
            </div>
            <div className="casino-nation-book text-center d-none d-md-block w-100"></div>
          </div>
        </div>
        <div className="casino-table-right-box right-odd-box">
          <div className="aaa-odd-box">
            <div className="casino-odds text-center">{dulhaDhulan?.b1}</div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:dulhaDhulan?.b1,  runnerName:`${dulhaDhulan?.nat}`,type:"back",
               className:"back",eventKey:'t1'
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className="casino-odds-box back casino-odds-box-theme">
              <span className="casino-odds">Dulha Dulhan K-Q</span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
          <div className="aaa-odd-box">
            <div className="casino-odds text-center">{bhartiJA?.b1}</div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:bhartiJA?.b1,  runnerName:`${bhartiJA?.nat}`,type:"back",
               className:"back",eventKey:'t1'
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className="casino-odds-box back casino-odds-box-theme">
              <span className="casino-odds">Barati J-A</span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box ">
          <div className="aaa-odd-box">
            <div className="casino-odds text-center">{red?.b1}</div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:red?.b1,  runnerName:`${red?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className="casino-odds-box back casino-odds-box-theme">
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-red ">
                  <img src="/assets/images/playingCards/heart.png"/>
                  </span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-red ">
                  <img src="/assets/images/playingCards/diamond.png"/>
                  </span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
          <div className="aaa-odd-box">
            <div className="casino-odds text-center">{black?.b1}</div>
            <div  onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              setCasinoBetOdds({...casinoOdds, odds:black?.b1,  runnerName:`${black?.nat}`,type:"back",
               className:"back",eventKey:'t1',
                // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
              })
            }} className="casino-odds-box back casino-odds-box-theme">
              <div className="casino-odds">
                <span className="card-icon ms-1">
                  <span className="card-black ">
                    <img src="/assets/images/playingCards/spade.png"/>
                  </span>
                </span>
                <span className="card-icon ms-1">
                  <span className="card-black ">
                  <img src="/assets/images/playingCards/club.png"/>
                  </span>
                </span>
              </div>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
        </div>
        <div className="casino-table-right-box right-cards">
          <h4 className="w-100 text-center mb-2">
            <b>3.75</b>
          </h4>
          {
            [11,12,13,1].map((val,i)=>{
              return(
                <div className="card-odd-box"  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({...casinoOdds, odds:3.75,  runnerName:`Card ${alphaValue(val)}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }}>
                <div className="">
                  <img src={`/assets/images/AB_Images/${val}.jpg`} />
                </div>
                <div className="casino-nation-book"></div>
              </div>
              )
            })
          }
         
         
        </div>
      </div>
    </div>
  );
};

export default BollywoodTable;
