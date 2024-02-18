import React from "react";
import "../signin/mainsignin.css";
import "../empsignup.css";
import { Link } from "react-router-dom";

function Mainsignin() {
  return (
    <>
      <Link to="/">
        <div className="logo-1">Mandarin</div>
      </Link>

      <div className="main-signin">
        <div className="main-left">
          <div id="email-input">
            <label>Login email </label>
            <input type="email" placeholder="enter your email..." />
          </div>
          <div id="password-input">
            <label>Password </label>
            <input type="password" placeholder="enter your password..." />
          </div>
          <Link to="/dashboard_template">
            <button id="signin-btn">Sign In</button>
          </Link>
        </div>
        <div className="main-right lp-right">
          <img src="/assets/lp-img.png" />
        </div>
      </div>
    </>
  );
}

export default Mainsignin;
