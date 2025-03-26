import React from "react";
interface Props{
  data?:any
}
const reduceData = (data:any)=>{
  const groupedData = data.reduce((acc:any, item:any) => {
    // Extract category and type (e.g., "Straight" and "Tiger")
    const [category, type] = item.nat.split(" ");

    // Find or create the object for this category
    let obj = (acc||[]).find((o: { natname: any; }) => o.natname === category);
    if (!obj) {
        obj = { natname: category };
        acc.push(obj);
    }

    // Assign values dynamically
    obj[`${type.toLowerCase()}bp`] = item.bp;
    obj[`${type.toLowerCase()}status`] = item.status;

    return acc;
}, []);
return groupedData;
}
const Teen9 :React.FC<Props> = ({data}) => {
  const playerInfo = data?.t1 || [];
 
  
    const tableData = reduceData(playerInfo)
    console.log(data, playerInfo, "CHECK::::::::::::::::");
  return (
    <div className="casino-table">
      <div className="casino-table-full-box">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box back">Tiger</div>
          <div className="casino-odds-box back">Lion</div>
          <div className="casino-odds-box back">Dragon</div>
        </div>
        <div className="casino-table-body">
          {
            (tableData||[])?.map((item:any,i:number)=>{
              return(
<div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">{item?.natname}</div>
            </div>
            <div className={`casino-odds-box back ${item?.tigerstatus === "suspended" ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.tigerbp}</span>
            </div>
            <div className={`casino-odds-box back ${item?.lionstatus === "suspended" ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.lionbp}</span>
            </div>
            <div className={`casino-odds-box back ${item?.dragonstatus === "suspended" ? 'suspended-box':''}`}>
              <span className="casino-odds">{item?.dragonbp}</span>
            </div>
           
          </div>
              )
            })
          }
          
          
        </div>
      </div>
    </div>
  );
};

export default Teen9;
