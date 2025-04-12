import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/pages/Home';


import './assets/css/style.css';
import "./assets/css/all.min.css";

import "./assets/css/custom.css";
import "./assets/css/responsive.css";





import AviatorComp from './component/pages/Aviator';

import SportsEventPage from './component/pages/SportsEventPage';

import TransferStatement from './component/pages/TransferStatement';
import OpenBets from './component/pages/OpenBets';

import SportsDetail from './component/pages/SportsPage';
import Chnage_Password from './component/pages/ChangePasword';
import { useAdminDetails, useLoginVerificationQuery } from './Framework/login';
import { useUI } from './context/ui.context';

import CasinoGames from './component/pages/casino';
import UserLogin from './component/pages/Login';
import LiveCasino from './component/pages/LiveCasino';
import CasinoReport from './component/pages/CasinoReport';
import OurCasino from './component/pages/OurCasino';
import CasinoSettlement from './component/pages/casino-settlement';




const App: React.FC = () => {
  const { setLoginData, isLoginAsUser, setUserData ,isLogin} = useUI();
  const [val, setValue] = useState<{ username?: string; uniqid?: string }>({});
  const PrivateRoute = ({ element }:any) => {
    return isLogin ? <Layout>{element}</Layout> : <Navigate to="/" />;
  };
  const { data: loginData } = useLoginVerificationQuery({
    username: val?.username || "",
    uniqid: val?.uniqid || "",
  });
const {data: userData} = useAdminDetails({isLogin:isLoginAsUser,username:val?.username})
  useEffect(() => {

    if (isLoginAsUser) {
      try {
        const storedData = localStorage.getItem("credentials");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData && typeof parsedData === "object") {
            setValue(parsedData);
            setLoginData(parsedData);
          }
        }

        
      } catch (error) {
        console.error("Error parsing credentials from localStorage:", error);
      }
    }
  }, [isLoginAsUser]);

  useEffect(()=>{
    setUserData(userData);
  },[userData])
  return(

      <Routes>

        <Route path="/" element={<UserLogin />} />
        <Route path="/sports-page/:sportsName"  element={<PrivateRoute element={<SportsDetail />} />} />
       
   
        <Route path='/casino-settlement' element={<PrivateRoute element={<CasinoSettlement/>}/>}/>

        <Route path="/casino-lobby/:casinoType" element={<PrivateRoute element={<CasinoGames />} />}/>
       
        <Route path="/aviator"  element={<PrivateRoute element={<AviatorComp />} />}/>
       
         <Route path='/event-page/:sport/:eventId'  element={<PrivateRoute element={<SportsEventPage />} />}/>
        
            <Route path='/transfer-statement'  element={<PrivateRoute element={<TransferStatement />} />}/>
            <Route path='/betting-profit-loss' element={<PrivateRoute element={<TransferStatement />} />}/>
     

         <Route path='/account-statement'  element={<PrivateRoute element={<TransferStatement />} />}/>
         <Route path='/change-password'  element={<PrivateRoute element={<Chnage_Password />} />}/>
         <Route path='/casino-report' element={<PrivateRoute element={<CasinoReport/>}/>}/>

         <Route path='/open-bets'  element={<PrivateRoute element={<OpenBets />} />}/>
        
         <Route path='/live-casino/:type'  element={<PrivateRoute element={<OurCasino />} />}/>
      
         <Route path='/casino/:val' element={<PrivateRoute element={<LiveCasino/>}/>}/>
         <Route path='/home'  element={<PrivateRoute element={<Home />} />}/>
      </Routes>
    
 
)};

export default App;
