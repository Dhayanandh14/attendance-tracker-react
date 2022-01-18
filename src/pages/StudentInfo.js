import React, { useEffect } from 'react';
import { useState } from 'react';
import Editinfo from '../components/EditInfo';
import StudentService from '../Services/StudentService';

const Studentinfo = (props) => {
  const [studentInfo,setStudentInfo] = useState([])

  useEffect(() => {
    StudentService.getStudentInfoById(props.location.state).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      // setInformationToInput(res.data)
    });
  }, []);

  const fetch =()=>{
    StudentService.getStudentInfoById(props.location.state).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      // setInformationToInput(res.data)
    });
  }

  return (
    <div>
    <Editinfo id={props.location.state} func={fetch}/>

    <table className="table table-bordered">
    <tbody>
    {studentInfo.map((user) =>
      <React.Fragment key={user.user_id}>
        <tr>
          <td>Name</td>
          <th scope="row">{user.user_name}</th>
        </tr>
        <tr>
          <td>Student Email</td>
          <th scope="row">{user.user_email}</th>
        </tr>
        <tr>
          <td>Access Id</td>
          <th scope="row">{user.access_id}</th>
        </tr>
        <tr>
          <td>Age</td>
          <th scope="row">{user.age}</th>
        </tr>
        <tr>
          <td>Gender</td>
          <th scope="row">{user.gender}</th>
        </tr>
        <tr>
          <td>Blood Group</td>
          <th scope="row">{user.blood_group}</th>
        </tr>
        <tr>
          <td>Contact No</td>
          <th scope="row">{user.phone_number}</th>
        </tr>
        <tr>
          <td>Personal Email</td>
          <th scope="row">{user.personal_email}</th>
        </tr>
        <tr>
          <td>Batch</td>
          <th scope="row">Batch {user.batch}</th>
        </tr>
        <tr>
          <td>Student Status</td>
          <th scope="row">{user.status}</th>
          </tr>
          <tr>
            <td>Grade</td>
            <th scope="row">{user.grade}</th>
          </tr>
        <tr>
          <td>Squad Name</td>
          <th scope="row">{user.squad_name}</th>
        </tr>
        <tr>

          <td>Date of Join</td>
          {user.date_of_Join?<th scope="row">{user.date_of_Join.split("-").reverse().join("-")}</th>:
          <th scope="row">-</th>}

        </tr>
        <tr>
          <td>Education</td>
          <th scope="row">{user.education}</th>
        </tr>
        <tr>
          <td>Aadhar Number</td>
          <th scope="row">{user.aadhar_number}</th>
        </tr>
        <tr>
          <td>Home Address</td>
          <th scope="row">{user.home_address}</th>
        </tr>
        <tr>
          <td>Communication Address</td>
          <th scope="row">{user.communication_address}</th>
        </tr>
        <tr>
        <td>Interviewer Name</td>
        <th scope="row">{user.interviewer}</th>
        </tr>
        <tr>
        <td>Interviewer Review</td>
        <th scope="row">{user.interviewer_review}</th>
        </tr>
        <tr>
          <td>Emergency Contact Name</td>
          <th scope="row">{user.emergency_contact_name}</th>
        </tr>
        <tr>
          <td>Emergency Contact Number</td>
          <th scope="row">{user.emergency_contact_number}</th>
        </tr>
      </React.Fragment>
    )}

    </tbody>
  </table>

    </div>
  )}

export default Studentinfo;
