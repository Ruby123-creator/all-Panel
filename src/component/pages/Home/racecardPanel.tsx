import { useEffect, useState } from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { useHorseRacingFixture } from "../../../Framework/horseRacing";
import { useUI } from "../../../context/ui.context";
import { useNavigate, useParams } from "react-router-dom";

interface Timing {
  time: string;
  gameId: string;
}

interface Nation {
  nation: string;
  timing: Timing[];
}

interface CountryData {
  country: string;
  nationArr: Nation[];
}

interface RaceData {
  country: string;
  nation: string;
  time: string;
  gameid: string;
}

/**
 * Transforms raw racing data into a structured format grouped by country and nation.
 */
const transformRacingData = (data: RaceData[]): CountryData[] => {
  const groupedData: Record<string, CountryData> = {};

  (data || []).forEach((item) => {
    if (!groupedData[item.country]) {
      groupedData[item.country] = { country: item.country, nationArr: [] };
    }

    const nationObj = groupedData[item.country].nationArr.find(
      (n) => n.nation === item.nation
    );

    if (nationObj) {
      nationObj.timing.push({ time: item.time, gameId: item.gameid });
    } else {
      groupedData[item.country].nationArr.push({
        nation: item.nation,
        timing: [{ time: item.time, gameId: item.gameid }],
      });
    }
  });

  return Object.values(groupedData);
};

const RaceCardPanel: React.FC = () => {
  const { activeNav } = useUI();
  const { data, isLoading, isError } = useHorseRacingFixture(activeNav?.val);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const navigate = useNavigate();
  const {sportsId} = useParams();
  /**
   * Updates the state with transformed race data when `data` changes.
   */
  useEffect(() => {
    const uniqueCountries = transformRacingData(data || []);
    setCountries(uniqueCountries);
    if (uniqueCountries.length > 0) {
      setActiveTab(uniqueCountries[0].country);
    }
  }, [data]);

  console.log(data, countries, activeNav, "RACING_CARD");

  return (
    <div className="tab-content mt-1">
      {/* Tab Navigation */}
      <div className="nav nav-pills" role="tablist">
        {countries.map((tab) => (
          <div className="nav-item" key={tab.country}>
            <button
              role="tab"
              className={`nav-link ${activeTab === tab.country ? "active" : ""}`}
              onClick={() => setActiveTab(tab.country)}
            >
              {tab.country}
            </button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {countries.map((tab) => (
          <div
            key={tab.country}
            role="tabpanel"
            className={`tab-pane fade ${activeTab === tab.country ? "active show" : ""}`}
          >
            <div className="bet-table position-relative horse-table">
              <div className="bet-table-body">
                {tab.nationArr.map((val, index) => (
                  <div className="bet-table-row" key={`${val.nation}-${index}`}>
                    <div className="bet-nation-name">
                      <div className="game-icon">
                        <MdOutlineLiveTv size={20} />
                      </div>
                      <div className="bet-nation-game-name">
                        <span>{val.nation}</span>
                      </div>
                    </div>
                    <div className="horse-time-detail">
                      {val.timing.map((time, idx) => (
                        <div key={`${time.gameId}-${idx}`} onClick={()=>{
                          navigate(`/event-page/${activeNav?.val}/${time?.gameId}`)
                        }}>
                          <span>{time.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceCardPanel;
