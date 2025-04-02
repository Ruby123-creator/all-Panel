import React from "react";
interface Props{
  data?:any;
}
const OnedayDragonTiger :React.FC<Props> = ({data}) => {
  console.log(data,"CHECK");
  const table1 = data?.t1;
  const table2 = data?.t3;
  const table3 = data?.t4;
  const table4 = data?.t5;
  return (
    <div className="casino-table dt1day">
      <div className="casino-table-box">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Back</div>
            <div className="casino-odds-box lay">Lay</div>
          </div>
          <div className="casino-table-body">
            {
              (table1).slice(0,2).map((item:any,i:number)=>{
                return(
                  <div className="casino-table-row ">
                <div className="casino-nation-detail">
                  <div className="casino-nation-name">{item?.nat}</div>
                </div>
                <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                  <span className="casino-odds">{item?.bp}</span>
                </div>
                <div className={`casino-odds-box lay ${item?.status === "suspended" ? 'suspended-box':''}`}>

                  <span className="casino-odds">{item?.lp}</span>
                </div>
              </div>
                )
              })
            }
           
           
          </div>
        </div>
        <div className="casino-table-right-box dtpair">
          {
            (table1).slice(2).map((item:any,i:number)=>{
              return<>
              <div className="casino-odds text-center">{item?.bp}</div>
          <div className={`casino-odds-box back casino-odds-box-theme ${item?.status === "suspended" ? 'suspended-box':''}`}>
            <span className="casino-odds">{item?.nat}</span>
          </div>
              </>
            })
          }
          
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">Even</div>
            <div className="casino-odds-box back">Odd</div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Dragon</div>
              </div>
              
                  {
                    (table2).slice(0,2).map((item:any,i:number)=>{
                      return(
                       <>
                <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
                       </>
                      )
                    })
                  }
              
             
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Tiger</div>
              </div>
             
              {
                    (table2).slice(2).map((item:any,i:number)=>{
                      return(
                       <>
                <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
                       </>
                      )
                    })
                  }
            </div>
          </div>
        </div>
        <div className="casino-table-right-box dtredblack">
          <div className="casino-table-header">
            <div className="casino-nation-detail"></div>
            <div className="casino-odds-box back">
              <span>Red</span>
              <img src="/assets/images/playingCards/heart.png" width={15}/>
              <img src="/assets/images/playingCards/diamond.png" width={15}/>
            </div>
            <div className="casino-odds-box back">
              <span>Black</span>
              <img src="/assets/images/playingCards/club.png" width={15}/>
              <img src="/assets/images/playingCards/spade.png" width={15}/>
            </div>
          </div>
          <div className="casino-table-body">
            <div className="casino-table-row ">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Dragon</div>
              </div>

              {
                    (table3).slice(0,2).map((item:any,i:number)=>{
                      return(
                       <>
                <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
                       </>
                      )
                    })
                  }
            </div>
            <div className="casino-table-row">
              <div className="casino-nation-detail">
                <div className="casino-nation-name">Tiger</div>
              </div>
              {
                    (table3).slice(2).map((item:any,i:number)=>{
                      return(
                       <>
                <div className={`casino-odds-box back ${item?.status === "suspended" ? 'suspended-box':''}`}>
                <span className="casino-odds">{item?.bp}</span>
              </div>
             
                       </>
                      )
                    })
                  }
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-full-box dt1day-other-odds mt-3">
        <div className="casino-table-header">
          <div className="casino-nation-detail"></div>
          <div className="casino-odds-box">
            <span className="card-icon ms-1">
              <span className="card-black "></span>
            </span>
          </div>
          <div className="casino-odds-box">
            <span className="card-icon ms-1">
              <span className="card-red "></span>
            </span>
          </div>
          <div className="casino-odds-box">
            <span className="card-icon ms-1">
              <span className="card-black "></span>
            </span>
          </div>
          <div className="casino-odds-box">
            <span className="card-icon ms-1">
              <span className="card-red "></span>
            </span>
          </div>
        </div>
        <div className="casino-table-body">
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Dragon</div>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
          </div>
          <div className="casino-table-row">
            <div className="casino-nation-detail">
              <div className="casino-nation-name">Tiger</div>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
            <div className="casino-odds-box back suspended-box">
              <span className="casino-odds">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnedayDragonTiger;
