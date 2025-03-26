import React from "react";

interface Props{
  data?:any;
}
const Teen20C : React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const playerInfo = data?.t1||[]
  return (
    <div className="casino-table teenpatti20">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player A</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Player A</div>
              <div className="casino-odds-box">3 Baccarat A</div>
              <div className="casino-odds-box">Total A</div>
              <div className="casino-odds-box">Pair Plus A</div>
            </div>
            <div className="casino-table-row">
              {
                (playerInfo||[]).slice(0,4).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  )
                })
              }
             
              
            </div>
          </div>
        </div>
        <div className="teenpatti20-other-oods d-md-none">
          <div className="casino-table-left-box">
          {
                (playerInfo||[]).slice(8,10).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <div>
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/spade.png" />
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/club.png" />
              </div>
              <div>
                <span className="casino-odds">{item?.bp}</span>
              </div>
                   
                  </div>
                  )
                })
              }
           
            
          </div>
        </div>
        <div className="casino-table-right-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail">Player B</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row">
              <div className="casino-odds-box">Player B</div>
              <div className="casino-odds-box">3 Baccarat B</div>
              <div className="casino-odds-box">Total B</div>
              <div className="casino-odds-box">Pair Plus B</div>
            </div>
            <div className="casino-table-row">
            {
                (playerInfo||[]).slice(4,8).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <span className="casino-odds">{item?.bp}</span>
                  </div>
                  )
                })
              }
             
            </div>
          </div>
        </div>
        <div className="teenpatti20-other-oods d-md-none">
          <div className="casino-table-right-box">
          {
                (playerInfo||[]).slice(10,12).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <div>
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/spade.png" />
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/club.png" />
              </div>
              <div>
                <span className="casino-odds">{item?.bp}</span>
              </div>
                   
                  </div>
                  )
                })
              }
          </div>
        </div>
      </div>
      <div className="teenpatti20-other-oods d-none d-md-flex">
        <div className="casino-table-left-box">
        {
                (playerInfo||[]).slice(8,10).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <div>
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/spade.png" />
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/club.png" />
              </div>
              <div>
                <span className="casino-odds">{item?.bp}</span>
              </div>
                   
                  </div>
                  )
                })
              }
        </div>
        <div className="casino-table-right-box">
        {
                (playerInfo||[]).slice(10,12).map((item:any,i:number)=>{
                  return(
                    <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                    <div>
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/spade.png" />
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/icons/club.png" />
              </div>
              <div>
                <span className="casino-odds">{item?.bp}</span>
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

export default Teen20C;
