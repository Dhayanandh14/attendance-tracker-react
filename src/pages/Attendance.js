import React, { useEffect, useRef, useState } from "react";
import AttendanceService from "../Services/AttendanceService";
import './Attendance.css'

let eachStudentEntry=[];
const date = new Date();

let todayDate = date.toLocaleDateString('en-GB').split('/').reverse().join('-')
const Attendance = () => {
  // const [hide,setHide]=useState("test")
  // const [show,setShow]=useState("test")
  const [attendanceDate,setAttendanceDate] = useState();
  const [allAttendances, setAllAttendances] = useState([]);
  const[reset,setReset] = useState(false);
  const [rerender, setRerender] = useState(false);
  // fetch all students from database
  useEffect(() => {
    setAttendanceDate(todayDate)
    AttendanceService.getAttendanceByDate(todayDate).then((attendance) => {
      console.log(attendance.data)
      setAllAttendances(attendance.data)
  })
  },[])


  // select the date
  const dateChangeHandler = (event) => {
    console.log(event.target.value)
    setAttendanceDate(event.target.value)
  }

  // submit button for date selection
  const dateSubmit = () => {
    AttendanceService.getAttendanceByDate(attendanceDate).then((attendance) => {
        console.log(attendance.data)
        setAllAttendances(attendance.data)
    })
  }

  // Attendance status button function
  const AttendanceStatusChangeHandler = (attendanceId,id,status) => {
    console.log(id)
    if(status ===1){
      document.getElementById("pb-"+id).style.background = "grey"
      document.getElementById("ab-"+id).style.background = "red"
    }else{
      document.getElementById("ab-"+id).style.backgroundColor = "grey"
      document.getElementById("pb-"+id).style.backgroundColor = "green"
    }
    eachStudentEntry.push({id:attendanceId, userId:id,attendance_status:status,attendance_date:attendanceDate})
    console.log(eachStudentEntry)
  };

  // Reset button this is for reset the student attendance status
  const resetAttendanceStatus = (attendanceId,id,status)=>{
    eachStudentEntry.push({id:attendanceId, userId:id,attendance_status:status,attendance_date:attendanceDate})
    saveAttendance()
  }


  const setButtonStatus = (attendanceId,id,buttonStatus)=>{
    if(buttonStatus === true){
      return [
        <button className="btn btn-success presentButton"style={{"backgroundColor":"grey"}}
      onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,1)}} id={"pb-"+id}>Present</button>,
      <button className="btn btn-danger absentButton" style={{"backgroundColor":"red"}} id={"ab-"+id} onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,0)}}>Absent</button>
    ]
    }
    else if(buttonStatus === false){
      return [<button className="btn btn-success presentButton"style={{"backgroundColor":"green"}}
      onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,1)}} id={"pb-"+id}>Present</button>,
      <button className="btn btn-danger absentButton" style={{"backgroundColor":"grey"}} id={"ab-"+id} onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,0)}}>Absent</button>]

    }
  }

  const fetchAllAttendances = (status)=>{
    allAttendances.map((attendance) => (
      eachStudentEntry.push({id:attendance.id, userId:attendance.userId,attendance_status:status,attendance_date:attendance.attendance_date})
    ))
  }

  const markAllPresent = ()=>{
    fetchAllAttendances(1)
    let presentButton = document.getElementsByClassName("presentButton")
    let presentButtonLength = document.getElementsByClassName("presentButton").length
    console.log(presentButtonLength)
    let absentButton = document.getElementsByClassName("absentButton")
    for(let i=0; i<presentButtonLength; i++){
      document.getElementsByClassName("presentButton")[i].style.backgroundColor="grey";
      if(absentButton[i].style.backgroundColor == "grey" || absentButton[i].style.backgroundColor == "red"){
      absentButton[i].style.backgroundColor="red"
      document.getElementsByClassName("presentButton")[i].style.backgroundColor="grey"
      }
       if(absentButton[i].style.backgroundColor == "red" || presentButton[i].style.backgroundColor == "grey" ){
        absentButton[i].style.backgroundColor="red"
          document.getElementsByClassName("presentButton")[i].style.backgroundColor="grey"
      }
    }
  }


  const markAllAbsent = ()=>{
    fetchAllAttendances(0);
    console.log(eachStudentEntry)
    let presentButton = document.getElementsByClassName("presentButton")
    let absentButtonLength = document.getElementsByClassName("absentButton").length

    for(let i=0; i<absentButtonLength; i++){
      console.log(presentButton[i])
      if(presentButton[i].style.backgroundColor=="grey" || presentButton[i].style.backgroundColor=="green"){
        presentButton[i].style.backgroundColor="green"
        document.getElementsByClassName("absentButton")[i].style.backgroundColor="grey"
      }
    }
  }


  //check the attendance status is true or false based on condition it will return the present or absent button
  const attendanceStatusButton = (attendanceId,id, status)=>{
    console.log(attendanceId)
    if(reset == true)
      resetAttendanceStatus(attendanceId,id,null)


    if(status == null){
      let present =  (<button style={{backgroundColor:"Green"}} id={"pb-"+id} className="presentButton btn btn-primary" onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,1)}}>Present</button>)

      let absent =  (<button style={{backgroundColor:"Red"}} id={"ab-"+id} className="absentButton btn btn-danger" onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,0)}}>Absent</button>)

      return [present,absent];
    }else{
      return setButtonStatus(attendanceId,id,status);
    }

  }

  //save the attendance
  const saveAttendance = () => {
    console.log(eachStudentEntry)
    AttendanceService.updateAttendance(eachStudentEntry).then((res) => {
      console.log(res.data);
      // dateSubmit()
    })
    window.location.reload();
  }


  return (
    <div>

      Take Attendance
    <div  className="col-md-1">
      <div class="input-group mb-3 col-md-3">
        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected>Mark All As</option>
          <option value="1">Present </option>
          <option value="2">Absent</option>
        </select>
      </div>
    </div>

    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Mark All As
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" onClick={markAllPresent}>Present</a></li>
          <li><a class="dropdown-item" onClick={markAllAbsent}>Absent</a></li>
        </ul>
   </div>
      <input type="date" onChange={dateChangeHandler} value={attendanceDate}  min="2022-01-12"/>
       <button onClick={() =>dateSubmit()}>Submit</button>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          <button onClick={() =>setReset(true)}>Reset All Attendance</button>

          {allAttendances.map((attendance) => (
            <React.Fragment key={attendance.userId}>
              <tr>
                <td>{attendance.user_name}</td>
                <td> {attendance.user_email}</td>
                <td>
                <React.Fragment>
                  {attendanceStatusButton(attendance.id,attendance.userId,attendance.attendance_status)}
                </React.Fragment>
                </td>
              </tr>
            </React.Fragment>
          ))}
          <button onClick={()=>saveAttendance()}>Save</button>
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
