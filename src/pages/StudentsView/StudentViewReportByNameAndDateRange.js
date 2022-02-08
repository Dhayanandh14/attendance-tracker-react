import React, { useEffect, useState,useRef } from "react";
import ReportService from "../../Services/ReportService";

import "../Report.css";

let attendanceCount=[];
const StudentViewReportByNameAndDateRange = () => {
  const fromDateInputRef = useRef();
  const toDateInputRef = useRef();
  const [studentNames, setStudentNames] = useState([]);
  const [studentId, setStudentId] = useState();
  const [studentReport, setStudentReport] = useState([]);
  const [perStudentName, setPerStudentName] = useState();
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    ReportService.getAllNamesAndId().then((res) => {
      setStudentNames(res.data);
    });
  }, []);

  const nameChangeHandler = (event) => {
    let nameAndId = event.target.value.split(",");
    setStudentId(nameAndId[0]);
    setPerStudentName(nameAndId[1]);
    setShowName(false);
  };

  const getReport = () => {
    if(fromDateInputRef.current.value == ""){
      alert("Please select From date")
    }else if(toDateInputRef.current.value == ""){
      alert("Please select To date")
    }
    else if(perStudentName == undefined){
      alert("Please select Student Name")
    }
    else{
    let from = fromDateInputRef.current.value.split("-").join("");
    let to = toDateInputRef.current.value.split("-").join("");
    ReportService.getAllNamesByDate(studentId,from,to).then((res) => {
      setStudentReport(res.data);
    });
    setShowName(true);
  }
  };
  const logoutHandler = () => {
    window.location.replace("/signin");
    localStorage.removeItem("role");
  }
  return (
    <div>
        <div>
        <button className="btn btn-danger float-end" style={{
          "position": "relative",
                    "right": "20px","top": "-60px"
      }} onClick={logoutHandler}>Logout</button>
          <div style={{ marginLeft: "40px","marginTop":"90px" }}>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="date-of-join" className="form-label">
              From Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date-of-join"
              ref={fromDateInputRef}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="date-of-join" className="form-label">
              To Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date-of-join"
              ref={toDateInputRef}
            />
          </div>
        </div>
            <br/>
            <div className="row">
            <div className="col-md-4 mb-5">
              <select style={{"marginLeft":"10px"}}
                className="form-select"
                aria-label="Default select example"
                onChange={nameChangeHandler}
              >
                <option value="DEFAULT">Select Student Name</option>
                {studentNames.map((student) => (
                  <option value={[student[1], student[0]]}>{student[0]}</option>
                ))}
              </select>
                </div>
              <div  className="col-md-4 mb-3">
                <button className="btn btn-dark" onClick={getReport}>Get Report</button>
              </div>
            </div>

            {showName && (
              <React.Fragment>
                <h2>Student Name: {showName ? perStudentName : ""}</h2>
                <div className="row">
                  <div className="col-md-5">
                  <div className="table-responsive">
                    <table className="table table-bordered" style={{"maxWidth": "656px",
                      "textAlign": "center"}}>
                      <thead className="table-light">
                        <tr>
                          <th className="table-light" scope="col">Date</th>
                          <th className="table-light" scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentReport.map((user) => (
                          <React.Fragment>
                            <tr>
                              {user.attendance_status != null && (
                                <th scope="row">
                                  {user.attendance_date.split("-").reverse().join("-")}
                                </th>
                              )}
                              {user.attendance_status != null && (
                                <th scope="row">
                                  {user.attendance_status
                                    ? <strong style={{"color":"green"}}>Present</strong>
                                    :
                                    <strong style={{"color": "red"}}>Absent</strong>}
                                </th>

                              )}
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  </div>

                  </div>

              </React.Fragment>
            )}
          </div>
        </div>

    </div>
  );
}

export default StudentViewReportByNameAndDateRange;
