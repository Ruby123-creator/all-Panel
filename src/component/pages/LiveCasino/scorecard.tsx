import React from 'react'

const ScorecardBoard = () => {
    const data = [
        "IND",
        "2-0",
        "(0.1)",
        "CRR",
        "8.00",
        "AUS",
        "0-0",
        "(0.0)",
        "2"
    ]
    const board = {
        team1: data[0],
        team1Score: `${data[1]} ${data[2]}`,
        team2: data[5],
        team2Score: `${data[6]} ${data[7]}`,
        crrName: `${data[3]} ${data[4]}`
    }
  return (
    <div className="scorecard mb-1">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="team-1 row">
                  <span className="team-name col-3">ENG</span>
                  <span className="score col-4 text-end">9-2 (0.4)</span>
                  <span className="team-name col-5">
                    <span>CRR 13.50 </span>
                  </span>
                </p>
                <p className="team-1 row mt-2">
                  <span className="team-name col-3">RSA</span>
                  <span className="score col-4 text-end">0-0 (0.0)</span>
                  <span className="team-name col-5"></span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="text-xl-end"></div>
                    <div className="row">
                      <div className="col-12">
                        <p className="text-xl-end ball-by-ball mt-2">
                          <span className="ball-runs six">6</span>
                          <span className="ball-runs">3</span>
                          <span className="ball-runs">W</span>
                          <span className="ball-runs">W</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ScorecardBoard