import React from "react";
import { Link } from "react-router-dom";
import "../employee/task_guidelines.css";

function TaskGuidelines() {
  return (
    <>
      {/* <div class="navbar">
        <Link to="/">
          <div className="logo-1">Mandarin</div>
        </Link>
      </div> */}
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
          <h1 className="top-heading">Target Guidelines</h1>

          <table id="tg-table">
            {/* <caption>Front-end web developer course 2021</caption> */}
            <thead>
              <tr>
                <th scope="col">CR.No</th>
                <th scope="col">Criterion</th>
                <th scope="col">Sub-Criterion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="6">1</th>
                <th scope="row" rowspan="6">
                  Teaching & Learning (60 marks )
                </th>
                <td>
                  <Link to="/guidelines_template" className="tg-link-hod">
                    1.1: New course design/Lab Experiments
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/" className="tg-link-hod">
                    1.2: Developing Video content
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1.3: Innovations</td>
              </tr>
              <tr>
                <td>1.4: Student Feed Back</td>
              </tr>
              <tr>
                <td>1.5: Academic Results</td>
              </tr>
              <tr>
                <td>1.6: Quality of Source File</td>
              </tr>
              <tr>
                <th rowspan="6">2</th>
                <th scope="row" rowspan="6">
                  Research & Consultancy (50 marks )
                </th>
                <td>2.1: Publications</td>
              </tr>
              <tr>
                <td>2.2: Discovery and Innovations</td>
              </tr>
              <tr>
                <td>2.3: Sponsored Research</td>
              </tr>
              <tr>
                <td>2.4: Consultancy</td>
              </tr>
              <tr>
                <td>2.5: Ph.D/Research Work/Supervision</td>
              </tr>
              <tr>
                <td>2.6: Research Related Services</td>
              </tr>
              <tr>
                <th rowspan="8">3</th>
                <th scope="row" rowspan="8">
                  Professional Development (60 marks )
                </th>
                <td>
                  <Link to="/" className="tg-link-hod">
                    3.1: Attending Refresher Courses
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/" className="tg-link-hod">
                    3.2: Organising Refresher Courses{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3.3: Skilling</td>
              </tr>
              <tr>
                <td>3.4: Memberships</td>
              </tr>
              <tr>
                <td>3.5: Co-/Extra Curricular Activities</td>
              </tr>
              <tr>
                <td>3.6: Involvement in Academic Outreach</td>
              </tr>
              <tr>
                <td>3.7: Involvement in Extension Activities</td>
              </tr>
              <tr>
                <td>3.8: Awards and Recognitions</td>
              </tr>
              <tr>
                <th rowspan="6">4</th>
                <th scope="row" rowspan="6">
                  Student Development (40 marks )
                </th>
                <td>4.1: Mentoring</td>
              </tr>
              <tr>
                <td>4.2: Encouragement/Incubation/Startup</td>
              </tr>
              <tr>
                <td>4.3: focused Guidance for Career Development</td>
              </tr>
              <tr>
                <td>4.4: Guiding for National Fests</td>
              </tr>
              <tr>
                <td>4.5: Organising Hackathons</td>
              </tr>
              <tr>
                <td>4.6: Student Publications</td>
              </tr>
              <tr>
                <th rowspan="5">5</th>
                <th scope="row" rowspan="5">
                  Institutional Development (50 marks )
                </th>
                <td>5.1: Collaborative Projects/MoUs</td>
              </tr>
              <tr>
                <td>5.2: Innitiate MoU/Partnerships</td>
              </tr>
              <tr>
                <td>5.3: Establisment of Special Labs/CoEs</td>
              </tr>
              <tr>
                <td>5.4: Development of Software/Alumni</td>
              </tr>
              <tr>
                <td>5.5: Institute/Dept. Level Responsbilities</td>
              </tr>
            </tbody>
            {/* <tfoot>
              <tr>
                <th scope="row" colspan="3">
                  Total
                </th>
                <td>250</td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
    </>
  );
}

export default TaskGuidelines;
