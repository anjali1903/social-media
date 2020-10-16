import React from "react";
import { Link } from "react-router-dom";
import "../static/assets/LoginHeader.css";

function LoginHeader() {
  return (
    <div className="header">
      <Link className="link" to="/"></Link>
      <Link className="link" to="/register">
        <button className="header__button">Create New Account</button>
      </Link>
    </div>
  );
}

export default LoginHeader;
