import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaTrophy } from "react-icons/fa";
import { format } from "date-fns";

interface Props{
    openModal:boolean;
    setOpenModal:any;
    casinoResult:any;
    title:string
}
const CasinoResultModal: React.FC<Props> = ({openModal,setOpenModal,casinoResult,title}) => {
 

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        closeIcon={false}
        onCancel={handleCancel}
        title={
          <div className="modal-header">
            <div className="modal-title h4">{title} Result</div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={()=>{handleCancel()}}
            ></button>
          </div>
        }
        footer={null}
        open={openModal}
      >
        <div className="modal-body">
          <div className="casino-result-modal">
            <div className="casino-result-round-id">
              <span>
                <b>Round Id: </b> {casinoResult?.Round_Id}
              </span>
              <span>
                <b>Match Time: </b>{(casinoResult?.timestamp)} 
              </span>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 text-center">
                <h4 className="result-title">Player A</h4>
                <div className="casino-result-cards">
                    {
                        casinoResult?.result?.Winner === 'Player A' ?  <div className="casino-winner-icon">
                        <FaTrophy size={30} className="trophy"/>
                      
                      </div>:''
                    }
                 
                  {
                    (casinoResult['Player A']||[]).map((card:any,i:number)=>{
                        return ( <img src={`/assets/images/playingCards/${card}.jpg`} />)
                    })
                  }
                 
                
                </div>
              </div>
              <div className="col-md-6 text-center">
                <h4 className="result-title">Player B</h4>
                <div className="casino-result-cards">
                {
                    (casinoResult['Player B']||[]).map((card:any,i:number)=>{
                        return ( <img src={`/assets/images/playingCards/${card}.jpg`} />)
                    })
                  }
                  {
                        casinoResult?.result?.Winner === 'Player B' ?  <div className="casino-winner-icon">
                        <FaTrophy size={30} className="trophy"/>
                      
                      </div>:''
                    }
                </div>
              </div>
            </div>
            <div className="row mt-2 justify-content-center">
              <div className="col-md-6">
                <div className="casino-result-desc">
                  <div className="casino-result-desc-item">
                    <div>Winner:</div>
                    <div>{casinoResult?.result?.Winner}</div>
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Odd/Even:</div>
                    <div>{
                        ((casinoResult?.result?.["Odd/Even"]||[])).map((item:string,i:number)=>(<>{item + " "}</>))
                    }</div>
                    
                   
                  </div>
                  <div className="casino-result-desc-item">
                    <div>Consecutive:</div>
                    <div>A : No | B : No</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CasinoResultModal;
