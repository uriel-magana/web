import React from 'react'

import {NavLink} from 'react-router-dom'

import "../index.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;