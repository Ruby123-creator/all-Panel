import React from "react";
import { casinoTypes } from "../../../Framework/utils/static";
import { useParams, useNavigate } from "react-router-dom";

// Define the type for casinoTypes keys
type CasinoTypeKeys = keyof typeof casinoTypes;

// Define the type of a single casino item
interface CasinoItem {
  img: string;
  title: string;
  path: string;
}

const CasinoCards: React.FC = () => {
  const { type } = useParams<{ type?: string }>(); // Ensure type safety
  const navigate = useNavigate();

  // Get the correct data or default to an empty array
  const casinoData: CasinoItem[] = casinoTypes[type as CasinoTypeKeys] || [];
  const mergedArray = Object.values(casinoTypes).flat();
  const data = (type === "All Casino") ? mergedArray : casinoData;
  return (
    <div className="tab-content">
      <div className="tab-pane active" id="all-casino">
        <div className="casino-list">
          
          {(data||[]).map((item, i) => (
            <div
              className="casino-list-item"
              key={"casinoTypes2" + i} 
              onClick={() => navigate(item?.path)}
              style={{ width: "120px", height: "120px" }}
            >
              <div
                className="casino-list-item-banner"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoCards;
