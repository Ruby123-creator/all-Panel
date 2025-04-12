import React, { useState } from "react";
import sidebarAllSports from "../../Framework/utils/sidebarallsports.json";
import sidebarOthers from "../../Framework/utils/sidebarothers.json";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { title } from "process";
import { useUI } from "../../context/ui.context";
import { useNavigate } from "react-router-dom";

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
  routing: any;
  name: string;


}

const sidebarMenu = [{
  title:"Lottery",
  url:"/casino-lobby/lottery"
},
{
  title:"Sports",
  url:"/home"
},{
  title:"Our Casino",
  url:"/live-casino/All Casino"
},{
  title:"Live Casino",
  url:"/casino-lobby/casino"
},{
  title:"Slots",
  url:"/casino-lobby/slot-games"
},{
  title:"Fantasy",
  url:"/casino-lobby/crash"
},

]

const Sidebar: React.FC = () => {
   const {setActiveNav} = useUI();
   const navigate = useNavigate();
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(
    {
      racingSports: true,
      others: true,
      allSports: true,
    }
  );


  const toggleAccordion = (name: string) => {
    setOpenAccordions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

 

  return (
    <>
      <div className="sidebar left-sidebar menu">
        {/* Racing Sports */}
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="sidebar-title accordion-header">
              <button
                type="button"
                className="accordion-button"
                onClick={() => toggleAccordion("racingSports")}
              >
                <span>Racing Sports</span>
                <span>{openAccordions?.racingSports ? <FaAngleUp/> : <FaAngleDown/>}</span>
              </button>
            </h2>
            {openAccordions["racingSports"] && (
              <div className="accordion-collapse accordion-body">
                <ul>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                    onClick={()=>{
                      navigate('/home')

                      setActiveNav({title:'Horse Racing',val:'horse_race'});
                      // navigate('/sports-page/Horse-Racing')
                    }}
                    
                    >
                      Horse Racing
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                     
                      onClick={()=>{
                        navigate('/home')

                        setActiveNav({title:"GreyHound Racing",val:'greyhound/greyhond_race'});
                        // navigate('/sports-page/Greyhound-Racing')
                      }}
                    >
                      Greyhound Racing
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

       

        {/* Others */}
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="sidebar-title accordion-header">
              <button
                type="button"
                className="accordion-button"
                onClick={() => toggleAccordion("others")}
              >
                 <span>Others</span>
                 <span>{openAccordions?.others ? <FaAngleUp/> : <FaAngleDown/>}</span>
                
              </button>
            </h2>
            {openAccordions["others"] && (
              <div className="accordion-collapse accordion-body">
                <ul>
                  {(sidebarOthers as SidebarItem[]).map((item, index) => (
                    <li className="nav-item" key={"sidebarOthers" + index}>
                      <a
                        className={`nav-link ${item.class || ""}`}
                        href={item.url}
                      >
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
              <button
                type="button"
                className="accordion-button"
                onClick={() => toggleAccordion("allSports")}
              >
                 <span> All Sports</span>
                 <span>{openAccordions?.allSports ? <FaAngleUp/> : <FaAngleDown/>}</span>
               
              </button>
            </h2>
            {openAccordions["allSports"] && (
              <div className="accordion-collapse accordion-body">
                <ul>
                  {(sidebarAllSports as Category[]).map(
                    (category, categoryIndex) => (
                      <li key={categoryIndex} className="nav-item">
                        <div  onClick={()=>{
navigate('/home')
setActiveNav({title:category.name,val:category?.routing});

}} className=" nav-link">{category.name}</div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="latest-event d-xl-none">
        <div className="latest-event-item">
          <a className="blink_me" href="/game-details/4/828856279">
            <i className="d-icon icon-4"></i>
            <span>Indian Premier League</span>
          </a>
        </div>
        <div className="latest-event-item">
          <a className="blink_me" href="/game-details/4/736528123">
            <i className="d-icon icon-4"></i>
            <span>Gujarat Titans v Mumbai Indians</span>
          </a>
        </div>
        <div className="latest-event-item">
          <a className="blink_me" href="/game-details/2/776574280">
            <i className="d-icon icon-2"></i>
            <span>A Sabalenka v J Pegula</span>
          </a>
        </div>
        <div className="latest-event-item">
          <a className="blink_me" href="/game-details/1/534224307">
            <i className="d-icon icon-1"></i>
            <span>Fulham v Crystal Palace</span>
          </a>
        </div>
        <div className="latest-event-item">
          <a className="blink_me" href="/game-details/1/669335147">
            <i className="d-icon icon-1"></i>
            <span>Real Sociedad v Valladolid</span>
          </a>
        </div>
      </div> */}
      <ul className="nav nav-tabs d-xl-none menu-tabs">
        {
          (sidebarMenu||[]).map((item:any,i:number)=>{
            return(
              <li className="nav-item" key={"sidebarItems" + i}>
              <a className="nav-link" href={item?.url}>
                {item?.title}
              </a>
            </li>
            )
          })
        }
       
      
      </ul>
    </>
  );
};

export default Sidebar;
