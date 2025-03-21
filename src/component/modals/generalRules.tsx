import { Collapse, CollapseProps } from "antd";
import React from "react";

const tabs = [
  {
    title: "Football",
  },
  {
    title: "HorseRacing",
  },
  {
    title: "E Games",
  },
  {
    title: "Basketball",
  },
  {
    title: "MotoGP",
  },
  {
    title: "Chess",
  },
  {
    title: "Volleyball",
  },
  {
    title: "Ice Hockey",
  },
  {
    title: "Tennis",
  },
  {
    title: "Badminton",
  },
  {
    title: "Cycling",
  },
  {
    title: "Mixed Martial Arts",
  },
  {
    title: "Motor Bikes",
  },
  {
    title: "Athletics",
  },
  {
    title: "Sumo",
  },

  {
    title: "Cricket",
  },
  {
    title: "American Football",
  },
  {
    title: "Soccer",
  },
];
const GeneralRules: React.FC = () => {
  const onChange = (key: string | string[]) => {};
  return (
    <div>
      <div className="rules-left-sidebar">
        <div className="nav nav-pills" role="tablist">
          <div className="nav-item">
            {(tabs || []).map((item: any, i: number) => {
              return (
                <a
                  role="tab"
                  data-rr-ui-event-key={i}
                  id={`tules-tabs-tab-${i}`}
                  aria-controls={`tules-tabs-tabpane-${i}`}
                  aria-selected="false"
                  className="nav-link"
                  tabIndex={-1}
                  href="#"
                >
                  {item?.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="rules-content">
        <div className="tab-content">
          <div
            role="tabpanel"
            id="tules-tabs-tabpane-0"
            aria-labelledby="tules-tabs-tab-0"
            className="fade tab-pane"
          >
            <div className="rules-content-title">bookmaker</div>
            <div className="rules-content-desc">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <span className="">
                          If the match will not take place within 48 hours of
                          the original kick-off time bets will be void.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          If the selection is in a multiple bet or accumulator
                          any refund must be requested before kick-off of the
                          first leg of the multiple bet.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          Where a confirmed postponed match features as part of
                          a multiple bet, the bet will stand on the remaining
                          selections in the multiple.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Please note that games which have their kick-off
                          altered well in advance to accommodate live TV, or to
                          ease fixture congestion will not be classed as
                          postponed.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          If a match is forfeited or a team is given a walkover
                          victory without the match having kicked off, then all
                          bets will be void. Any subsequently awarded scoreline
                          will not count for settlement purposes.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rules-content-title">fancy</div>
            <div className="rules-content-desc">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-danger">
                          Tournament Total Goals, Team Total Goals goals. scored
                          in 90 minutes or in extra-time will count.Goals scored
                          in penalty shootouts do not count.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          Tournament Corners - Only corners taken in 90 minutes
                          count.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          Tournament Penalties Missed/Converted - Penalties
                          taken in 90 minutes, extra-time and penalty shootouts
                          all count. If a penalty has to be re-taken the
                          previous disallowed penalty(ies) do not count.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rules-content-title">match</div>
            <div className="rules-content-desc">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <span className="">
                          Match Odds :- All bets apply to the relevant full
                          'regular time' period including stoppage time. Any
                          extra-time and/or penalty shoot-out is not included.
                          For the cancellation of a goal, due to VAR, bets
                          matched between the time of the goal being scored and
                          the time at which the video assistant referee finishes
                          the review will be voided. For the cancellation of a
                          red card, due to VAR, bets matched after the time at
                          which the video assistant referee commences the review
                          will be voided.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Under_Over Goals :- In the event of a match starting
                          but not being completed, all bets will be void, unless
                          the specific market outcome is already determined,
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          1st Period Winner :- Bets will be void if the match is
                          abandoned before half-time.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Next Goal :- Own goals count to the side credited with
                          the goal.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Draw No Bet :- Predict which team will be the winner.
                          In case of a draw, all bets will be void. If a game is
                          abandoned, bets will be void.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Both Teams to Score :- Predict whether both teams will
                          score at least one goal in the game. Own goals count
                          towards the team credited with the goal. If a game is
                          abandoned, bets will be void, unless the outcome of
                          these bets is already determined. Yes” – meaning that
                          both teams will score. “No” – meaning that either team
                          will not score.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Total Corners :- Predict which team will take the
                          named corner in the game. If this specific corner is
                          not taken in the game, bets will be void. For example,
                          game finishes or is abandoned with 8 corners taken –
                          all bets on any corner after the 8th will be void
                          (9th, 10th, etc.).
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Goals Odd/Even :- Any match resulting in 0-0 will be
                          settled on an even number of goals. For Team Odd/Even
                          markets, if the specified team does not score then we
                          will settle on an even number of goals. In the event
                          of an abandoned match then bets for that match will be
                          void.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          1X2 Corners :- Predict which team will get more
                          corners in a match. Awarded, but not taken corners
                          (there is a corner, but before it is taken the referee
                          signals for the end of the first half or the match)
                          will not count for settlement purposes. Also if a
                          corner needs to be re-taken for any reason, it will be
                          counted as 1 corner.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Under/Over Card in Match (Number of cards) :- Predict
                          the number of the cards which will be shown in a
                          match. If a player is sent off for 2 yellow cards,
                          this counts as 2 yellow cards and 1 red card for
                          betting purpose es. If the match is abandoned for any
                          reason, all bets will be void unless market is already
                          determined, e.g. Team 1 over 2,5 yellow cards - 3
                          yellow cards awarded to Team 1 before abandonment is
                          settled as a winner. Cards for non-players (already
                          substituted players, managers, players on bench which
                          are not substituted in) are not considered. Settlement
                          will be made with reference to all available evidence
                          to cards shown during the scheduled 90 minutes play.
                          Any card shown after the full-time whistle blow will
                          be disregarded.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          First Half Under/Over Goals :- How many goals will be
                          scored in this first half of this match? All bets
                          apply to Full Time according to the match officials,
                          plus any stoppage time. Extra-time/penalty shoot-outs
                          are not included.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Penalty Taken? :- Will a penalty be awarded and taken
                          during this match? All bets apply to Full Time
                          according to the match officials, plus any stoppage
                          time. Extra-time/penalty shoot-outs are not included.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Correct Score :- Predict the score of this match. This
                          market will not be partially settled during the
                          fixture and will be fully settled at full time. All
                          bets apply to Full Time according to the match
                          officials, plus any stoppage time. Extra-time/penalty
                          shoot-outs are not included.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Corners Number/Odds : - How many corners will be taken
                          in the match? Only corners that are taken will be
                          counted. All bets apply to Full Time according to the
                          match officials, plus any stoppage time.
                          Extra-time/penalty shoot-outs are not included.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          Team_A/B +1/2/3 : - Who will win this match with the
                          stated handicap applied? All bets apply to Full Time
                          according to the match officials, plus any stoppage
                          time. Extra-time/penalty shoot-outs
                          are&nbsp;not&nbsp;included.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          HT/FT :- Bets will be void if the match is abandoned.
                          Extra-time and penalty shootouts do not count.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-danger">
                          Company reserves the right to suspend/void any id/bets
                          if the same is found to be illegitimate. For example
                          incase of VPN/robot-use/multiple entry from same or
                          different IP and others. Note : only winning bets will
                          be voided.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="">
                          for live streaming and animation :- Although the
                          current score, time elapsed, video and other data
                          provided on this site is sourced from "live" feeds
                          provided by third parties, you should be aware that
                          this data may be subject to a time delay and/or be
                          inaccurate. Please also be aware that other customers
                          may have access to data that is faster and/or more
                          accurate than the data shown on the site. If you rely
                          on this data to place bets, you do so entirely at your
                          own risk. provides this data AS IS with no warranty as
                          to the accuracy, completeness or timeliness of such
                          data and accepts no responsibility for any loss
                          (direct or indirect) suffered by you as a result of
                          your reliance on it.{" "}
                        </span>
                      </td>
                    </tr>
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

export default GeneralRules;
