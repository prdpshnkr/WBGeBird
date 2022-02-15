import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/birding.jpg";
import './Leftbar.css';
import { ObsContext } from "../Providers/ObservationRecordProvider";


function Leftbar(props) {

  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${ inactive ? 'inactive' : ''}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="app-name"><h2>eBirder</h2></div>
        <div onClick={()=> setInactive(!inactive)} className="toggle-menu-btn">
          <i class="bi bi-list fa-10x"></i>
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Search Hotspot"></input>
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              Dashboard
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
              <i class="bi bi-newspaper"></i>
              </div>
              Content
            </a>
            <ul className="sub-menu">
              <li>
                <a>
                  courses
                </a>
              </li>
              <li>
                <a>
                  videos
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
              <i class="bi bi-vector-pen"></i>
              </div>
              Design
            </a>
          </li>
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user"></img>
        </div>
        <div user-info>
          <h5>Pradeep S</h5>
          <p>spradee@hcl.com</p>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
