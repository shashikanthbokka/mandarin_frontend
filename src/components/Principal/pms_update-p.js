import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../employee/pms_update.css";
import EditableTableCell from "../fields/editabletablecell";
import EditableLinkTableCell from "../fields/editablelinktablecell";

function PmsUpdateP() {
  const options = [
    "Uday Kiran Goru",
    "Srilakshmi V",
    "Srihari Pasala",
    "Hutashah Vishal Bhagat",
    "Gulab Shah",
    "Lavanya B",
    "Priyanka B",
    "Purnachand K",
    "Krutibash Nayak",
    "Nikhila R",
    "Purnachandra Rao M",
    "Kiranmai R",
    "Sanjay Dubey",
  ];
  const sortedOptions = options.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  return (
    <>
      <div class="main-part">
        <div class="grey-part">
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
            {/* <div class="grey-part-content">APPEARANCE</div>  */}
          </div>
        </div>
        <div className="white-part">
          <h1 className="top-heading">PMS Update</h1>

          <div className="white-part-middle-hod">
            <label>Employee Name </label>

            {/* <select required>
              <option> Uday Kiran Goru</option>
              <option> Srilakshmi V</option>
              <option>Srihari Pasala</option>
              <option>Hutashah Vishal Bhagat</option>
              <option>Gulab Shah</option>
              <option>Lavanya B</option>
              <option>Priyanka B</option>
            </select> */}
            <select defaultValue="Sanjay Dubey" required>
              {sortedOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <div className="white-part-middle">
            <button className="wpm-btn">Edit</button>
            <button className="wpm-btn">Save</button>
          </div>

          <div className="white-part-down">
            <table>
              {/* <caption>Front-end web developer course 2021</caption> */}
              <thead>
                <tr>
                  <th scope="col">CR.No</th>
                  <th scope="col">Criterion</th>
                  <th scope="col">Sub-Criterion</th>
                  <th scope="col">Max.Marks</th>
                  <th scope="col">Target</th>
                  <th scope="col">Score</th>
                  <th scope="col">Testament</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowspan="6">1</th>
                  <th scope="row" rowspan="6">
                    Teaching & Learning (60 marks )
                  </th>
                  <td>1.1: New course design/Lab Experiments</td>
                  <td>5</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>1.2: Developing Video content</td>
                  <td>6</td>
                  <td>6</td>
                  <EditableTableCell initialValue="9" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>1.3: Innovations</td>
                  <td>16</td>
                  <td>15</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>1.4: Student Feed Back</td>
                  <td>12</td>
                  <td>12</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>1.5: Academic Results</td>
                  <td>6</td>
                  <td>2</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>1.6: Quality of Source File</td>
                  <td>6</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <th rowspan="6">2</th>
                  <th scope="row" rowspan="6">
                    Research & Consultancy (50 marks )
                  </th>
                  <td>2.1: Publications</td>
                  <td>15</td>
                  <td>10</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>2.2: Discovery and Innovations</td>
                  <td>5</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>2.3: Sponsored Research</td>
                  <td>15</td>
                  <td>15</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>2.4: Consultancy</td>
                  <td>5</td>
                  <td>4</td>
                  <EditableTableCell initialValue="7" />

                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>2.5: Ph.D/Research Work/Supervision</td>
                  <td>5</td>
                  <td>4</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>2.6: Research Related Services</td>
                  <td>5</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <th rowspan="8">3</th>
                  <th scope="row" rowspan="8">
                    Professional Development (60 marks )
                  </th>
                  <td>3.1: Attending Refresher Courses</td>
                  <td>15</td>
                  <td>10</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.2: Organising Refresher Courses</td>
                  <td>10</td>
                  <td>9</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.3: Skilling</td>
                  <td>10</td>
                  <td>8</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.4: Memberships</td>
                  <td>10</td>
                  <td>8</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.5: Co-/Extra Curricular Activities</td>
                  <td>3</td>
                  <td>3</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.6: Involvement in Academic Outreach</td>
                  <td>4</td>
                  <td>3</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.7: Involvement in Extension Activities</td>
                  <td>5</td>
                  <td>3</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>3.8: Awards and Recognitions</td>
                  <td>3</td>
                  <td>3</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <th rowspan="6">4</th>
                  <th scope="row" rowspan="6">
                    Student Development (40 marks )
                  </th>
                  <td>4.1: Mentoring</td>
                  <td>10</td>
                  <td>10</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>4.2: Encouragement/Incubation/Startup</td>
                  <td>8</td>
                  <td>7</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>4.3: focused Guidance for Career Development</td>
                  <td>6</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>4.4: Guiding for National Fests</td>
                  <td>6</td>
                  <td>6</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>4.5: Organising Hackathons</td>
                  <td>5</td>
                  <td>4</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>4.6: Student Publications</td>
                  <td>5</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <th rowspan="5">5</th>
                  <th scope="row" rowspan="5">
                    Institutional Development (50 marks )
                  </th>
                  <td>5.1: Collaborative Projects/MoUs</td>
                  <td>10</td>
                  <td>10</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>5.2: Innitiate MoU/Partnerships</td>
                  <td>5</td>
                  <td>5</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>5.3: Establisment of Special Labs/CoEs</td>
                  <td>8</td>
                  <td>8</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>5.4: Development of Software/Alumni</td>
                  <td>7</td>
                  <td>7</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
                <tr>
                  <td>5.5: Institute/Dept. Level Responsbilities</td>
                  <td>10</td>
                  <td>10</td>
                  <EditableTableCell initialValue="7" />
                  <EditableLinkTableCell />
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colspan="3">
                    Total
                  </th>
                  <td>250</td>
                  <td>230</td>
                  <td>230</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default PmsUpdateP;
