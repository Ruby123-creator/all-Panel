import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderMenu from "./menu";
import { FaSearchPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { logOut } from "../../Framework/utils/constant";
import { useUI } from "../../context/ui.context";
import { Modal } from "antd";
import GeneralRules from "../modals/generalRules";


const AppHeader = () => {
  const {userData} = useUI();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="header">
      <div className="header-top">
        <div className="logo-header">
          <a className="d-xl-none" href="/home">
          <FaHome className="me-1" />
          
          </a>
          <a href="/home">
            <img
              src="https://sitethemedata.com/sitethemes/allpanelexch.com/front/logo.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="user-details">
          <div className="search-box-container d-none d-xl-block">
            <div className="search-box">
              <input type="search" placeholder="Search here" className="form-control" />
              <a>
                <FaSearchPlus/>
               
              </a>
            </div>
          </div>
          <div className="header-rules ms-3">
            <div onClick={()=>setIsModalOpen(true)}>
              <div className="rules-link pointer">
                <b>Rules</b>
              </div>
            </div>
          </div>
          <div className="user-balance ms-1 ms-xl-3">
            <div>
              <span>Balance:</span>
              <b>             ₹{( 
    (userData?.Balance || 0) - (userData?.Exposure < 0 ? Math.abs(userData?.Exposure || 0) : 0) 
).toFixed(2)}</b>
            </div>
            <div>
              <span>Exp:</span>
              <b className="pointer">₹ {((userData?.Exposure||0)>0 ? 0 : (userData?.Exposure||0)).toFixed(2)}</b>
             
            </div>
          </div>
          <div className="dropdown">
                <div onClick={toggleDropdown} className="user-name ms-1 ms-xl-3 d-inline-block dropdown-toggle">
                  {userData?.UserName ? userData?.UserName:"Demo"} 
                  <FaChevronDown className="ms-1" />
                
                </div>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show">
                    <Link to="/account-statement">
                      <li className="dropdown-item">Account Statement</li>
                    </Link>
                    <Link to="/open-bets">
                      <li className="dropdown-item">Current Bet</li>
                    </Link>
                    <Link to="/casino-report">
                      <li className="dropdown-item">Casino Results</li>
                    </Link>
                    {/* <Link to="/profile/set-button-values">
                      <li className="dropdown-item">Set Button Values</li>
                    </Link> */}
                    <div className="dropdown-item" onClick={()=>{
                      logOut(userData?.UserName)
                    }}>SignOut</div>
                  </ul>
                )}
              </div>
        </div>
      </div>
     <HeaderMenu/>
     <Modal title={<div className="modal-header"><div className="modal-title h4">Rules</div><div className="rules-langualge"><div className="dropdown"><button type="button" id="lang-dropdown" aria-expanded="false" className="dropdown-toggle btn"><img src="https://versionobj.ecoassetsservice.com/v35/static/front/img/flags/flag_english.png"/>English</button><div x-placement="bottom-start" aria-labelledby="lang-dropdown" className="dropdown-menu" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" style={{position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(911.5px, 39.5px, 0px)"}}><a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex={0} href="#"><img src="https://versionobj.ecoassetsservice.com/v35/static/front/img/flags/flag_english.png"/>English</a></div></div></div><button type="button" className="btn-close" aria-label="Close"></button></div>} footer={<div className="modal-footer"><button className="btn btn-danger">Close</button></div>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <GeneralRules/>
      </Modal>
    </section>
  );
};

export default AppHeader;
