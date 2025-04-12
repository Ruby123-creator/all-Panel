import React from "react";
import { alphaValue } from "../../../../Framework/utils/constant";
import { useBetting } from "../../../../context/bettingContext";
interface Props{
  data?:any
}
const Lucky7 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
    const {setCasinoBetOdds} = useBetting();
  
  const cardInfo = data?.t1;
  const lowCard = (cardInfo||[]).find((val:any)=>val?.nat === 'Low Card');
  const highCard = (cardInfo||[]).find((val:any)=>val?.nat === 'High Card');
  const even = (cardInfo||[]).find((val:any)=>val?.nat === 'Even');
  const odd = (cardInfo||[]).find((val:any)=>val?.nat === 'Odd');
  const red = (cardInfo||[]).find((val:any)=>val?.nat === 'Red');
  const black = (cardInfo||[]).find((val:any)=>val?.nat === 'Black');
  const line = (cardInfo||[]).find((val:any)=>(val?.nat||"").includes("Line"));
  const cards = (cardInfo||[]).find((val:any)=>val?.nat === "Card 1");

  return (
    <div className="casino-table lucky7a">
      <div className="casino-table-full-box">
        <div className=" lucky7low">
          <div className="casino-odds text-center">{lowCard?.bp}</div>
          <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:lowCard?.bp,  runnerName:`${lowCard?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme ${lowCard?.status === "suspended" ? "suspended-box" :""}`}>
            <span className="casino-odds">Low Card</span>
          </div>
          <div className="casino-nation-book text-center"></div>
        </div>
        <div className="lucky7">
          <img src="/assets/images/AB_Images/7.jpg" width={50} height={70}/>
        </div>
        <div className=" lucky7high">
          <div className="casino-odds text-center">{highCard?.bp}</div>
          <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:highCard?.bp,  runnerName:`${highCard?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme ${highCard?.status === "suspended" ? "suspended-box" :""}`}>
            <span className="casino-odds">High Card</span>
          </div>
          <div className="casino-nation-book text-center"></div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className=" lucky7odds">
            <div className="casino-odds text-center">{even?.bp}</div>
            <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:even?.bp,  runnerName:`${even?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme ${even?.status === "suspended" ? "suspended-box" :""}`}>
              <span className="casino-odds">Even</span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
          <div className=" lucky7odds">
            <div  className="casino-odds text-center">{odd?.bp}</div>
            <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:odd?.bp,  runnerName:`${odd?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme ${odd?.status === "suspended" ? "suspended-box" :""}`}>
              <span className="casino-odds">Odd</span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
        </div>
        <div className="casino-table-right-box">
          <div className=" lucky7odds">
            <div className="casino-odds text-center">{red?.bp}</div>
            <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:red?.bp,  runnerName:`${red?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme  ${red?.status === "suspended" ? "suspended-box" :""}`}>
              <span className="casino-odds">
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
              </span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
          <div className=" lucky7odds">
            <div className="casino-odds text-center">{black?.bp}</div>
            <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:black?.bp,  runnerName:`${black?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back casino-odds-box-theme ${black?.status === "suspended" ? "suspended-box" :""}`}>
              <span className="casino-odds">
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
              </span>
            </div>
            <div className="casino-nation-book text-center"></div>
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        {
          ([["1","2","3"],["4","5","6"],["8","9","10"],["11","12","13"]]).map((item:any,i:number)=>{
            return(
<div className="lucky7cards">
          <div className="casino-odds w-100 text-center">4</div>
          <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:4,  runnerName:`Line ${i+1}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`card-odd-box-container ${line?.status === "suspended" ? "suspended-box": ""}`}>
            {
              (item||[]).map((val:string)=>{
                return(
                  <div className="card-odd-box">
                  <div >
                    <img src={`/assets/images/AB_Images/${val}.jpg`} />
                  </div>
                </div>
                )
              })
            }
           
           
          </div>
          <div className="casino-nation-book text-center w-100"></div>
        </div>
            )       
          })
        }
        
        
      </div>
      <div className="casino-table-full-box lucky7acards mt-3">
        <div className="casino-odds w-100 text-center">12</div>
        {
     ([1,2,3,4,5,6,7,8,9,10,11,12,13]).map((val:number,i:number)=>{

      return(
<div className="card-odd-box">
          <div onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:12,  runnerName:`Card ${alphaValue(val)}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={cards?.status === "suspended" ? "suspended-box": ""}>
            <img src={`/assets/images/AB_Images/${val}.jpg`} />
          </div>
          <div className="casino-nation-book"></div>
        </div>
      )
     })
        }
   
        
       
      </div>
    </div>
  );
};

export default Lucky7;
