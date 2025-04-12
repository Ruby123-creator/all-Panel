import React, { useState } from 'react'

import { format, parseISO } from 'date-fns';


interface Props{
  data?: any;
}
const Settlements : React.FC<Props> = ({data}) => {
  const [open,setOpen] = useState(true);
  console.log(data,"establis");
  const formattedDate = (dateStr:string)=>{
    const cleanDateStr = dateStr.replace(/\[.*?\]/g, "");

// Convert to UTC and then to the desired time zone
// Parse the date directly
const parsedDate = new Date(cleanDateStr);

// Format the date into dd/MM/yyyy HH:mm:ss
const formattedDate = format(parsedDate, "dd/MM/yyyy HH:mm:ss");
return formattedDate;
  }
  return (
    
    <div className=" w-full  gap-1 py-5">
                 
      {
            (data||[])?.length ?   
                    <div className="mt-2 table-responsive">
            <table  role="table"
                  className="table table-bordered table-striped">
              
              <thead className=" text-text_Quaternary text-xs bg-bg_Secondary">
                <tr>
                <th  colSpan={1} role="columnheader">S.no</th>
                  <th  colSpan={1} role="columnheader">Id</th>
                 
                 
                  <th  colSpan={1} role="columnheader">Amount</th>
                  <th  colSpan={1} role="columnheader">Balance</th>
                  <th  colSpan={1} role="columnheader">Time</th>
                  <th  colSpan={1} role="columnheader">Game Category</th>
                  <th  colSpan={1} role="columnheader">Type</th>
                 
                  <th  colSpan={1} role="columnheader">GameRoundId</th>
                  <th  colSpan={1} role="columnheader">Status</th>
                
                </tr>
              </thead>
              <tbody>
                {(data||[]).map((casino:any, index:number) => (
                  <tr
                    key={"currentBets"+index}
                    className="border-b text-xs"
                  >
                    <td className="p-2">{index+1}</td>
                    <td className="p-2"> {casino?.gameId}</td>

                    <td className=" p-2">₹{Number(casino?.amount)*10}</td>
                    <td className="p-2">₹{Number(casino?.balance)*10}</td>
                    
                   
                    <td className="p-2">{formattedDate(casino?.created)}</td>
                   
                    <td className="p-2"> {casino?.gameCategory}</td>
                   
                  
                    <td className="p-2"> {casino?.type}</td>
                    <td className="p-2"> {casino?.playerGameRoundId}</td>
                    <td className="p-2">{casino?.roundStatus}</td>

                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         : <div>
            You have no Matched Bets.
          </div>
          }
    </div>
  
  )
}

export default Settlements