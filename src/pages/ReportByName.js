import React, { useEffect, useState } from "react";
import SideBarComponent from "../components/SidebarComponent";
import ReportService from "../Services/ReportService";
import "./Report.css";

const Reportbyname = () => {
    const [studentNames,setStudentNames] = useState([])
    const [studentId,setStudentId] = useState()
    const [studentReport,setStudentReport] = useState([])
    const [perStudentName,setPerStudentName] = useState()
    const [showName,setShowName] = useState(false)
    useEffect(() => {
      ReportService.getAllNamesAndId().then((res) =>{
        console.log(res.data);
        setStudentNames(res.data)
      })
    }, []);

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
  <SideBarComponent/>
  <div style={{"marginLeft":"90px"}}>
    <div className="col-md-6 mb-3" >
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
</div>
    </div>
  );
}

export default Reportbyname;
