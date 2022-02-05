import React, { useEffect, useState,useRef } from "react";
import SideBarComponent from "../components/SidebarComponent";
import ReportService from "../Services/ReportService";
import "./Report.css";
let show = false
const ReportByName = () => {
  const [studentNames, setStudentNames] = useState([]);
  const [studentId, setStudentId] = useState();
  const [studentReport, setStudentReport] = useState([]);
  const [perStudentName, setPerStudentName] = useState();
  const [showName, setShowName] = useState(false);

  const fromDateInputRef = useRef();
  const toDateInputRef = useRef();
  const [allReport, setAllReport] = useState([]);

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
    let from = fromDateInputRef.current.value.split("-").join("");
    let to = toDateInputRef.current.value.split("-").join("");
    ReportService.getAttendanceCountByNameAndDate(studentId,from,to).then((res) => {
      setStudentReport(res.data);
      console.log(res.data)
    });
    setShowName(true);
  };


  return (
    <div>
      <SideBarComponent />
      <div style={{ marginLeft: "90px" }}>
      <div className="row" style={{"marginLeft":"10px"}}>
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
        <div className="col-md-4 mt-5 mb-2" >
          <button style={{"position":"relative","bottom":"16px"}} className="btn btn-dark" >
            Submit Date
          </button>
        </div>
      </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={nameChangeHandler}
          >
            <option value="DEFAULT">Select Student Grade</option>
            {studentNames.map((student) => (
              <option value={[student[1], student[0]]}>{student[0]}</option>
            ))}
          </select>
          <button onClick={getReport}>Get Report</button>
        </div>

        {showName && (
          <React.Fragment>
            <h2>Student Name: {showName ? perStudentName : ""}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Present</th>
                  <th scope="col">Absent</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <td>{studentReport[0]}</td>
              <td>{studentReport[1]}</td>
              </tr>

              </tbody>
            </table>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ReportByName;
