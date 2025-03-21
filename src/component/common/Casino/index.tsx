import React from 'react'
import { casinoCards } from '../../../Framework/utils/static'
import { useNavigate } from 'react-router-dom'

const CasinoComp = () => {
  const navigate = useNavigate();
  return (
    <div className='casino-list mt-2'>

        {
            (casinoCards||[]).map((item:any,i:number)=>{
                return(
                    <div className="casino-list-item" onClick={()=>{
                      navigate(`/casino/${'teenjoker'}`)
                    }} style={{width:"100px",height:"100px"}}><div className="casino-list-item-banner" style={{backgroundImage:`url(${item?.img})`}}></div><div className="casino-list-name">Teenpatti Joker</div></div>
                )
            })
        }
    </div>
  )
}

export default CasinoComp