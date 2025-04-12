import React, { useEffect, useState } from "react";
import { useUI } from "../../../../context/ui.context";
import { alphaValue } from "../../../../Framework/utils/constant";
import { useBetting } from "../../../../context/bettingContext";

interface Props{
  data?:any
}
const Cardjudgement : React.FC<Props> = ({data}) => {
  const {setCasinoBetOdds} = useBetting();
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  useEffect(() => {
    console.log("🔄 Cardjudgement re-rendered");
  });
  
  const handleCardClick = (val: number) => {
    // Prevent further clicks after 3 selections
    if (selectedCards.length >= 3) return;

    const cardLetter = alphaValue(val); // assuming this converts 1–13 to A, 2, 3...K

    const updatedSelection = [...selectedCards, cardLetter];
    setSelectedCards(updatedSelection);

    // Update casino bet odds on each selection
    if (updatedSelection.length === 3) {
      setCasinoBetOdds({
        
        odds: yesCard?.rate,
        runnerName: `Card ${updatedSelection.join("")}`,
        type: "back",
        className: "back",
        eventKey:'t1',
      });
    }
  };
  console.log(data,"CHECK")
  const cardsInfo = data?.t1
  const yesCard = (cardsInfo||[])[0];
  const noCard = (cardsInfo||[])[1];
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
              const isSelected = selectedCards.includes(alphaValue(val));
        const isDisabled = selectedCards.length >= 3;
              return(
                <div className={`card-odd-box  ${isSelected ? "selected" : ""} ${isDisabled && !isSelected ? "disabled" : ""}`} 
                
                onClick={() => handleCardClick(val)}
                style={{ pointerEvents: isDisabled && !isSelected ? "none" : "auto", opacity: isDisabled && !isSelected ? 0.5 : 1 }}
             >
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
                <div className="card-odd-box"  onClick={() => handleCardClick(val)}>
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
