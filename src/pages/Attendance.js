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
    eachStudentEntry.push({id:attendanceId, userId:id,attendance_status:status,attendance_date:attendanceDate})
  };

  // Reset button this is for reset the student attendance status
  const resetAttendanceStatus = (attendanceId,id,status)=>{
    eachStudentEntry.push({id:attendanceId, userId:id,attendance_status:status,attendance_date:attendanceDate})
    saveAttendance()
  }

  //check the attendance status is true or false based on condition it will return the present or absent button
  const attendanceStatusButton = (attendanceId,id, status)=>{
    console.log(attendanceId)
    if(reset == true)
      resetAttendanceStatus(attendanceId,id,null)
    if(status === true){
      return <p style={{"backgroundColor":"green"}}>Present</p>
    }else if(status === false){
      return <p style={{"backgroundColor":"red"}}>Absent</p>
    }
    else{
      let present =  (<button style={{backgroundColor:"Green"}} id="presentButton" onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,1)}}>Present</button>)
      let absent =  (<button style={{backgroundColor:"Red"}} id="absentButton" onClick={() =>{AttendanceStatusChangeHandler(attendanceId,id,0)}}>Absent</button>)
      return [present,absent];
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
          {allAttendances.map((user) => (
            <React.Fragment key={user.userId}>
              <tr>
                <td>{user.user_name}</td>
                <td> {user.user_email}</td>
                <td>
                <React.Fragment>
                  {attendanceStatusButton(user.id,user.userId,user.attendance_status)}
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
