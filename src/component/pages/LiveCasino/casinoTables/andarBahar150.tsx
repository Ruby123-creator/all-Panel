import React from "react";
interface Props{
  data?:any
}
const AndarBahar150 :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK")
  const andar = (data?.t1||[]).filter((val:any)=>((val?.nat||"").includes('Andar')||(val?.nat||"").includes('ANDAR')));
  const bahar = (data?.t1||[]).filter((val:any)=>((val?.nat||"").includes('Bahar')||(val?.nat||"").includes('BAHAR')));
  return (
    <div className="casino-table ab ab3">
      <div className="casino-table-box">
        <div className="andar-box suspended-box">
          <div className="ab-title">ANDAR</div>
          <div className="ab-cards">
            {
              (andar||[]).map((item:any,i:number)=>{
                return(
                  <div className="card-odd-box">
                  <div className="casino-odds">{item?.frq}</div>
                  <div className="">
                    <img src={`/assets/images/AB_Images/${item?.icon}.jpg`} />
                  </div>
                  <div className="casino-nation-book"></div>
                </div>
                )
              })
            }
           
           
          </div>
        </div>
        <div className="bahar-box">
          <div className="ab-title">BAHAR</div>
          <div className="ab-cards">
          {
              (bahar||[]).map((item:any,i:number)=>{
                return(
                  <div className="card-odd-box">
                  <div className="casino-odds">{item?.frq}</div>
                  <div className="">
                    <img src={`/assets/images/AB_Images/${item?.icon}.jpg`} />
                  </div>
                  <div className="casino-nation-book"></div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndarBahar150;
