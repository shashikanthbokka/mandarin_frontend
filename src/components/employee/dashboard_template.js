import React from "react";
import { Link } from "react-router-dom";
import "../employee/dashboard_template.css";
import PieChart from "../charts/pie";
import AreaChart from "../charts/area";
import ScoreIncreaseChart from "../charts/scores_area";

function DashboardTemplate() {
  return (
    <>
      <div class="main-part">
        <div class="grey-part">
          <Link to="/">
            <div className="logo-2">Mandarin</div>
          </Link>
          <div>
            <Link to="/dashboard_template">
              <div class="grey-part-content">DASHBOARD</div>
            </Link>
            <Link to="/personal_details">
              <div class="grey-part-content">PERSONAL DETAILS</div>
            </Link>
            <Link to="/target_updates">
              <div class="grey-part-content">TARGET UPDATES</div>
            </Link>
            <Link to="/task_guidelines">
              <div class="grey-part-content">TASK GUIDELINES</div>
            </Link>
            <Link to="/pms_update">
              <div class="grey-part-content">PMS UPDATE</div>
            </Link>
            <div class="grey-part-content">APPEARANCE</div>
          </div>
        </div>
        <div class="white-part">
          <h1 className="top-heading">Dashboard</h1>
          <div className="dt-top">
            <div className="pie-hod">
              <PieChart
                data={{
                  labels: ["Remaining Scores", "Obtained Scores"],
                  values: [100, 150],
                  bgclr: ["rgb(254, 205, 166)", "rgb(45, 50, 80)"],
                  grp: "",
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
                  total: [10, 5, 8, 7, 10, 10],
                  completed: [10, 0, 0, 7, 10, 10],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Research and Consultancy</label>

              <AreaChart
                data={{
                  labels: ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"],
                  total: [50, 70, 90, 80, 100, 120],
                  completed: [20, 40, 60, 70, 80, 100],
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
                  total: [50, 70, 90, 80, 100, 120, 140, 140],
                  completed: [20, 40, 60, 70, 80, 100, 120, 120],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Student Development</label>

              <AreaChart
                data={{
                  labels: ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"],
                  total: [50, 70, 90, 80, 100, 120],
                  completed: [20, 40, 60, 70, 80, 100],
                }}
              />
            </div>
            <div className="area-hod">
              <label>Institutional Development</label>

              <AreaChart
                data={{
                  labels: ["5.1", "5.2", "5.3", "5.4", "5.5"],
                  total: [50, 70, 90, 80, 100],
                  completed: [20, 40, 60, 70, 80],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemplate;
