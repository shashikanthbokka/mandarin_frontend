import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../HOD/guidelines_template-hod.css";
import ReactMarkdown from "react-markdown";

function GuidelinesTemplateHOD() {
  const [promptText, setPromptText] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const handleButtonClick = () => {
    // Simulating ChatGPT response delay with setTimeout
    setTimeout(() => {
      setShowResponse(true);
    }, 1000); // Adjust delay as needed

    // This is where you would typically send the prompt text to a backend for processing
    // For now, I'm just setting it directly
    // setPromptText("This is the response from ChatGPT."); // Replace this with your actual response
    setPromptText(`### Course Title: Big Data Analytics for AI and ML Specialization

**Unit 1: Introduction to Big Data**
- 1.1 Understanding Big Data: Concepts and Definitions
- 1.2 The Big Data Ecosystem: Overview and Tools
- 1.3 Challenges and Opportunities in Big Data
- 1.4 Big Data Analytics: Scope and Impact
- 1.5 Overview of Analytical Tools and Technologies

**Unit 2: Big Data Technologies**
- 2.1 Introduction to Hadoop Ecosystem
- 2.2 MapReduce: Concepts and Programming
- 2.3 HDFS: Hadoop Distributed File System
- 2.4 YARN: Yet Another Resource Negotiator
- 2.5 Introduction to NoSQL Databases

**Unit 3: Programming for Big Data**
- 3.1 Setting up Hadoop and NoSQL Environments
- 3.2 Programming with Hadoop: Writing MapReduce Programs
- 3.3 Using Hadoop Libraries for Data Analysis
- 3.4 NoSQL Databases: Types and Usage
- 3.5 Practical Applications of NoSQL in Big Data Analytics

**Unit 4: Big Data in Social Media**
- 4.1 The Role of Big Data in Social Media
- 4.2 Mining Social Media Data: Tools and Techniques
- 4.3 Analyzing Social Media Trends with Big Data Tools
- 4.4 Case Studies: Social Media Campaigns and Analytics
- 4.5 Ethical Considerations in Social Media Data Mining

**Unit 5: Big Data Mining and Analytics**
- 5.1 Introduction to Data Mining: Concepts and Techniques
- 5.2 Big Data Mining: Challenges and Strategies
- 5.3 Predictive Analytics in Big Data
- 5.4 Machine Learning Algorithms for Big Data
- 5.5 Real-World Applications of Big Data Analytics

### Expected Course Outcomes
Upon the successful completion of the course, students will be able to:
1. Explain the foundations, definitions, and challenges of Big Data and various analytical tools.
2. Program using HADOOP and MapReduce, and understand the role of NoSQL databases in Big Data.
3. Understand the significance of Big Data in analyzing and mining social media trends and data.`);
  };

  return (
    <>
      {/* <div class="navbar"></div> */}
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
              {/* now i will give you some inputs . based on them give me the new
              course curriculum "it is an under graduate course.Big data
              analytics is the subject name.Frame this subject for computer
              science and engineering specialisation in artificial intelligence
              and machine learning.difficulty level is easy. the course should
              contain only five units in total.the expected course Outcomes:
              Upon the successful completion of the course, the student will be
              able: 1. To explain the foundations, definitions, and challenges
              of Big Data and various Analytical tools. 2. To program using
              HADOOP and Map reduce, NOSQL 3. To understand the importance of
              Big Data in Social Media and Mining" now based on this info give
              me heading of unit and the side heading in that unit. frame it for
              academic purposes */}
            </div>
            <div className="gt-input">
              <button id="gt-btn" onClick={handleButtonClick}>
                Get Guidelines
              </button>
            </div>
          </div>
        </div>
        <div className="Gpt">
          {/* <button >Press me</button> */}
          {showResponse && (
            <div className="chat-response">
              <div className="chat-bubble">
                {/* <p>{promptText}</p> */}
                <ReactMarkdown>{promptText}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GuidelinesTemplateHOD;
