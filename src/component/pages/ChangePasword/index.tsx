import React from "react";

import Password from "./password";

const Chnage_Password = () => {
  return (
    <div className="center-main-container report-page">
      <div className="center-container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Change Password</h4>
          </div>

          <div className="card-body">
           <Password/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chnage_Password;
