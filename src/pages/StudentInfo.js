import React, { useEffect } from 'react';
import { useState } from 'react';
import Editinfo from '../components/EditInfo';
import StudentService from '../Services/StudentService';

const Studentinfo = (props) => {
  const [studentInfo,setStudentInfo] = useState([])
  // const [userId,setUserId] = useState("")
  // const [studentId,setStudentId]=useState("")
  // const [nameInput,setNameInput]= useState('')
  // const [emailInput,setEmailInput]= useState('')
  // const [access_idInput,setAccess_idInput]= useState('')
  // const [ageInput,setAgeInput]= useState('')
  // const [contact_numberInput,setContact_numberInput]= useState('')
  // const [personal_emailInput,setPersonal_emailInput]= useState('')
  // const [squad_nameInput,setSquad_nameInput]= useState('')
  // const [date_of_JoinInput,setDate_of_JoinInput]= useState('')
  // const [educationInput,setEducationInput]= useState('')
  // const [aadhar_numberInput,setAadhar_numberInput]= useState('')
  // const [home_addressInput,setHome_addressInput]= useState('')
  // const [communication_addressInput,setCommunication_addressInput]= useState('')
  // const [interviewerInput,setInterviewerInput]= useState('')
  // const [interviewer_reviewInput,setInterviewer_reviewInput]= useState('')
  // const [emergency_contact_nameInput,setEmergency_contact_nameInput]= useState('')
  // const [emergency_contact_numberInput,setEmergency_contact_numberInput]= useState('')

  // //dropdown state
  // const [genderInput,setGenderInput]= useState('')
  // const [blood_groupInput,setBlood_groupInput]= useState('')
  // const [statusInput,setStatusInput]= useState('')
  // const [gradeInput,setGradeInput]= useState('')

  useEffect(() => {
    StudentService.getStudentInfoById(props.location.state).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      // setInformationToInput(res.data)
    });
  }, []);
  // const setInformationToInput=(data)=>{
  //   setUserId(data[0]["user_id"])
  //   setStudentId(data[0]["student_id"])
  //   setNameInput(data[0]["user_name"])
  //   setEmailInput(data[0]["user_email"])
  //   setAccess_idInput(data[0]["access_id"])
  //   setAgeInput(data[0]["age"])
  //   setContact_numberInput(data[0]["phone_number"])
  //   setPersonal_emailInput(data[0]["personal_email"])
  //   setSquad_nameInput(data[0]["squad_name"])
  //   setDate_of_JoinInput(data[0]["date_of_Join"])
  //   setEducationInput(data[0]["education"])
  //   setAadhar_numberInput(data[0]["aadhar_number"])
  //   setHome_addressInput(data[0]["home_address"])
  //   setCommunication_addressInput(data[0]["communication_address"])
  //   setInterviewerInput(data[0]["interviewer"])
  //   setInterviewer_reviewInput(data[0]["interviewer_review"])
  //   setEmergency_contact_nameInput(data[0]["emergency_contact_name"])
  //   setEmergency_contact_numberInput(data[0]["emergency_contact_number"])

  //   //drop down state
  //   setGenderInput(data[0]["gender"])
  //   setBlood_groupInput(data[0]["blood_group"])
  //   setStatusInput(data[0]["status"])
  //   setGradeInput(data[0]["grade"])

  // }



  // const nameInputChangeHandler = (event)=>{
  //   setNameInput(event.target.value)
  // }

  // const emailInputChangeHandler = (event)=>{
  //   setEmailInput(event.target.value)
  // }

  // const access_idInputChangeHandler = (event)=>{
  //   setAccess_idInput(event.target.value)
  // }
  // const ageInputChangeHandler = (event)=>{
  //   setAgeInput(event.target.value)
  // }

  // const contact_numberInputChangeHandler = (event)=>{
  //   setContact_numberInput(event.target.value)
  // }

  // const personal_emailInputChangeHandler = (event)=>{
  //   setPersonal_emailInput(event.target.value)
  // }

  // const squad_nameInputChangeHandler = (event)=>{
  //   setSquad_nameInput(event.target.value)
  // }

  // const date_of_JoinInputChangeHandler = (event)=>{
  //   setDate_of_JoinInput(event.target.value)
  // }

  // const educationInputChangeHandler = (event)=>{
  //   setEducationInput(event.target.value)
  // }

  // const aadhar_numberInputChangeHandler = (event)=>{
  //   setAadhar_numberInput(event.target.value)
  // }

  // const home_addressInputChangeHandler = (event)=>{
  //   setHome_addressInput(event.target.value)
  // }

  // const communication_addressInputChangeHandler = (event)=>{
  //   setCommunication_addressInput(event.target.value)
  // }

  // const interviewerInputChangeHandler = (event)=>{
  //   setInterviewerInput(event.target.value)
  // }

  // const interviewer_reviewInputChangeHandler = (event)=>{
  //   setInterviewer_reviewInput(event.target.value)
  // }

  // const emergency_contact_nameInputChangeHandler = (event)=>{
  //   setEmergency_contact_nameInput(event.target.value)
  // }

  // const emergency_contact_numberInputChangeHandler = (event)=>{
  //   setEmergency_contact_numberInput(event.target.value)
  // }

  // const genderInputChangeHandler=(event)=>{
  //   setGenderInput(event.target.value)
  //   console.log(event.target.value)
  // }
  // const blood_groupInputChangeHandler=(event)=>{
  //   setBlood_groupInput(event.target.value)
  //   console.log(event.target.value)
  // }

  // const statusInputChangeHandler=(event)=>{
  //   setStatusInput(event.target.value)
  //   console.log(event.target.value)
  // }
  // const gradeInputChangeHandler=(event)=>{
  //   setGradeInput(event.target.value)
  //   console.log(event.target.value)
  // }

  // const saveInfo=()=>{
  //  let updateStudentInfo={user_id:userId, student_id:studentId,user_name:nameInput, user_email:emailInput,access_id:access_idInput,
  //   age:ageInput,phone_number:contact_numberInput,
  //   personal_email:personal_emailInput,
  //   squad_name:squad_nameInput, date_of_Join: date_of_JoinInput,
  //   education:educationInput,aadhar_number:aadhar_numberInput,
  //   home_address:home_addressInput,communication_address:communication_addressInput,
  //   interviewer:interviewerInput,interviewer_review:interviewer_reviewInput,
  //   emergency_contact_name:emergency_contact_nameInput,emergency_contact_number:emergency_contact_numberInput, gender:genderInput, blood_group:blood_groupInput, status:statusInput,grade:gradeInput}
  //   console.log(updateStudentInfo)
  // }

  const fetch =()=>{
    StudentService.getStudentInfoById(props.location.state).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      alert("hi")
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
          <th scope="row">{user.date_of_Join.split("-").reverse().join("-")}</th>
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
