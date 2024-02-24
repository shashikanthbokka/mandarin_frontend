import React from "react";
import { Link } from "react-router-dom";
import "../HOD/personal_details-hod.js";
import { useTheme } from "./ThemeContext";

function PersonalDetailsHOD() {
  // const { isDarkMode, toggleMode } = useTheme();

  return (
    // <div className={isDarkMode ? "dark-mode" : "light-mode"}>
    <div>
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
            {/* <div class="grey-part-content">APPEARANCE</div> */}
          </div>
        </div>
        <div class="white-part-1">
          <div className="pd-heading">Basic Details</div>
          <div className="pd-body">
            <div className="pd-values">
              <div id="pd-1">Full Name :</div>
              <div className="pd-value">Uday Kiran Goru</div>
            </div>
            <div className="pd-values">
              <div id="pd-2">Date of Birth :</div>
              <div className="pd-value">13/12/2002</div>
            </div>
            <div className="pd-values">
              <div id="pd-3">Gender :</div>
              <div className="pd-value">Male</div>
            </div>
            <div className="pd-values">
              <div id="pd-4">Department :</div>
              <div className="pd-value">
                Computer Science and Engineering (AI&ML)
              </div>
            </div>
            <div className="pd-values">
              <div id="pd-5">EMP ID :</div>
              <div className="pd-value">20211A6612</div>
            </div>
            <div className="pd-values">
              <div id="pd-6">Address:</div>
              <div className="pd-value">
                Hno 6 79 10 8 7th Cross Itw Signode Colony Beeramguda,
                Hyderabad, Sanga Reddy, Telangana, India, 502032
              </div>
            </div>
            <div className="pd-values">
              <div id="pd-7">Blood Group :</div>
              <div className="pd-value">B+</div>
            </div>
            <div className="pd-values">
              <div id="pd-8">Phone Number :</div>
              <div className="pd-value">+91 8919842672</div>
            </div>
            <div className="pd-values">
              <div id="pd-9">Personal Email :</div>
              <div className="pd-value">udaykiran.g@bvrit.ac.in</div>
            </div>
          </div>
          <button id="pd-btn">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsHOD;
