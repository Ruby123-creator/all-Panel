import React from 'react'
import { casinoCards, casinoTypes } from '../../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'

const CasinoComp = () => {
  const navigate = useNavigate();
   const mergedArray = Object.values(casinoTypes).flat();
  return (
    <div className='casino-list mt-2'>

        {
            (mergedArray||[]).map((item:any,i:number)=>{
                return(
                    <div className="casino-list-item" onClick={()=>{
                      navigate(item?.path)
                    }} style={{width:"100px",height:"100px"}}><div className="casino-list-item-banner" style={{backgroundImage:`url(${item?.img})`}}></div><div className="casino-list-name">{item?.title}</div></div>
                )
            })
        }
    </div>
  )
}

export default CasinoComp