import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navigation2 extends Component {
    render() {
        return (
            <div>
                     <nav className="navbar navbar-expand-lg bg-dark" id="navbar">
     {/* <img src="https://cdn.pixabay.com/photo/2013/07/12/18/58/backpack-154121__340.png} alt="no image" height="50px" width="50px"> */}

    <Link  className="navbar-brand text-white" id="navname">Employee Portal</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <Link to="/Home1" className="nav-link text-white" id="home1">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/EmployeeList" className="nav-link text-white" id="empl">EmployeeList</Link>
        </li>

        <li className="nav-item">
          <Link to="/EmployeeDetails" className="nav-link text-white" id="empd">EmployeeDetails</Link>
        </li>
</ul>        
<ul className="navbar-nav float-right">
        <li className="nav-item" id="side">
          <Link to="/logout" className="nav-link text-white" id="login">Logout</Link>
        </li>

      </ul>
    </div>
  </nav>

            </div>
        )
    }
}
