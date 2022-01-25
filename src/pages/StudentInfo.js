import React, { useEffect } from 'react';
import { useState } from 'react';
import StudentEditinfo from './StudentEditInfo';
import SideBarComponent from '../components/SidebarComponent';
import StudentService from '../Services/StudentService';
import "./StudentInfo.css"
import {useParams} from "react-router-dom";
const Studentinfo = (props) => {
  let { id } = useParams();
  const [studentInfo,setStudentInfo] = useState([])
  const [showButton,setShowButon] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    StudentService.getStudentInfoById(id).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      setShowButon(true)
      setLoading(false)
      // setInformationToInput(res.data)
    });
  }, []);

  const fetch =()=>{
    StudentService.getStudentInfoById(id).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      setLoading(false)
      // setInformationToInput(res.data)
    });
  }

  return (
    <React.Fragment >
    <SideBarComponent/>
    {!loading && <React.Fragment>
      {showButton &&
    <StudentEditinfo id={id}  func={fetch}/>}

    <div className="student-info-view">
      {studentInfo.map((user) =>
        <React.Fragment>
        <React.Fragment>
          <h1>{user.user_name}</h1>
          <h5 style={{"margin-left": "6px"}}>{user.access_id}</h5>
          <h6 style={{"margin-left": "6px"}}>{user.user_email}</h6>
        </React.Fragment>
        <hr style={{"margin-top": "61px","margin-bottom": "25px"}}/>
        <table class="table student-info-table table-borderless">

        <tbody>
          <tr>
          <th className="left-side-student-info-table" scope="row">Phone Number</th>
          <td className="left-side-student-info-table">{user.phone_number}</td>

            <th  className="right-side-student-info-table info-title" scope="row">Squad Name</th>
            <td className="right-side-student-info-table info-output" >{user.squad_name}</td>


          </tr>

          <tr>
          <th className="left-side-student-info-table" scope="row">Blood Group</th>
          <td className="left-side-student-info-table" >{user.blood_group}</td>

          <th  className="right-side-student-info-table info-title" scope="row">Home Address</th>
          <td className="right-side-student-info-table info-output" >{user.home_address}</td>
            </tr>

            <tr>
              <th className="left-side-student-info-table"  scope="row">Age</th>
              <td className="left-side-student-info-table " >{user.age}</td>

              <th className="right-side-student-info-table info-title"  scope="row">Communication Address</th>
              <td className="right-side-student-info-table info-output" >{user.communication_address}</td>
            </tr>

            <tr>
              <th className="left-side-student-info-table" scope="row">Gender</th>
              <td className="left-side-student-info-table " >{user.gender}</td>

              <th className="right-side-student-info-table info-title" scope="row">Aadhar Number</th>
              <td className="right-side-student-info-table info-output" >{user.aadhar_number}</td>
            </tr>

            <tr>
              <th className="left-side-student-info-table"  scope="row">Personal Email</th>
              <td className="left-side-student-info-table " >{user.personal_email}</td>

              <th className="right-side-student-info-table info-title" scope="row">Emergency Contact Name</th>
              <td className="right-side-student-info-table info-output" colspan="2">{user.emergency_contact_name}</td>
            </tr>
            <tr>
              <th className="left-side-student-info-table"  scope="row">Education</th>
              <td className="left-side-student-info-table " >{user.education}</td>

              <th className="right-side-student-info-table info-title" scope="row">Emergency Contact Number</th>
              <td className="right-side-student-info-table info-output" colspan="2">{user.emergency_contact_number}</td>
            </tr>
            <tr>
              <th className="left-side-student-info-table" scope="row">Date Of Join</th>
              <td className="left-side-student-info-table " >{user.date_of_Join}</td>

              <th className="right-side-student-info-table info-title"  scope="row">Interviewer Name</th>
              <td className="right-side-student-info-table info-output" >{user.interviewer}</td>
            </tr>
            <tr>
              <th className="left-side-student-info-table"  scope="row">Status</th>
              <td className="left-side-student-info-table " >{user.status}</td>

              <th className="right-side-student-info-table info-title"  scope="row">Interviewer Review</th>
              <td className="right-side-student-info-table info-output" >{user.interviewer_review}</td>
            </tr>
            <tr>
              <th className="right-side-student-info-table info-title" scope="row">Grade</th>
              <td className="right-side-student-info-table info-output" >{user.grade}</td>
          </tr>
        </tbody>
      </table>
          </React.Fragment>
      )}
    </div>
    </React.Fragment>}
    {loading && <h1 className="text-center">Loading...</h1>}
    </React.Fragment>
  )}

export default Studentinfo;
