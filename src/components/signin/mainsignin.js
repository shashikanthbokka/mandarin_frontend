import React, { useState } from "react";
import "../signin/mainsignin.css";
import "../empsignup.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { setdata } from "../../data";

function Mainsignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [responseData, setResponseData] = useState(null);
  // let responseData = "";

  // const navigate = useNavigate();

  const loginEmp = async () => {
    const employeeData = {
      email: email,
      password: password, // You might want to include the password if needed
    };

    await axios
      .post("http://127.0.0.1:8000/login/", employeeData)
      .then((res) => {
        // console.log(res.data);
        // responseData = res.data.empid;
        // setdata(res.data.empid);
        localStorage.setItem("eid", res.data.empid);
        // navigate("/");
      })
      .catch((error) => {
        console.error("Error adding employee info:", error);
      });
    // console.log(empid);
    // console.log(employeeData);
    alert(localStorage.getItem("eid"));
  };
  return (
    <>
      <Link to="/">
        <div className="logo-1">Mandarin</div>
      </Link>

      <div className="main-signin">
        <div className="main-left">
          <div id="email-input">
            <label>Login email </label>
            <input
              type="email"
              placeholder="enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="password-input">
            <label>Password </label>
            <input
              type="password"
              placeholder="enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/dashboard_template">
            <button id="signin-btn" onClick={loginEmp}>
              Sign In
            </button>
          </Link>
        </div>
        <div className="main-right si-right">
          <img src="/assets/lp-img.png" />
        </div>
      </div>
    </>
  );
}

export default Mainsignin;
