import React, { useEffect } from 'react'
import { useCasinoReport } from '../../../Framework/casino';
import PageLoader from '../../common/pageLoader';

const CasinoReport = () => {

    const {data,isLoading} = useCasinoReport();
    console.log(data,"REPORTS::::::")
   
   
  return (
    <div className="center-main-container report-page">
    <div className="center-container">
      <div className="card">
      <div className="card-header">
            <h4 className="card-title">Casino Report</h4>
          </div>
    <div>
    <div className="card-body" style={{display:"flex" ,justifyContent:"center"}}>
      {
        isLoading ? <PageLoader/> :<>
        {
           data?.url ? <div>
           <iframe
             src={`${data?.url}`}
             className=""
             style={{
              
              
               width: "80vw",
               
               height: "85vh",
               border: "none",
             }}
             title="My iFrame"
             
           />
         </div>:""
        }
        </>
      }
      
      </div>
     
      </div>
      </div>
      </div>
      </div>
  )
}

export default CasinoReport;