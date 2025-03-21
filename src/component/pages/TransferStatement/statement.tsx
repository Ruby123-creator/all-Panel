import React, { useState } from "react";
import { useCurrentBetsData } from "../../../Framework/placeBet";

interface Props {
  data?: any;
}
const Statements: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true);
  console.log(data, "establis");
  return (
    <div className="mt-2 table-responsive">
      <table role="table" className="table table-bordered table-striped">
        <thead>
          <tr role="row">
            <th colSpan={1} role="columnheader" className="report-sr text-end">
              Sr no
            </th>
            <th
              colSpan={1}
              role="columnheader"
              className="report-amount text-end"
            >
              Credit
            </th>
            <th
              colSpan={1}
              role="columnheader"
              className="report-amount text-end"
            >
              Debit
            </th>
            <th
              colSpan={1}
              role="columnheader"
              className="report-amount text-end"
            >
              Balance
            </th>
            <th colSpan={1} role="columnheader" className="report-date">
              Date
            </th>
            <th colSpan={1} role="columnheader">
              Remark
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {(data || []).map((bet: any, i: number) => {
            return (
              <tr>
                <td className=" text-end">{bet.index}</td>
                <td  className="report-amount text-end">₹{bet.credit}</td>
                <td  className="report-amount text-end">₹{bet.debit}</td>
                <td  className="report-amount text-end">₹{bet.balance}</td>
                       
                <td > {bet.time}</td>
                <td> {bet.details}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
   
  );
};

export default Statements;
