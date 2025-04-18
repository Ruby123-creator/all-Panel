import React, { useState } from "react";
import sidebarAllSports from "../../Framework/utils/sidebarallsports.json";
import sidebarOthers from "../../Framework/utils/sidebarothers.json";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useUI } from "../../context/ui.context";
import { useNavigate } from "react-router-dom";
import { MdSportsCricket } from "react-icons/md";
import { useSportFixture } from "../../Framework/sportsData";
import { extractEventDetails } from "../../Framework/utils/constant";

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
   const { data, isLoading, isError } = useSportFixture('cricket');
   const inPlayEvents = (data||[]).filter((item:any)=>item?.inPlay === 'True');
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

      <div className="latest-event d-xl-none">

        {
          (inPlayEvents||[]).map((item:any,i:Number)=>{
            const detail = extractEventDetails(item?.eventName);

            return (
              <div className="latest-event-item pointer" key={`cricketEvents${i}`}>
              <div className="blink_me" onClick={()=>{
                      navigate(`/event-page/cricket/${item?.gameId}`);

              }}>
    <MdSportsCricket fill="#ffff"/>
                <span>        
                                  {detail?.team1} v {detail?.team2}
                </span>
              </div>
            </div>
            )
          })
        }
      
      
      </div>
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
