import React, { useRef } from 'react'
import { navMenu } from '../../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'
import { useUI } from '../../../context/ui.context'

const NavbarComp = () => {
  const {activeNav,setActiveNav} = useUI()
  const Navigate = useNavigate();
  console.log(activeNav,"Check:::::::::::::::::::::::::::")
 const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <ul className="nav nav-pills sports-tab">
      {
        (navMenu||[]).map((item:any,index:number)=>{
          return(
            <li className="nav-item"  key={item?.title}>
            <div className={`nav-link ${activeNav?.title === item?.title ? 'active' :''}`} 
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={()=>{
              setActiveNav({title:item?.title,val:item?.val});
              const tabElement = tabRefs.current[index];
              if (tabElement instanceof HTMLElement) {
                tabElement.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
              }
              }}>
              <div className="d-xl-none">
                {item?.icons}
              </div>
              <span>{item?.title}</span>
            </div>
          </li>
          )
        })
      }
   

  </ul>
  )
}

export default NavbarComp