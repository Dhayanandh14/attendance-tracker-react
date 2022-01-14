
import UserService from '../Services/UserService';

import './Students.css'
import React, { Component, useEffect, useRef, useState } from 'react';
import StudentService from '../Services/StudentService';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AttendanceService from '../Services/AttendanceService';


const Students = () => {
  const [users, setUsers] = useState([])
  const [id,setid] = useState(0)
  const [studentDetails, setStudentDetails] = useState([])
  // const [fetch,setFetch] = useState(false)
  const [count,setCount] = useState(0)
  const studentNameInputRef = useRef();
  const studentAccessIdInputRef = useRef();
  const studentEmailInputRef = useRef();
  const studentPasswordInputRef = useRef();
  // const userIdInputRef = useRef();
  const squadNameInputRef = useRef();
  const interviewerInputRef = useRef();
  const dateOfJoinInputRef = useRef();
  const statusInputRef = useRef();
  const educationInputRef = useRef();
  const interviewerReviewInputRef = useRef();
  const gradeInputRef = useRef();


const fetch = ()=>{
    StudentService.getAllStudentDetails().then((res) => {
      setStudentDetails(res.data)
      console.log(studentDetails)
  });
  }

  useEffect(() => {
   fetch()
  }, []);

  const addStudents=()=>{

    let user = {
      user_name: studentNameInputRef.current.value,
      user_email:studentEmailInputRef.current.value,
      password: studentPasswordInputRef.current.value,
      access_id:studentAccessIdInputRef.current.value,
      role:"student"
    };
    console.log("users"+user)
    UserService.createUsers(user).then((res=>{
      setUserId(res.data.user_id)
    }))
    function setUserId(userId) {

      let student_details = {
        squad_name:squadNameInputRef.current.value,
        interviewer:interviewerInputRef.current.value,
        date_of_Join: dateOfJoinInputRef.current.value,
        status:statusInputRef.current.value,
        education:educationInputRef.current.value,
        interviewer_review:interviewerReviewInputRef.current.value,
        grade:gradeInputRef.current.value,
        user_id:userId
      }
      // let attendance={userId:userId,attendance_date:0,attendacnce_status:""}
      // AttendanceService.createAttendance(attendance).then((res) => {
      //   console.log(res.data);
      // })
      console.log(student_details)

      StudentService.createStudentDetails(student_details).then((res) => {
        console.log(student_details)
        setid(res.data.user_id)
        fetch()
      })
    }
  }




  return (
    <div className="App">

    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Students
    </button>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <input type="text" ref={studentNameInputRef}  placeholder='Enter Student Name'/>
          <input type="text" ref={studentAccessIdInputRef}  placeholder='Enter Student Access Id'/>
          <input type="text" ref={studentEmailInputRef} placeholder='Enter Student Email'/>
          <input type="text" ref={studentPasswordInputRef} placeholder='Enter Student password'/>
          <input type="text" ref={squadNameInputRef} placeholder='Enter Student Squad Name'/>
          <input type="text" ref={interviewerInputRef} placeholder='Enter Student Interviewer'/>

          <input type="text" ref={dateOfJoinInputRef}  placeholder='Enter Student Date of Join'/>
          <input type="text" ref={statusInputRef} placeholder='Enter Student status'/>
          <input type="text" ref={educationInputRef}  placeholder='Enter Student education'/>
          <input type="text" ref={interviewerReviewInputRef} placeholder='Enter Student Interviewer Review'/>
          <input type="text" ref={gradeInputRef}  placeholder='Enter Student Grade'/>



          <button onClick={addStudents}>Add</button>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    </div>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Squad Name</th>
            <th scope="col">Interviewer</th>
            <th scope="col">Date of Join</th>
            <th scope="col">Status</th>
            <th scope="col">Education</th>
            <th scope="col">Interviewer Review</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
        {studentDetails.map((user) =>

        <tr key={user.id}>
        <React.Fragment >
        <td>
          <Link to={{pathname:`/student_info/`,state:user.user_id}}>
             {user.user_name}
           </Link></td>
            <td> {user.user_email}</td>
            <td> {user.squad_name}</td>
            <td> {user.interviewer}</td>
            <td> {user.date_of_Join}</td>
            <td> {user.status}</td>
            <td> {user.education}</td>
            <td> {user.interviewer_review}</td>
            <td> {user.grade}</td>
          </React.Fragment>
          </tr>

          )}

      </tbody>
      </table>

      </div>

  );
}

export default Students;


// const Students = () => {
//   let users=[];
//   let emailFinder,gettableObject;

//   useEffect(() => {
//     fetch("http://localhost:8080/api/v1/users").then(res => {
//       return res.json()
//     }).then((data) => {users.push(data)})
//     console.log(users)
//   }, [])






//   return (
//     <div className="App">
//       <button className="btn btn-warning">Add Students</button>
//       <h1>{users.length}</h1>

//       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//       Launch demo modal
//       </button>


//     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div className="modal-body">
//           ...
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" className="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Students;
