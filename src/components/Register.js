import React, { useState } from "react";
import "../static/assets/Register.css";
import { auth } from "../firebase.js";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user) {
          auth.user
            .updateProfile({
              displayName: firstName + " " + lastName,
            })
            .then((s) => {
              history.push("/");
            });
        }
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Create A New Account</h1>
        <form>
          <center>
            <input
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
              className="register__name"
              placeholder="First Name"
            />
            <input
              type="name"
              onChange={(e) => setLastName(e.target.value)}
              className="register__name"
              placeholder="Last Name"
            />
          </center>
          <center>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </center>
          <center>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </center>
          <h5 className="register__date">Date Of Birth</h5>

          <select className="register__date2">
            <option value="Day">Day</option>
            <option value="Day">1</option>
            <option value="Day">2</option>
            <option value="Day">3</option>
            <option value="Day">4</option>
            <option value="Day">5</option>
            <option value="Day">6</option>
            <option value="Day">7</option>
            <option value="Day">8</option>
            <option value="Day">9</option>
            <option value="Day">10</option>
            <option value="Day">11</option>
            <option value="Day">12</option>
            <option value="Day">13</option>
            <option value="Day">14</option>
            <option value="Day">15</option>
            <option value="Day">16</option>
            <option value="Day">17</option>
            <option value="Day">18</option>
            <option value="Day">19</option>
            <option value="Day">20</option>
            <option value="Day">21</option>
            <option value="Day">22</option>
            <option value="Day">23</option>
            <option value="Day">24</option>
            <option value="Day">25</option>
            <option value="Day">26</option>
            <option value="Day">27</option>
            <option value="Day">28</option>
            <option value="Day">29</option>
            <option value="Day">30</option>
            <option value="Day">31</option>
          </select>

          <select className="register__date3">
            <option value="Day">Month</option>
            <option value="Day">Jan</option>
            <option value="Day">Feb</option>
            <option value="Day">Mar</option>
            <option value="Day">Apr</option>
            <option value="Day">Jun</option>
            <option value="Day">Jul</option>
            <option value="Day">Aug</option>
            <option value="Day">Sep</option>
            <option value="Day">Oct</option>
            <option value="Day">Nov</option>
            <option value="Day">Dec</option>
          </select>

          <select className="register__date3">
            <option value="2018">2020</option>
            <option value="2018">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
          </select>

          <h5 className="register__gender">Gender</h5>

          <div className="register__radiocontainer">
            <input type="radio" name="gender" value="Male" />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" />
            <label>Female</label>
            <input type="radio" name="gender" value="Other" />
            <label>Other</label>
          </div>

          <center>
            <button
              onClick={register}
              type="submit"
              className="register__register"
            >
              Register
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Register;
