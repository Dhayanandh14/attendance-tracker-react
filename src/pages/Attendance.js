import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SideBarComponent from "../components/SidebarComponent";
import AttendanceService from "../Services/AttendanceService";
import "./Attendance.css";
import { useHistory } from "react-router-dom";
let eachStudentEntry = [];
const date = new Date();
const green = "#03a300";
const red = "red";
const grey = "#f1f3f6";
let todayDate = date.toLocaleDateString("en-GB").split("/").reverse().join("-");
const Attendance = () => {
  const [attendanceDate, setAttendanceDate] = useState();
  const [allAttendances, setAllAttendances] = useState([]);
  const [reset, setReset] = useState(false);
  const [showButton, setShowButon] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [saveButtonLoading, setSaveButtonLoading] = useState(false);
  const [currentDate,setCurrentDate] = useState(0);
  // fetch all students from database
  const history = useHistory();
  useEffect(() => {
    setAttendanceDate(todayDate);
    AttendanceService.getAttendanceByDate(todayDate).then((attendance) => {
      setAllAttendances(attendance.data);
      setShowButon(true);
      setLoading(false);
    });
    setCurrentDate(new Date().getFullYear()+"-"+"0"+Number(date.getMonth()+1)+"-"+"0"+Number(date.getDate()))
  }, []);

  // select the date
  const dateChangeHandler = (event) => {
    setAttendanceDate(event.target.value);
    // dateSubmit();
  };

  // submit button for date selection
  const dateSubmit = () => {
    setButtonLoading(true);
    AttendanceService.getAttendanceByDate(attendanceDate).then((attendance) => {
      setAllAttendances(attendance.data);
      setButtonLoading(false);
    });
  };

  // Attendance status button function
  const AttendanceStatusChangeHandler = (attendanceId, id, status) => {
    if (status === 1) {
      document.getElementById("pb-" + id).style.background = green;
      document.getElementById("pb-" + id).style.color = "white";
      document.getElementById("ab-" + id).style.background = "#f1f3f6";
      document.getElementById("ab-" + id).style.color = "black";
    } else {
      document.getElementById("ab-" + id).style.backgroundColor = "red";
      document.getElementById("ab-" + id).style.color = "white";
      document.getElementById("pb-" + id).style.backgroundColor = "#f1f3f6";
      document.getElementById("pb-" + id).style.color = "black";
    }
    eachStudentEntry.push({
      id: attendanceId,
      userId: id,
      attendance_status: status,
      attendance_date: attendanceDate,
    });
  };

  const setButtonStatus = (attendanceId, id, buttonStatus) => {
    if (buttonStatus === true) {
      return [
        <button
          className=" presentButton"
          style={{ backgroundColor: green, color: "white" }}
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 1);
          }}
          id={"pb-" + id}
        >
          Present
        </button>,
        <button
          className="absentButton"
          style={{ backgroundColor: "#f1f3f6" }}
          id={"ab-" + id}
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 0);
          }}
        >
          Absent
        </button>,
      ];
    } else if (buttonStatus === false) {
      return [
        <button
          className=" presentButton"
          style={{ backgroundColor: "#f1f3f6", color: "black" }}
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 1);
          }}
          id={"pb-" + id}
        >
          Present
        </button>,
        <button
          className=" absentButton"
          style={{ backgroundColor: "red", color: "white" }}
          id={"ab-" + id}
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 0);
          }}
        >
          Absent
        </button>,
      ];
    }
  };

  const fetchAllAttendances = (status) => {
    allAttendances.map((attendance) => {
      eachStudentEntry.push({
        id: attendance.id,
        userId: attendance.userId,
        attendance_status: status,
        attendance_date: attendance.attendance_date,
      });
      setShowButon(true);
      setLoading(false);
      // setButtonLoading(true)
    });
  };

  const markAllPresent = () => {
    fetchAllAttendances(1);
    let presentButton = document.getElementsByClassName("presentButton");
    let presentButtonLength =
      document.getElementsByClassName("presentButton").length;
    let absentButton = document.getElementsByClassName("absentButton");
    for (let i = 0; i < presentButtonLength; i++) {
      if (
        absentButton[i].style.backgroundColor === "rgb(241, 243, 246)" ||
        absentButton[i].style.backgroundColor === "red"
      ) {
        absentButton[i].style.backgroundColor = "#f1f3f6"; //grey
        document.getElementsByClassName("presentButton")[
          i
        ].style.backgroundColor = green; //green
        document.getElementsByClassName("presentButton")[i].style.color =
          "white";
        document.getElementsByClassName("absentButton")[
          i
        ].style.backgroundColor = "#f1f3f6"; //grey
        document.getElementsByClassName("absentButton")[i].style.color =
          "black";
      }
    }
  };

  const markAllAbsent = () => {
    fetchAllAttendances(0);
    let presentButton = document.getElementsByClassName("presentButton");
    let absentButtonLength =
      document.getElementsByClassName("absentButton").length;
    for (let i = 0; i < absentButtonLength; i++) {
      if (
        presentButton[i].style.backgroundColor === "rgb(241, 243, 246)" ||
        presentButton[i].style.backgroundColor === "rgb(3, 163, 0)"
      ) {
        presentButton[i].style.backgroundColor = grey;
        presentButton[i].style.color = "black";
        document.getElementsByClassName("absentButton")[
          i
        ].style.backgroundColor = "red";
        document.getElementsByClassName("absentButton")[i].style.color =
          "white";
      }
    }
  };

  //check the attendance status is true or false based on condition it will return the present or absent button
  const attendanceStatusButton = (attendanceId, id, status) => {
    if (reset === true) {
      resetAttendanceStatus(attendanceId, id, null);
    }

    if (status === null) {
      let present = (
        <button
          style={{ backgroundColor: grey }}
          id={"pb-" + id}
          className="presentButton "
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 1);
          }}
        >
          Present
        </button>
      );

      let absent = (
        <button
          style={{ backgroundColor: grey }}
          id={"ab-" + id}
          className="absentButton"
          onClick={() => {
            AttendanceStatusChangeHandler(attendanceId, id, 0);
          }}
        >
          Absent
        </button>
      );

      return [present, absent];
    } else {
      return setButtonStatus(attendanceId, id, status);
    }
  };

  // Reset button this is for reset the student attendance status
  const resetAttendanceStatus = (attendanceId, id, status) => {
    eachStudentEntry.push({
      id: attendanceId,
      userId: id,
      attendance_status: status,
      attendance_date: attendanceDate,
    });
    window.location.reload(false);
    // saveAttendance()
  };

  //save the attendance
  const saveAttendance = () => {
    setSaveButtonLoading(true);
    AttendanceService.updateAttendance(eachStudentEntry).then((res) => {
      // dateSubmit()
      setSaveButtonLoading(false);
    });
    // setRerender()
    // window.location.reload();
    history.push("/attendance");
  };


  return (
    <React.Fragment>
      <SideBarComponent />
      {!loading && (
        <div>
          <div className="date-and-status-dropdown">
            <div className="select-attendance-date-div">
              <input
                type="date"
                onChange={dateChangeHandler}
                value={attendanceDate}
                min="2022-01-01"
                max={currentDate}
                id="select-attendance-date-input"
              />

              {!buttonLoading && (
                <button className="btn btn-dark" onClick={() => dateSubmit()}>
                  SUBMIT
                </button>
              )}
              {buttonLoading && (
                <button className="btn btn-dark">Loading...</button>
              )}
            </div>

            <div className="dropdown">
              <a
                className="btn btn-dark dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mark All As
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" onClick={markAllPresent}>
                    Present
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={markAllAbsent}>
                    Absent
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="display-all-attendance-list">
            <div className="table-responsive">
              <table className="table display-all-attendance-details-list-table">
                <thead
                  style={{ background: "#f5f7f9" }}
                  className="display-all-attendance-heading-list"
                >
                  <tr>
                    <th style={{ verticalAlign: "middle" }}>Name</th>
                    <th style={{ verticalAlign: "middle" }}>Email</th>
                    <th style={{ verticalAlign: "middle" }}>
                      Attendance Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allAttendances.map((attendance) => (
                    <React.Fragment key={Math.random()}>
                      {attendance.status == "Active" && (
                        <tr key={Math.random() * 19}>
                          <td>
                            <Link
                              style={{
                                verticalAlign: "super",
                                textDecoration: "none",
                                fontWeight: "bold",
                              }}
                              to={{
                                pathname: `students/student_info/${attendance.userId}`,
                              }}
                            >
                              {attendance.user_name}
                            </Link>
                          </td>
                          <td> {attendance.user_email}</td>
                          <td>
                            <React.Fragment key={Math.random() * 19}>
                              {attendanceStatusButton(
                                attendance.id,
                                attendance.userId,
                                attendance.attendance_status
                              )}
                            </React.Fragment>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              {showButton && (
                <div className="reset-and-save-button" >
                  <button
                    className="btn btn-dark "
                    onClick={() => setReset(true)} disabled
                  >
                    Delete Attendance
                  </button>
                  {!saveButtonLoading && (
                    <button
                      className="btn btn-warning"
                      onClick={() => saveAttendance()}
                    >
                      Save
                    </button>
                  )}
                  {saveButtonLoading && (
                    <button
                      className="btn btn-warning"
                      onClick={() => saveAttendance()}
                    >
                      loading
                    </button>
                  )}
                  {saveButtonLoading && window.location.reload()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {loading && <h1 className="text-center">Fetching Attendance...</h1>}
    </React.Fragment>
  );
};

export default Attendance;
