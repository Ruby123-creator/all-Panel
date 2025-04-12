import React, { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { headerMenu, mobileHeaderMenu } from "../../Framework/utils/static";
import { useUI } from "../../context/ui.context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
const formatText = (text:string) => {
  return text
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace special characters with space
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};
const HeaderMenu = () => {
  const {sportsName} = useParams();
  const Navigate = useNavigate();
  const { isLogin ,activeNav,setActiveNav} = useUI();
 
  return (
    <div className="header-bottom d-none d-xl-block">
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        {
          (headerMenu||[]).map((item:any,i:number)=>{
            return(
              <div key={"headerElement" + i}  className={`nav-link  pointer ${activeNav?.title === item?.title ? 'active' :''}`} onClick={()=>{
               console.log("CHECKKKKKSS")
                Navigate(item?.routing);
                }} >
                <span className="title">{item?.title}</span>
              </div>
            )
          })
        }

      </ul>
    </nav>
  </div>
  );
};

export default HeaderMenu;
