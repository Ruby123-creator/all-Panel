import React from "react";
interface Props {
  data?: any;
}
const Dragontiger20: React.FC<Props> = ({ data }) => {
  console.log(data, "CHECK");
  const table1 = data?.t1;
  const table2 = data?.t2;
  const cardValue = (data?.t3 || [])[0];
  return (
    <div className="casino-table dt20">
      <div className="casino-table-full-box">
        {(table1 || []).map((item: any, i: number) => {
          return (
            <div
              className={`dt20-odd-box dt20${(item?.nat || "").toLowerCase()}`}
            >
              <div className="casino-odds text-center">{item?.bp}</div>
              <div
                className={`casino-odds-box back casino-odds-box-theme ${
                  item?.status === "suspended" ? "suspended-box" : ""
                } `}
              >
                <span className="casino-odds">{item?.nat}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <h4 className="w-100 text-center mb-2">
            <b>DRAGON</b>
          </h4>
          {(table2 || []).slice(0, 4).map((item: any, i: number) => {
            return (
              <div className="dt20-odd-box dt20odds">
                <div className="casino-odds text-center">{item?.bp}</div>
                <div
                  className={`casino-odds-box back casino-odds-box-theme ${
                    item?.status === "suspended" ? "suspended-box" : ""
                  } `}
                >
                  <span className="casino-odds">
                    {(item?.nat || "").includes("Red") ||
                    (item?.nat || "").includes("Black") ? (
                      <>
                        {(item?.nat || "").includes("Red") ? (
                          <>
                            <img src="/assets/images/playingCards/heart.png" />
                            <img src="/assets/images/playingCards/diamond.png" />
                          </>
                        ) : (
                          <>
                            <img src="/assets/images/playingCards/club.png" />
                            <img src="/assets/images/playingCards/spade.png" />
                          </>
                        )}
                      </>
                    ) : (
                      (item?.nat || "").split(" ")[1]
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="casino-table-right-box">
          <h4 className="w-100 text-center mb-2">
            <b>TIGER</b>
          </h4>
          {(table2 || []).slice(4).map((item: any, i: number) => {
            return (
              <div className="dt20-odd-box dt20odds">
                <div className="casino-odds text-center">{item?.bp}</div>
                <div
                  className={`casino-odds-box back casino-odds-box-theme ${
                    item?.status === "suspended" ? "suspended-box" : ""
                  } `}
                >
                  <span className="casino-odds">
                    {(item?.nat || "").includes("Red") ||
                    (item?.nat || "").includes("Black") ? (
                      <>
                        {(item?.nat || "").includes("Red") ? (
                          <>
                            <img src="/assets/images/playingCards/heart.png" />
                            <img src="/assets/images/playingCards/diamond.png" />
                          </>
                        ) : (
                          <>
                            <img src="/assets/images/playingCards/club.png" />
                            <img src="/assets/images/playingCards/spade.png" />
                          </>
                        )}
                      </>
                    ) : (
                      (item?.nat || "").split(" ")[1]
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box">
          <div className="dt20cards">
            <h4 className="w-100 text-center mb-2">
              <b>DRAGON {cardValue?.status === "suspended" ? 0 : 12}</b>
            </h4>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((val, i) => {
              return (
                <div className="card-odd-box">
                  <div
                    className={`${
                      cardValue?.status === "suspended" ? "suspended-box" : ""
                    }`}
                  >
                    <img src={`/assets/images/AB_Images/${val}.jpg`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="casino-table-right-box">
          <div className="dt20cards">
            <h4 className="w-100 text-center mb-2">
              <b>TIGER {cardValue?.status === "suspended" ? 0 : 12}</b>
            </h4>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((val, i) => {
              return (
                <div className="card-odd-box">
                  <div
                    className={`${
                      cardValue?.status === "suspended" ? "suspended-box" : ""
                    }`}
                  >
                    <img src={`/assets/images/AB_Images/${val}.jpg`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="casino-remark mt-1"></div>
    </div>
  );
};

export default Dragontiger20;
