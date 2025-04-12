import React from "react";
import { useBetting } from "../../../../context/bettingContext";


interface Props{
  data?:any
}
const Race20 :React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds} = useBetting();

  console.log(data,"CHECK")
  const cardInfo = data?.t1||[]
  return (
    <div className="casino-table race20">
      <div className="casino-table-box">
        {
          (cardInfo||[]).slice(0,4).map((item:any,i:number)=>{
            const img = ["KSS","KHH","KCC","KDD"];
            return(
              <div className="casino-odd-box-container">
              <div className="casino-nation-name">
                <img src={`/assets/images/playingCards/${img[i]}.jpg`}/>
              </div>
              <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.b1,size:item?.bs1,  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.b1}</span>
                <div className="casino-volume">{item?.bs1}</div>
              </div>
              <div
               onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setCasinoBetOdds({ odds:item?.l1,size:item?.ls1,  runnerName:`${item?.nat}`,type:"lay",
                 className:"lay",eventKey:'t1',
                })
              }}
              className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.l1}</span>
                <div className="casino-volume">{item?.ls1}</div>
              </div>
              <div className="casino-nation-book text-center w-100"></div>
            </div>
            )
          })
        }
       
       
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="casino-odd-box-container">
            <div className="casino-nation-name"></div>
            <div className="casino-nation-name">No</div>
            <div className="casino-nation-name">Yes</div>
          </div>
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Total points</div>
            <div className="casino-odds-box lay suspended-box">
              <span className="casino-odds">0</span>
              <div className="casino-volume text-center">0</div>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
              <div className="casino-volume text-center">0</div>
            </div>
            <div className="casino-nation-book"></div>
          </div>
          <div className="casino-odd-box-container">
            <div className="casino-nation-name"></div>
            <div className="casino-nation-name">No</div>
            <div className="casino-nation-name">Yes</div>
          </div>
          <div className="casino-odd-box-container">
            <div className="casino-nation-name">Total cards</div>
            <div className="casino-odds-box lay suspended-box">
              <span className="casino-odds">0</span>
              <div className="casino-volume text-center">0</div>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
              <div className="casino-volume text-center">0</div>
            </div>
            <div className="casino-nation-book"></div>
          </div>
        </div>
        <div className="casino-table-right-box">
          {
            (cardInfo||[]).slice(5,11).map((item:any,i:number)=>{
              return(
                <div className="casino-odd-box-container">
                <div className="casino-nation-name">{item?.nation}</div>
                <div  onClick={(e)=>{
                  e.preventDefault();
                  e.stopPropagation();
                  setCasinoBetOdds({ odds:item?.b1,  runnerName:`${item?.nat}`,type:"back",
                   className:"back",eventKey:'t1',
                    // key:eventKey ,type:betType,betType: "odd",time: updatedTime,min: item?.min
                  })
                }} className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                  <span className="casino-odds">{item?.b1}</span>
                </div>
                <div className="casino-nation-book text-center w-100 text-danger"></div>
              </div>
              )
            })
          }
         
         
        </div>
      </div>
    </div>
  );
};

export default Race20;
