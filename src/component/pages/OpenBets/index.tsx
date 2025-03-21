import React from "react";
import SidebarComp from "../Home/sidebar";
import PanelComp from "../Home/panel";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import MatchedBets from "../../common/BettingWindow/matchedBet";
import { DatePicker, DatePickerProps, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { useCurrentBetsData } from "../../../Framework/placeBet";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {};
const onChange1 = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};
const OpenBets = () => {
  const { data } = useCurrentBetsData();

  return (
    <div className="center-main-container report-page">
      <div className="center-container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Current Bets</h4>
          </div>
          <div className="card-body">
            <div className="report-form">
              {/* <form className="row row5">
                <div className="col-lg-2 col-md-3">
                  <div className="mb-2 input-group position-relative">
                    <select className="form-select" name="gtype">
                      <option value="">Select Report Type</option>
                      <option value="1">Sports</option>
                      <option value="2">Casino</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 d-grid">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
              <div className="row row5 mt-2 justify-content-between align-items-center">
                <div className="col-lg-2 col-5">
                  <div className="mb-2 input-group position-relative">
                    <span className="me-2">Show</span>
                    <select className="form-select">
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                    <span className="ms-2">Entries</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-7 text-center">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="all"
                      name="filter"
                      value="all"
                    />
                    All
                    <label className="form-check-label" htmlFor="all"></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="back"
                      name="filter"
                      value="all"
                    />
                    Back
                    <label className="form-check-label" htmlFor="back"></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="lay"
                      name="filter"
                      value="all"
                    />
                    Lay
                    <label className="form-check-label" htmlFor="lay"></label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-left col-7">
                  <div>
                    Total Bets: <span className="me-2">0</span> Total Amount:{" "}
                    <span className="me-2">0</span>
                  </div>
                </div>
                <div className="col-lg-2 col-5">
                  <div className="mb-2 input-group position-relative">
                    <span className="me-2">Search:</span>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="0 records..."
                      value=""
                    />
                  </div>
                </div>
              </div> */}
              <div className="mt-2 table-responsive">
                <table
                  role="table"
                  className="table table-bordered table-striped"
                >
                  <thead>
                    <tr role="row">
                      <th colSpan={1} role="columnheader">
                        Event Name
                      </th>
                      <th colSpan={1} role="columnheader">
                        Nation
                      </th>
                      <th colSpan={1} role="columnheader">
                        Bet Type
                      </th>
                      <th colSpan={1} role="columnheader">
                        Market Type
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="report-amount text-end"
                      >
                        User Rate
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="report-amount text-end"
                      >
                        Amount
                      </th>
                      <th colSpan={1} role="columnheader">
                        Profit/Loss
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        className="report-date"
                      >
                        Place Date
                      </th>
                      <th colSpan={1} role="columnheader">
                        Section
                      </th>
                      {/* <th
                        colSpan={1}
                        role="columnheader"
                        className="report-action"
                      >
                        <div className="text-end">
                          <div className="form-check form-check-inline"></div>
                        </div>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody role="rowgroup">

                    {
                      (data||[]).map((bet:any,i:number)=>{
                        return(
                          <tr>
                          <td className="report-amount text-end">{bet.eventName}</td>
                          <td  className="report-amount text-end">{bet.nation}</td>
                          
                          <td  className="report-amount text-end">{bet.betTypes}</td>
                          <td  className="report-amount text-end">{bet.evetsType}</td>
                          <td  className="report-amount text-end">{bet.userRate}</td>
                                 
                          <td className="report-amount text-end"> ₹{bet.amount}</td>
                          <td  className="report-amount text-end">                     ₹ {(Number(bet.profitloss) || 0).toFixed(2)}
                          </td>
                          <td > {bet.MatchDate}</td>
                          <td> {bet.section}</td>

                        </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBets;
