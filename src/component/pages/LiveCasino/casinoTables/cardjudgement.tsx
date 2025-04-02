import React from "react";

interface Props{
  data?:any
}
const Cardjudgement : React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const cardsInfo = data?.t1
  const [yesCard,noCard] = cardsInfo;
  return (
    <div className="casino-table threecardj">
      <div className={`threecardjbox back ${yesCard?.gstatus ? '' : 'suspended-box'}`}>
        <div className="threecard-title">
          Yes<div className="casino-odds"></div>
        </div>
        <div className="threecardj-cards">
          <h4 className="text-center w-100 mb-2">
            <b>{yesCard?.rate}</b>
          </h4>
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13].map((val,i)=>{
              return(
                <div className="card-odd-box">
                <div className="">
                  <img src={`/assets/images/AB_Images/${val}.jpg`} />
                </div>
              </div>
              )
            })
          }
         
        
        </div>
      </div>
      <div className={`threecardjbox lay ${yesCard?.gstatus ? '' : 'suspended-box'}`}>
        <div className="threecard-title">
          No<div className="casino-odds"></div>
        </div>
        <div className="threecardj-cards">
          <h4 className="text-center w-100 mb-2">
            <b>{noCard?.rate}</b>
          </h4>
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13].map((val,i)=>{
              return(
                <div className="card-odd-box">
                <div className="">
                  <img src={`/assets/images/AB_Images/${val}.jpg`} />
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className="casino-remark mt-1">
        {/* <marquee scrollamount="3">Select any 3 card and you will win if you will get at least 1 card from the 3 cards you have selected.|Select any 3 card and you will win If you do not get any card from the 3 cards you have selected.</marquee> */}
      </div>
    </div>
  );
};

export default Cardjudgement;
