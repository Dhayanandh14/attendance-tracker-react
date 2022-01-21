import React, { useEffect } from 'react';
import {Link, NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";
import "./NavBar.css"
 import 'boxicons';

export default function SideBarComponent() {
    const logoutHandler = () => {
     document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     window.location.replace("/")
    };

    // localStorage.removeItem("user_cookie")
  return (
      <React.Fragment>
      <nav class="navbar fixed-top top-navbar navbar-light bg-light px-5" style={{"z-index": "1"}}>
      <a class="btn border-0" id="menu-btn"><i class="bx bx-menu"></i></a>
      <img id="top-nav-profile-icon" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"/>
    </nav>


    <div className="App">
      <nav class="sidebar close">
      <header>
          <div class="image-text">
              <span class="image">
                  <img src="https://banner2.cleanpng.com/20180714/yxt/kisspng-computer-icons-clock-time-icon-design-environmental-protection-material-5b49ef02761925.2089835515315719704837.jpg" alt=""/>
              </span>
          </div>

      </header>

      <div class="menu-bar">
          <div class="menu">
              <ul class="menu-links">
                  <li class="nav-link">
                  <NavLink activeClassName={classes.active} to="/dashboard">
                      <i class='bx bx-pie-chart-alt icon' ></i>
                  </NavLink>

                  </li>
                  <li class="nav-link">

                        <NavLink activeClassName={classes.active} to="/attendance"><i class='bx bx-spreadsheet icon'></i></NavLink>

                  </li>
                  <li class="nav-link">

                       <NavLink activeClassName={classes.active} to="/students">
                       <i class="fa fa-users icon" style={{"font-size": "14px"}} aria-hidden="true"></i>
                       </NavLink>

                  </li>
                  <li class="nav-link">

                      <NavLink activeClassName={classes.active} to="/coaches">
                          <i class="fa fa-users icon" style={{"font-size": "14px"}} aria-hidden="true"></i>
                        </NavLink>

                  </li>
                  <li class="nav-link">

                      <NavLink activeClassName={classes.active} to="/reports">
                        <i class='bx bxs-report icon' ></i>
                        </NavLink>

                  </li>

              </ul>
          </div>

          <div class="bottom-content">
              <li class="" style={{"position": "relative","left": "-11px"}}>
                  <a onClick={logoutHandler} style={{"cursor": "pointer"}}>
                      <i class='bx bx-log-out icon' ></i>
                  </a>
              </li>
          </div>
      </div>

  </nav>



    </div>
    </React.Fragment>
  )
}
