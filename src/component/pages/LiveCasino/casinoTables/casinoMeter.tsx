import React from "react";

interface Props {
  data?: any;
}
const CasinoMeter: React.FC<Props> = ({ data }) => {
  console.log(data, "CHECK");
  return (
    <div className="casino-table cmeter">
      <div className="casino-table-full-box">
        <div className="cmeter-video-cards-box">
          <div className="cmeter-low">
            <div>
              <span className="text-fancy">Low</span>
              <span className="ms-2 text-success">
                <b> 33</b>
              </span>
            </div>
            <div className="cmeter-low-cards">
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6SS.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3DD.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/ADD.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2CC.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6CC.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2HH.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/ACC.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4SS.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7HH.jpg" />
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/ASS.jpg" />
            </div>
          </div>
          <div className="cmeter-high">
            <div>
              <span className="text-fancy">High</span>
              <span className="ms-2 text-success">
                <b> 13</b>
              </span>
            </div>
            <div className="cmeter-high-cards">
              <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/KHH.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="casino-table-box mt-3">
        <div className="casino-table-left-box suspended-box">
          <div className=" text-center">
            <b className="text-info">Low</b>
          </div>
          <div className="cmeter-card-box mt-2">
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/A.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/2.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/3.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/4.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/5.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/6.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/7.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/8.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/9.png" />
              </div>
            </div>
          </div>
          <div className="casino-nation-book text-center mt-2"></div>
        </div>
        <div className="casino-table-right-box suspended-box">
          <div className=" text-center">
            <b className="text-info">High</b>
          </div>
          <div className="cmeter-card-box mt-2">
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/10.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/J.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/Q.png" />
              </div>
            </div>
            <div className="card-odd-box">
              <div className="">
                <img src="https://versionobj.ecoassetsservice.com/v36/static/front/img/cards/K.png" />
              </div>
            </div>
          </div>
          <div className="casino-nation-book text-center mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CasinoMeter;
