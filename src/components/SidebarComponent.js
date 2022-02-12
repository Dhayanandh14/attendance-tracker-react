import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import "./NavBar.css";
import "boxicons";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SecureLocalStorage from "./SecureLocalStorage";
export default function SideBarComponent() {
  const history = useHistory();
  const logoutHandler = () => {
    // document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace("/signin");
    SecureLocalStorage.removeLocalItem("role");
    SecureLocalStorage.removeLocalItem("total");
    SecureLocalStorage.removeLocalItem("id");
    // history.push("/signin");

  };

  return (
    <React.Fragment>
      <nav
        className="navbar fixed-top top-navbar navbar-light bg-light px-5"
        style={{ zIndex: "1" }}
      >
        <a className="btn border-0" id="menu-btn">
        </a>
        <Link to="/profile" style={{"textDecoration":"none"}}>
        <div >
        <img
        id="top-nav-profile-icon"
        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        />
        <strong style={{"color": "#12344d"}} >{SecureLocalStorage.getLocalItem("role")[0].toUpperCase()+SecureLocalStorage.getLocalItem("role").slice(1) }</strong>
        </div>
        </Link>
      </nav>

      <div className="App">
        <nav className="sidebar close">
          <header>
            <div className="image-text">
              <span className="image">
                <Link to="/dashboard">
                  <img src="https://icon-library.com/images/attendance-icon/attendance-icon-13.jpg" />
                </Link>
              </span>
            </div>
          </header>

          <div className="menu-bar">
            <ReactTooltip />
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/dashboard">
                    <fw-icon
                      name="nav-dashboard"
                      size="18"
                      color="white"
                      style={{
                        position: "relative",
                        left: "5px",
                        width: "53px",
                        height: "20px",
                      }}
                      data-tip="Dashboard"
                    ></fw-icon>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/attendance">
                    <i
                      class="far fa-calendar-check"
                      style={{
                        position: "relative",
                        left: "5px",
                        width: "53px",
                        height: "20px",
                        fontSize: "18px",
                        color: "white",
                      }}
                      data-tip="Take Attendance"
                    ></i>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/students">
                    <fw-icon
                      name="add-contact"
                      size="18"
                      color="white"
                      style={{
                        position: "relative",
                        left: "5px",
                        width: "53px",
                        height: "20px",
                      }}
                      data-tip="Students"
                    ></fw-icon>
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/coaches">
                    <fw-icon
                      name="groups"
                      size="18"
                      color="white"
                      style={{
                        position: "relative",
                        left: "5px",
                        width: "53px",
                        height: "20px",
                      }}
                      data-tip="Coaches"
                    ></fw-icon>
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink activeClassName={classes.active} to="/reports">
                    <fw-icon
                      name="add-note"
                      size="18"
                      color="white"
                      style={{
                        position: "relative",
                        left: "5px",
                        width: "53px",
                        height: "20px",
                      }}
                      data-tip="Reports"
                    ></fw-icon>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="" style={{ position: "relative", left: "-11px" }}>
                <a onClick={logoutHandler} style={{ cursor: "pointer" }}>
                  <i className="bx bx-log-out icon" data-tip="Logout"></i>
                </a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
