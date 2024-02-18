import React from "react";
import { Link } from "react-router-dom";
import "../main_screens/guidelines_template.css";

function GuidelinesTemplate() {
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
        <div className="gt-white-part">
          <h2>1.1 New Course Design/Lab Experiment</h2>
          <div className="gt-inputs">
            <div className="gt-input">
              <label class="container">
                Under Graduate
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                Post Graduate
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="gt-input">
              <label>Select Type *</label>

              <select name="typeofcourse">
                <option>New Course</option>
                <option>Lab Experiment</option>
              </select>
            </div>
            <div className="gt-input">
              <label>Course/Subject *</label>
              <input type="text" name="subject" />
            </div>

            <div className="gt-input">
              <label>Framed to which Department * </label>

              <select name="department">
                <option value="CSE">Computer Science and Engineering</option>
                <option value="CSM">
                  Computer Science and Engineering (AI & ML)
                </option>
                <option value="CSD">
                  Computer Science and Engineering (Data Science)
                </option>
                <option value="CSBS">
                  Computer Science and Engineering (Bussiness Systems)
                </option>
                <option value="CSAIDS">
                  Computer Science and Engineering (AI & Data Science)
                </option>
                <option value="EEE">
                  Electrical and Electronics Engineering
                </option>
                <option value="ECE">
                  Electrical and Communication Engineering
                </option>
                <option value="MECH">Mechanichal Engineering</option>
                <option value="CIVIL">Civil Engineering</option>
                <option value="IT">Information Technology</option>
              </select>
            </div>

            <div className="gt-input">
              <label>Choose the difficulty *</label>

              <select name="designation">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Very Hard</option>
              </select>
            </div>

            <div className="gt-input">
              <label>Course Outcomes * </label>
              <textarea></textarea>
            </div>
            <div id="gt-prompt" className="gt-input">
              <p>Craft your own Prompt</p>
              <textarea></textarea>
            </div>
            <div className="gt-input">
              <button id="gt-btn">Get Guidelines</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuidelinesTemplate;
