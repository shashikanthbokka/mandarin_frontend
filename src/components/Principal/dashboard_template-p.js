import React from "react";
import { Link } from "react-router-dom";
import "../Principal/dashboard_template-p.css";
import PieChart from "../charts/pie";
import AreaChart from "../charts/area";
import ScoreIncreaseChart from "../charts/scores_area";
import LineChart from "../charts/line";

function DashboardTemplateP() {
  return (
    <>
      {/* <div class="navbar">
        
      </div> */}
      <div class="main-part">
        <div class="grey-part" id="p-dash">
          <Link to="/">
            <div className="logo-2">Mandarin</div>
          </Link>
          <div>
            <Link to="/dashboard_template-p">
              <div class="grey-part-content">DASHBOARD</div>
            </Link>
            <Link to="/personal_details-p">
              <div class="grey-part-content">PERSONAL DETAILS</div>
            </Link>
            <Link to="/target_updates-p">
              <div class="grey-part-content">TARGET UPDATES</div>
            </Link>
            <Link to="/task_guidelines-p">
              <div class="grey-part-content">TASK GUIDELINES</div>
            </Link>
            <Link to="/pms_update-p">
              <div class="grey-part-content">PMS UPDATE</div>
            </Link>
            {/* <div class="grey-part-content">APPEARANCE</div> */}
          </div>
        </div>
        <div class="white-part">
          <h1 className="top-heading">Dashboard</h1>
          <div className="dt-top">
            <div className="pie-hod">
              {/* <div className="heading-targets">Overall targets</div> */}
              <PieChart
                data={{
                  labels: [
                    "CSE",
                    "ECE",

                    "EEE",
                    "MECH",
                    "CIVIL",
                    "IT",
                    "CSM",

                    "CSD",
                    "CSBS",
                    "AIDS",
                  ],
                  values: [
                    1250, 1250, 1250, 1250, 1250, 1250, 1000, 1000, 1000, 1000,
                  ],
                  bgclr: [
                    "rgb(118, 69, 59)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                    "rgb(247, 39, 152)",
                    "rgb(167, 209, 41)",
                    "rgb(8, 2, 163)",
                    "rgb(255, 237, 0)",
                    "rgb(255, 23, 0)",
                    "rgb(48, 77, 48)",
                    "rgb(252, 103, 54)",
                  ],
                  grp: "Branches",
                }}
              />
            </div>
            <div className="score-area-hod">
              <ScoreIncreaseChart />
            </div>
          </div>

          <div className="areas-hod">
            <div className="area-hod">
              <label>Computer Science and Engineering</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(118, 69, 59,0.2)",

                  borderclr: "rgb(118, 69, 59)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Electronics and Communication Engineering</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(75, 192, 192,0.2)",

                  borderclr: "rgba(75, 192, 192)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Electrical and Electronics Engineering</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(153, 102, 255,0.2)",
                  borderclr: "rgba(153, 102, 255)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Mechanichal Engineering</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(247, 39, 152,0.2)",

                  borderclr: "rgb(247, 39, 152)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Civil Engineering</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(167, 209, 41,0.2)",

                  borderclr: "rgb(167, 209, 41)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Information Technology</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgba(8, 2, 163,0.2)",

                  borderclr: "rgb(8, 2, 163)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Computer Science and Engineeri(AI & ML)</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgb(255, 237, 0,0.2)",
                  borderclr: "rgb(255, 237, 0)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Computer Science and Engineering(Data Science)</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgb(255, 23, 0,0.2)",
                  borderclr: "rgb(255, 23, 0)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Computer Science and Bussiness Systems</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgb(48, 77, 48,0.2)",

                  borderclr: "rgb(48, 77, 48)",
                }}
              />
            </div>
            <div className="area-hod">
              <label>Artificial Intelligence and Data Science</label>

              <LineChart
                data={{
                  labels: ["T&L", "R&C", "PD", "SD", "ID"],
                  total: [50, 60, 160, 120, 150],
                  completed: [50, 50, 130, 70, 100],
                  bgclr: "rgb(252, 103, 54,0.2)",

                  borderclr: "rgb(252, 103, 54)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemplateP;
