import React, { useState } from "react";
import axios from "axios";
import "../components/empsignup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Empsignup() {
  const [name, setName] = useState(null);
  const [emp_id, setEmpid] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const addEmpInfo = async () => {
    const employeeData = {
      name: name,
      emp_id: emp_id,
      department: department,
      designation: designation,
      phone_no: phone_no,
      email: email,
      password: password,
      curriculum: {
        "Teaching & Learning": {
          1: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          2: {
            max_marks: "6",
            my_target: "",
            acheived_score: "",
          },
          3: {
            max_marks: "16",
            my_target: "",
            acheived_score: "",
          },
          4: {
            max_marks: "12",
            my_target: "",
            acheived_score: "",
          },
          5: {
            max_marks: "15",
            my_target: "",
            acheived_score: "",
          },
          6: {
            max_marks: "6",
            my_target: "",
            acheived_score: "",
          },
        },
        "Research & Consultancy": {
          1: {
            max_marks: "15",
            my_target: "",
            acheived_score: "",
          },
          2: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          3: {
            max_marks: "15",
            my_target: "",
            acheived_score: "",
          },
          4: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          5: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          6: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
        },
        "Professional Development": {
          1: {
            max_marks: "15",
            my_target: "",
            acheived_score: "",
          },
          2: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
          3: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
          4: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
          5: {
            max_marks: "3",
            my_target: "",
            acheived_score: "",
          },
          6: {
            max_marks: "4",
            my_target: "",
            acheived_score: "",
          },
          7: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          8: {
            max_marks: "3",
            my_target: "",
            acheived_score: "",
          },
        },
        "Student Development": {
          1: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
          2: {
            max_marks: "8",
            my_target: "",
            acheived_score: "",
          },
          3: {
            max_marks: "6",
            my_target: "",
            acheived_score: "",
          },
          4: {
            max_marks: "6",
            my_target: "",
            acheived_score: "",
          },
          5: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          6: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
        },
        "Institutional Development": {
          1: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
          2: {
            max_marks: "5",
            my_target: "",
            acheived_score: "",
          },
          3: {
            max_marks: "8",
            my_target: "",
            acheived_score: "",
          },
          4: {
            max_marks: "7",
            my_target: "",
            acheived_score: "",
          },
          5: {
            max_marks: "10",
            my_target: "",
            acheived_score: "",
          },
        },
      }, // You might want to include the password if needed
    };

    await axios
      .post("http://127.0.0.1:8000/signup/", employeeData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding employee info:", error);
      });
    console.log(employeeData);
  };

  return (
    <>
      <Link to="/">
        <div className="logo-1">Mandarin</div>
      </Link>
      <p className="heading-emp">Employee first time login</p>
      <div className="form-container">
        <div className="form-items">
          <div className="form-item">
            <label>Name as per ID</label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Employee ID Number</label>

            <input
              type="text"
              name="empid"
              value={emp_id}
              onChange={(e) => setEmpid(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Choose your department </label>

            <select
              id="dept"
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              required
            >
              <option value="CSE">Computer Science and Engineering</option>
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
          <div className="form-item">
            <label>Choose your designation </label>

            <select
              id="desig"
              name="designation"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              required
            >
              <option value="EMP">Employee</option>
              <option value="HOD">Head of the department</option>
              <option value="PRINCIPAL">Principal</option>
            </select>
          </div>
          <div className="form-item">
            <label>Registered Phone number </label>

            <input
              type="text"
              name="phoneno"
              value={phone_no}
              onChange={(e) => setPhoneno(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>College email address </label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="form-item">
            <label for="pass">Create password </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label for="check">Show Password</label>
            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          {/* <button id="emp-signup-btn"> */}

          <Link to="/">
            <button id="emp-signup-btn" onClick={addEmpInfo}>
              submit
            </button>
            {/* <button id="emp-signup-btn">submit</button> */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Empsignup;
