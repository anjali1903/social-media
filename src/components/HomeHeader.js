import React, { useState } from "react";
import "../static/assets/HomeHeader.css";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import { auth } from "../firebase.js";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function HomeHeader({ user }) {
  const history = useHistory("");

  if (user === false) {
    history.push("/login");
  }

  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    history.push("/login");
  };
  return (
    <div className="homeHeader">
      <div className="homeHeader__left">
        <Link to="/"></Link>
      </div>

      <div className="homeHeader__icons">
        <section>
          <Avatar className="homeHeader__avatar" alt="" src="" />
          <h3 className="homeHeader__name">{user?.displayName}</h3>
        </section>

        <h3 className="homeHeader__dash"> | </h3>

        <section>
          <div className="dropdown">
            <ArrowDropDownIcon className="dropdown" />
            <div className="dropdown-content">
              <a onClick={logout}>
                <p>Logout</p>
              </a>
            </div>
          </div>
        </section>

        <h3 className="homeHeader__dash"> | </h3>
      </div>
    </div>
  );
}

export default HomeHeader;
