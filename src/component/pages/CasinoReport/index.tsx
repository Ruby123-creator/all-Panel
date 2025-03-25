import React, { useEffect } from 'react'
import { useCasinoReport } from '../../../Framework/casino';
import PageLoader from '../../common/pageLoader';

const CasinoReport = () => {

    const {data,isLoading} = useCasinoReport();
    console.log(data,"REPORTS::::::")
     if(isLoading){
        return<PageLoader/>
     }
   
  return (
    <div className="center-main-container report-page">
    <div className="center-container">
      <div className="card">
      <div className="card-header">
            <h4 className="card-title">Casino Report</h4>
          </div>
    <div>{
        data?.url ? <div>
        <iframe
          src={`${data?.url}`}
          className=""
          style={{
            position: "fixed",
         
            top: "22px",
            right: 10,
            width: "80vw",
            paddingTop:"130px",
            height: "85vh",
            border: "none",
          }}
          title="My iFrame"
          
        />
      </div>:""
      }</div>
      </div>
      </div>
      </div>
  )
}

export default CasinoReport;