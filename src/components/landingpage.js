import React from "react";
import "../components/landingpage.css";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <div className="lp-screen">
      <div className="lp-left">
        <div className="logo">
          <h1>Mandarin</h1>
          <p>The performance management system</p>
        </div>
        <div className="lp-signin-btns">
          <Link to="/mainsignin">
            <div className="lp-signin-btn" id="btn-1">
              Employee login
            </div>
          </Link>
          <Link to="/hodsignin">
            <div className="lp-signin-btn" id="btn-2">
              HOD login
            </div>
          </Link>
          <Link to="/principalsignin">
            <div className="lp-signin-btn" id="btn-3">
              Principal login
            </div>
          </Link>
        </div>
        <Link to="/empsignup">
          <div className="lp-signup-btn">Faculty first login</div>
        </Link>
      </div>
      <div className="lp-right">
        <img src="/assets/lp-img.png" />
      </div>
    </div>
  );
}

export default Landingpage;
