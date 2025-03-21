import React, { useState } from "react";
import sidebarAllSports from "../../Framework/utils/sidebarallsports.json";
import sidebarOthers from "../../Framework/utils/sidebarothers.json";


interface SidebarItem {
  name: string;
  url: string;
  class?: string;
}

interface SubCategory {
  name: string;
  links: { name: string; link: string }[];
}

interface Category {
  name: string;
  icon: string;
  subcategories: SubCategory[];
}

const Sidebar: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [activeOverlay, setActiveOverlay] = useState<"horse" | "greyhound" | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    racingSports: true,
    others: true,
    allSports: true,
  });
  const [openCatAccordions, setOpenCatAccordions] = useState<Record<string, boolean>>({});
  
  const horseRaces: string[] = ["Race 1", "Race 2", "Race 3"];
  const greyhoundRaces: string[] = ["Race A", "Race B", "Race C"];

  const toggleAccordion = (name: string) => {
    setOpenAccordions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleCategoryAccordion = (categoryIndex: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [`category-${categoryIndex}`]: !prev[`category-${categoryIndex}`],
    }));
  };

  const toggleCatAccordion = (categoryIndex: number, subIndex: number) => {
    const key = `${categoryIndex}-${subIndex}`;
    setOpenCatAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openOverlay = (type: "horse" | "greyhound") => {
    setActiveOverlay(type);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setActiveOverlay(null);
  };

  return (
    <div className="sidebar left-sidebar">
      {/* Racing Sports */}
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button
              type="button"
              className="accordion-button"
              onClick={() => toggleAccordion("racingSports")}
            >
              Racing Sports
            </button>
          </h2>
          {openAccordions["racingSports"] && (
            <div className="accordion-collapse accordion-body">
              <ul>
             
                <li className="nav-item">
                  <a className="nav-link" onClick={() => openOverlay("horse")} href="#">
                    Horse Racing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={() => openOverlay("greyhound")} href="#">
                    Greyhound Racing
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>{activeOverlay === "horse" ? "All Horse Racing" : "All Greyhound Racing"}</h2>
            <ul>
              {(activeOverlay === "horse" ? horseRaces : greyhoundRaces).map((race, index) => (
                <li key={index}>{race}</li>
              ))}
            </ul>
            <button onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}

      {/* Others */}
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button type="button" className="accordion-button" onClick={() => toggleAccordion("others")}>
              Others
            </button>
          </h2>
          {openAccordions["others"] && (
            <div className="accordion-collapse accordion-body">
              <ul>
                {(sidebarOthers as SidebarItem[]).map((item, index) => (
                  <li key={index} className="nav-item">
                    <a className={`nav-link ${item.class || ""}`} href={item.url}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* All Sports */}
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="sidebar-title accordion-header">
            <button type="button" className="accordion-button" onClick={() => toggleAccordion("allSports")}>
              All Sports
            </button>
          </h2>
          {openAccordions["allSports"] && (
            <div className="accordion-collapse accordion-body">
              <ul>
                {(sidebarAllSports as Category[]).map((category, categoryIndex) => (
                  <li key={categoryIndex} className="nav-item">
                    <a className=" nav-link">
                    {category.name}
                    </a>
                  
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
