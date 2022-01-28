import React from 'react';
import {NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";
import "./NavBar.css"
 import 'boxicons';

export default function SideBarComponent() {
    const logoutHandler = () => {
     document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     window.location.replace("/")
    };

  return (
      <React.Fragment>
      <nav className="navbar fixed-top top-navbar navbar-light bg-light px-5" style={{"zIndex": "1"}}>
      <a className="btn border-0" id="menu-btn"><i className="bx bx-menu"></i></a>
      <img id="top-nav-profile-icon" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"/>
    </nav>


    <div className="App">
      <nav className="sidebar close">
      <header>
          <div className="image-text">
              <span className="image">
                  <img src="https://banner2.cleanpng.com/20180714/yxt/kisspng-computer-icons-clock-time-icon-design-environmental-protection-material-5b49ef02761925.2089835515315719704837.jpg" alt=""/>
              </span>
          </div>

      </header>

      <div className="menu-bar">
          <div className="menu">
              <ul className="menu-links">
                  <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/dashboard">
                      <i className='bx bx-pie-chart-alt icon' ></i>
                  </NavLink>

                  </li>
                  <li className="nav-link">

                        <NavLink activeClassName={classes.active} to="/attendance"><i className='bx bx-spreadsheet icon'></i></NavLink>

                  </li>
                  <li className="nav-link">

                       <NavLink activeClassName={classes.active} to="/students">
                       <i className="fa fa-users icon" style={{"fontSize": "14px"}} aria-hidden="true"></i>
                       </NavLink>

                  </li>
                  <li className="nav-link">

                      <NavLink activeClassName={classes.active} to="/coaches">
                          <i className="fa fa-users icon" style={{"fontSize": "14px"}} aria-hidden="true"></i>
                        </NavLink>

                  </li>
                  <li className="nav-link">

                      <NavLink activeClassName={classes.active} to="/reports">
                        <i className='bx bxs-report icon' ></i>
                        </NavLink>

                  </li>

              </ul>
          </div>

          <div className="bottom-content">
              <li className="" style={{"position": "relative","left": "-11px"}}>
                  <a onClick={logoutHandler} style={{"cursor": "pointer"}}>
                      <i className='bx bx-log-out icon' ></i>
                  </a>
              </li>
          </div>
      </div>

  </nav>



    </div>
    </React.Fragment>
  )
}
