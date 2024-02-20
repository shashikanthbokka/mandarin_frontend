import React from "react";
import { Link } from "react-router-dom";
import "../HOD/dashboard_template-hod.css";
import PieChart from "../charts/pie";
import AreaChart from "../charts/area";
import ScoreIncreaseChart from "../charts/scores_area";

function DashboardTemplateHOD() {
  return (
    <>
      {/* <div class="navbar">
        
      </div> */}
      <div class="main-part">
        <div class="grey-part">
          <Link to="/">
            <div className="logo-2">Mandarin</div>
          </Link>
          <div>
            <Link to="/dashboard_template-hod">
              <div class="grey-part-content">DASHBOARD</div>
            </Link>
            <Link to="/personal_details-hod">
              <div class="grey-part-content">PERSONAL DETAILS</div>
            </Link>
            <Link to="/target_updates-hod">
              <div class="grey-part-content">TARGET UPDATES</div>
            </Link>
            <Link to="/task_guidelines-hod">
              <div class="grey-part-content">TASK GUIDELINES</div>
            </Link>
            <Link to="/pms_update-hod">
              <div class="grey-part-content">PMS UPDATE</div>
            </Link>
            <div class="grey-part-content">APPEARANCE</div>
          </div>
        </div>
        <div class="white-part">
          <h1 className="top-heading">Dashboard</h1>
          <div className="dt-top">
            <div className="pie-hod">
              {/* <div className="heading-targets">Overall targets</div> */}
              <PieChart
                data={{
                  labels: ["Remaining Scores", "Obtained Scores"],
                  values: [100, 150],
                  bgclr: ["rgb(254, 205, 166)", "rgb(45, 50, 80)"],
                  grp: "Branch",
                }}
              />
            </div>
            <div className="score-area-hod">
              <ScoreIncreaseChart />
            </div>
          </div>

          <div className="areas-hod">
            <div className="area-hod">
              <label>Teaching and Learning</label>

              <AreaChart
                data={{
                  labels: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"],
                  total: [5, 6, 16, 12, 15, 6],
                  completed: [5, 5, 13, 7, 10, 4],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Research and Consultancy</label>

              <AreaChart
                data={{
                  labels: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"],
                  total: [15, 5, 15, 5, 5, 5],
                  completed: [14, 4, 13, 4, 4, 5],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Professional Development</label>

              <AreaChart
                data={{
                  labels: [
                    "3.1",
                    "3.2",
                    "3.3",
                    "3.4",
                    "3.5",
                    "3.6",
                    "3.7",
                    "3.8",
                  ],
                  total: [15, 10, 10, 10, 3, 4, 5, 3],
                  completed: [14, 9, 8, 7, 2, 4, 4, 1],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Student Development</label>

              <AreaChart
                data={{
                  labels: ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"],
                  total: [10, 8, 6, 6, 5, 5],
                  completed: [9, 5, 6, 4, 5, 5],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Institutional Development</label>

              <AreaChart
                data={{
                  labels: ["5.1", "5.2", "5.3", "5.4", "5.5"],
                  total: [10, 5, 8, 7, 10],
                  completed: [10, 4, 6, 7, 8],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemplateHOD;
