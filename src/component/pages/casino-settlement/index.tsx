import React, { useCallback, useState } from "react";

import { DatePicker, DatePickerProps } from "antd";
import { format, subDays } from "date-fns";
import { useUI } from "../../../context/ui.context";
import dayjs from "dayjs";
import Settlements from "./settlements";
import { useCasinoSettlement } from "../../../Framework/casino";

const getFormattedDate = (daysAgo: number) =>
  format(subDays(new Date(), daysAgo), "yyyy-MM-dd");
const CasinoSettlement = () => {
  const { userData } = useUI();
  const [startDate, setStartDate] = useState(getFormattedDate(7));
  const [endDate, setEndDate] = useState(getFormattedDate(0));
  const [days, setDays] = useState(0);
  const val = {
    startDate,
    endDate,
    userName: userData?.UserName,
  };
  const [payload, setPayload] = useState(val);
  // useEffect(() => {
  //   setStartDate(getFormattedDate(days));
  //   setEndDate(getFormattedDate(0));
  // }, [days]);

  const { data, isError, isLoading } = useCasinoSettlement(payload);
  console.log(data, "establishh");
  const fromDate: DatePickerProps["onChange"] = useCallback(
    (date: { toDate: () => string | number | Date }) => {
      console.log(date, "shimanuuu");
      if (date) {
        setStartDate(format(date.toDate(), "yyyy-MM-dd"));
      }
    },
    []
  );

  const EndDate: DatePickerProps["onChange"] = useCallback(
    (date: { toDate: () => string | number | Date }) => {
      console.log(date, "shimanuuu");
      if (date) {
        setEndDate(format(date.toDate(), "yyyy-MM-dd"));
      }
    },
    []
  );
  console.log(startDate, endDate, "pitaaaaa");
  return (
    <div className="center-main-container report-page">
      <div className="center-container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Live Casino Bets</h4>
          </div>
          <div className="card-body">
            <div className="report-form">
              <form className="row row5">
                <div className="col-lg-2 col-md-3 col-6">
                  <div className="mb-2 input-group position-relative">
                    <select className="form-select" name="reportType">
                      <option value="">Select Report Type</option>
                      <option value="sattled">Settled</option>
                      <option value="un-sattled">Un-Settled</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <div className="react-datepicker-wrapper">
                 
                    <DatePicker   value={startDate ? dayjs(startDate) : null} 
 onChange={fromDate} className="w-full" />
                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-3 col-12">
                  <div className="mb-2 input-group position-relative">
                    <select className="form-select" name="type">
                      <option value="">Select Casino Type</option>
                      <option value="ezugi">Ezugi</option>
                      <option value="ss">Super Spade</option>
                      <option value="qt">Slot 3</option>
                      <option value="evo">Evolution</option>
                      <option value="cockfight">CockFight</option>
                      <option value="ludo">Ludo Classic</option>
                      <option value="pop-the-ball">PopTheBall</option>
                      <option value="binary">Binary</option>
                      <option value="tgs">Slot 2</option>
                      <option value="slot">Slot</option>
                      <option value="tgslive">LuckyStreak</option>
                      <option value="rummy">Rummy</option>
                      <option value="ludo-lands">Ludo Lands</option>
                      <option value="vivo">vivo gaming</option>
                      <option value="snakes-and-ladders">
                        snakes and ladders
                      </option>
                      <option value="bc">Creedroomz</option>
                      <option value="smart">Smart Soft</option>
                      <option value="astar">Astar Game</option>
                      <option value="ds">Dragoon soft</option>
                      <option value="tembo">Tembo</option>
                      <option value="av">Aviator</option>
                      <option value="bcslot">Pascal Game</option>
                      <option value="lottery">Lottery</option>
                      <option value="scratch">Scratch</option>
                      <option value="darwin">Darwin</option>
                      <option value="pg">Pocket Game</option>
                      <option value="bet">Bet Core</option>
                      <option value="jilli">Jili</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-lg-2 col-md-2 d-grid">
                  <button type="submit" className="btn btn-primary btn-block"  onClick={()=>{
                  setPayload({
                    startDate,
                    endDate,userName: userData?.UserName
                  })
                }}>
                    Submit
                  </button>
                </div>
              </form>
            
              {
                (data||[])?.length ? <Settlements data={data}/>: 
                
                
            <div>
                
               No data found for selected date range...
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoSettlement;
