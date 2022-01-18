import React, { useRef,useEffect } from "react";
import { useState } from "react";
import AttendanceService from "../Services/AttendanceService";
import ReportService from "../Services/ReportService";
import UserService from "../Services/UserService";

const Reports = () => {
  // const [fromDate,setFromDate] =useState()
  const fromDateInputRef =  useRef()
  const toDateInputRef = useRef()
  const [studentNames,setStudentNames] = useState([])
  const [studentId,setStudentId] = useState()
  const [studentReport,setStudentReport] = useState([])
  const [perStudentName,setPerStudentName] = useState()
  const [showName,setShowName] = useState(false)
  const [allReport,setAllReport] = useState([]);
  useEffect(() => {
    ReportService.getAllNamesAndId().then((res) =>{
      console.log(res.data);
      setStudentNames(res.data)
    })
  }, []);

  const Generate = ()=>{
    console.log( fromDateInputRef.current.value.split('-').join(""))
    let from =  fromDateInputRef.current.value.split('-').join("")
    let to = toDateInputRef.current.value.split('-').join("")
    ReportService.getReportByDateWise(from,to).then((res) =>{
      console.log(res.data)
      setAllReport(res.data);
    })
  }

  const nameChangeHandler = (event)=>{
    let nameAndId = event.target.value.split(',')
    setStudentId(nameAndId[0]);
    setPerStudentName(nameAndId[1])
    setShowName(false)
  }

  const getReport = ()=>{
    ReportService.getReportByName(studentId).then((res) =>{
      console.log(res.data)
      setStudentReport(res.data)
    })
    setShowName(true)
  }
  return (
    <div>
      Reports
      <button class="btn btn-primary">Monthly Report</button>
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="date-of-join" className="form-label">
            From Date
          </label>
          <input type="date" className="form-control" id="date-of-join" ref={fromDateInputRef}  />
        </div>
        <div className="col-md-3">
          <label htmlFor="date-of-join" className="form-label">
            To Date
          </label>
          <input type="date" className="form-control" id="date-of-join" ref={toDateInputRef} />
        </div>
        <div className="col-md-4 mt-5 mb-2">
          <button className="btn btn-primary" onClick={Generate}>Submit Date</button>
        </div>
      </div>







      <div className="col-md-6 mb-3">
      <select
      className="form-select"
      aria-label="Default select example"
      onChange={nameChangeHandler}>
      <option value="DEFAULT">Select Student Grade</option>
      {studentNames.map((student) =>
        <option value={[student[1],student[0]]}>{student[0]}</option>
        )}
        </select>
        <button onClick={getReport}>Get Report</button>
        </div>



    {showName &&
    <React.Fragment>
      <h2>Student Name: {showName?perStudentName:""}</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>

    {studentReport.map((user)=>
      <React.Fragment>
      <tr>
        { user.attendance_status!=null && <th scope="row">{user.attendance_date.split("-").reverse().join("-")}</th>}
        {user.attendance_status!=null && <th scope="row">
        {user.attendance_status?"Present":user.attendance_status==null?"Not Available":"Absent"}</th>
      }
      </tr>
      </React.Fragment>
      )}
    </tbody>
  </table>
  </React.Fragment>
 }

 <table class="table">
  <thead>
    <tr>
      <th scope="col">Student</th>
      {allReport.map((user)=>
        <td>{user.attendance_date}</td>
        )}
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  {allReport.map((user)=>
     <React.Fragment>
      <tr>
      <td scope="row">{user.username}</td>

      </tr>
    </React.Fragment>
    )}

</tr>
  </tbody>
</table>

</div>

  );
};

export default Reports;
