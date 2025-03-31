import React from 'react'
import { navMenu } from '../../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'
import { useUI } from '../../../context/ui.context'

const NavbarComp = () => {
  const {activeNav,setActiveNav} = useUI()
  const Navigate = useNavigate();
  return (
    <ul className="nav nav-pills sports-tab">
      {
        (navMenu||[]).map((item:any)=>{
          return(
            <li className="nav-item">
            <div className={`nav-link ${activeNav?.title === item?.title ? 'active' :''}`} onClick={()=>{
              setActiveNav({title:item?.title,val:item?.val})
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