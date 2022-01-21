import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentService from '../Services/StudentService';
const Editinfo = (props) => {
  const [studentInfo,setStudentInfo] = useState([])
  const [userId,setUserId] = useState("")
  const [studentId,setStudentId]=useState("")
  const [nameInput,setNameInput]= useState('')
  const [emailInput,setEmailInput]= useState('')
  const [access_idInput,setAccess_idInput]= useState('')
  const [ageInput,setAgeInput]= useState('')
  const [contact_numberInput,setContact_numberInput]= useState('')
  const [personal_emailInput,setPersonal_emailInput]= useState('')
  const [batchInput,setBatchInput]= useState('')
  const [squad_nameInput,setSquad_nameInput]= useState('')
  const [date_of_JoinInput,setDate_of_JoinInput]= useState('')
  const [educationInput,setEducationInput]= useState('')
  const [aadhar_numberInput,setAadhar_numberInput]= useState('')
  const [home_addressInput,setHome_addressInput]= useState('')
  const [communication_addressInput,setCommunication_addressInput]= useState('')
  const [interviewerInput,setInterviewerInput]= useState('')
  const [interviewer_reviewInput,setInterviewer_reviewInput]= useState('')
  const [emergency_contact_nameInput,setEmergency_contact_nameInput]= useState('')
  const [emergency_contact_numberInput,setEmergency_contact_numberInput]= useState('')

  //dropdown state
  const [genderInput,setGenderInput]= useState('')
  const [blood_groupInput,setBlood_groupInput]= useState('')
  const [statusInput,setStatusInput]= useState('')
  const [gradeInput,setGradeInput]= useState('')

  useEffect(() => {
    StudentService.getStudentInfoById(props.id).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      setInformationToInput(res.data)
    });
  }, []);

  const setInformationToInput=(data)=>{
    setUserId(data[0]["user_id"])
    setStudentId(data[0]["student_id"])
    setNameInput(data[0]["user_name"])
    setEmailInput(data[0]["user_email"])
    setAccess_idInput(data[0]["access_id"])
    setAgeInput(data[0]["age"])
    setContact_numberInput(data[0]["phone_number"])
    setPersonal_emailInput(data[0]["personal_email"])
    setSquad_nameInput(data[0]["squad_name"])
    setDate_of_JoinInput(data[0]["date_of_Join"])
    setEducationInput(data[0]["education"])
    setAadhar_numberInput(data[0]["aadhar_number"])
    setHome_addressInput(data[0]["home_address"])
    setCommunication_addressInput(data[0]["communication_address"])
    setInterviewerInput(data[0]["interviewer"])
    setInterviewer_reviewInput(data[0]["interviewer_review"])
    setEmergency_contact_nameInput(data[0]["emergency_contact_name"])
    setEmergency_contact_numberInput(data[0]["emergency_contact_number"])

    //drop down state
    setGenderInput(data[0]["gender"])
    setBlood_groupInput(data[0]["blood_group"])
    setStatusInput(data[0]["status"])
    setGradeInput(data[0]["grade"])
    setBatchInput(data[0]["batch"])

  }



  const nameInputChangeHandler = (event)=>{
    setNameInput(event.target.value)
  }

  const emailInputChangeHandler = (event)=>{
    setEmailInput(event.target.value)

  }

  const access_idInputChangeHandler = (event)=>{
    setAccess_idInput(event.target.value)
  }
  const ageInputChangeHandler = (event)=>{
    setAgeInput(event.target.value)
  }

  const contact_numberInputChangeHandler = (event)=>{
    setContact_numberInput(event.target.value)
  }

  const personal_emailInputChangeHandler = (event)=>{
    setPersonal_emailInput(event.target.value)
  }

  const squad_nameInputChangeHandler = (event)=>{
    setSquad_nameInput(event.target.value)
  }

  const date_of_JoinInputChangeHandler = (event)=>{
    setDate_of_JoinInput(event.target.value)
  }

  const educationInputChangeHandler = (event)=>{
    setEducationInput(event.target.value)
  }

  const aadhar_numberInputChangeHandler = (event)=>{
    setAadhar_numberInput(event.target.value)
  }

  const home_addressInputChangeHandler = (event)=>{
    setHome_addressInput(event.target.value)
  }

  const communication_addressInputChangeHandler = (event)=>{
    setCommunication_addressInput(event.target.value)
  }

  const interviewerInputChangeHandler = (event)=>{
    setInterviewerInput(event.target.value)
  }

  const interviewer_reviewInputChangeHandler = (event)=>{
    setInterviewer_reviewInput(event.target.value)
  }

  const emergency_contact_nameInputChangeHandler = (event)=>{
    setEmergency_contact_nameInput(event.target.value)
  }

  const emergency_contact_numberInputChangeHandler = (event)=>{
    setEmergency_contact_numberInput(event.target.value)
  }

  const genderInputChangeHandler=(event)=>{
    setGenderInput(event.target.value)
    console.log(event.target.value)
  }
  const blood_groupInputChangeHandler=(event)=>{
    setBlood_groupInput(event.target.value)
    console.log(event.target.value)
  }

  const statusInputChangeHandler=(event)=>{
    setStatusInput(event.target.value)
    console.log(event.target.value)
  }
  const gradeInputChangeHandler=(event)=>{
    setGradeInput(event.target.value)
    console.log(event.target.value)
  }
  const batchInputChangeHandler=(event)=>{
    setBatchInput(event.target.value)
  }

  const saveInfo=()=>{
   let updateStudentInfo={user_id:userId, student_id:studentId,user_name:nameInput, user_email:emailInput,access_id:access_idInput,role:"student",
    age:ageInput,phone_number:contact_numberInput,
    personal_email:personal_emailInput,
    squad_name:squad_nameInput, date_of_Join: date_of_JoinInput,
    education:educationInput,aadhar_number:aadhar_numberInput,
    home_address:home_addressInput,communication_address:communication_addressInput,
    interviewer:interviewerInput,interviewer_review:interviewer_reviewInput,
    emergency_contact_name:emergency_contact_nameInput,emergency_contact_number:emergency_contact_numberInput, gender:genderInput, blood_group:blood_groupInput, status:statusInput,grade:gradeInput,batch:batchInput}
    console.log(updateStudentInfo)
    StudentService.editStudentDetails(userId,updateStudentInfo).then(res => {
      console.log(res.data);
      props.func()
    })
  }

  return (
    <div>
    <div style={{"float": "right"}}>
    <div id="student-edit-info-button">
    <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit Info</button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Edit Info</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">

         <React.Fragment>

          <div className="mb-3">
            <label htmlFor="student-name-info" className="form-label">Name</label>
            <input type="name" className="form-control" onChange={nameInputChangeHandler} value={nameInput}
            id="student-name-info"/>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={emailInputChangeHandler} value={emailInput} id="exampleFormControlInput"placeholder="Enter Your Email"/>
          </div>

          <div className="row ">
            <div className="col-md-8">
            <label htmlFor="student-access-id" className="form-label"> Access Id</label>
              <input type="text" className="form-control" onChange={access_idInputChangeHandler} value={access_idInput} id="student-access-id" aria-label="Access Id"/>
            </div>
            <div className="col-md-4">
              <label htmlFor="student-age" className="form-label">Age</label>
                <input type="text" className="form-control" onChange={ageInputChangeHandler} value={ageInput} id="student-age" aria-label="age"/>
            </div>
          </div>


          <div className="row mt-2">
          <div className="col-md-6">
            <label htmlFor="student-gender" className="form-label">Gender</label>
              <select className="form-select" aria-label="Default select example" id="student-gender"
              value={genderInput} onChange={genderInputChangeHandler}>
                <option value="DEFAULT">{genderInput? genderInput :"Select Gender"}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
          </div>
            <div className="col-md-6">
              <label htmlFor="student-blood-group" className="form-label"> Blood Group</label>
                <select className="form-select" aria-label="Default select example" id="student-gender"
                value={blood_groupInput} onChange={blood_groupInputChangeHandler}>
                  <option value="DEFAULT">{blood_groupInput? blood_groupInput :"Select Blood Group"}</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
               </select>
            </div>
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="student-contact-number" className="form-label"> Contact Number</label>
            <input type="text" className="form-control" onChange={contact_numberInputChangeHandler}
            value={contact_numberInput} id="student-contact-number"/>
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="student-personal-email" className="form-label"> Personal Email</label>
            <input type="email" className="form-control" onChange={personal_emailInputChangeHandler}
            value={personal_emailInput} id="student-personal-email"/>
          </div>

          <div className="mb-3 ">
            <label htmlFor="student-batch" className="form-label">Student Batch</label>
            <select className="form-select" value={batchInput} aria-label="Default select example" onChange={batchInputChangeHandler} id="student-batch" >
              <option value="DEFAULT">{batchInput? batchInput :"Select Batch"}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>


          <div className="mb-3 ">
            <label htmlFor="student-status" className="form-label">Student Status</label>
            <select className="form-select" value={statusInput} aria-label="Default select example" onChange={statusInputChangeHandler} id="student-status" >
              <option value="DEFAULT">{statusInput? statusInput :"Select Status"}</option>
              <option value="Active">Active</option>
              <option value="InActive">Inactive</option>
            </select>
          </div>


          <div className="mb-3 ">
            <label htmlFor="student-grade" className="form-label">Grade</label>
            <select className="form-select" aria-label="Default select example" value={gradeInput} onChange={gradeInputChangeHandler} id="student-grade" >
              <option value="DEFAULT">{gradeInput? gradeInput :"Select Grade"}</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">E</option>
            </select>
          </div>


          <div className="mb-3">
            <label htmlFor="squad-name" className="form-label"> Squad Name</label>
            <input type="text" className="form-control" onChange={squad_nameInputChangeHandler}
            value={squad_nameInput} id="squad-name"/>
          </div>



          <div className="mb-3">

          <label htmlFor="date-of-join" className="form-label"> Date of Join</label>
          <input type="date" className="form-control" onChange={date_of_JoinInputChangeHandler}
          value={date_of_JoinInput} id="date-of-join"/>
        </div>

          <div className="mb-3">
            <label htmlFor="education" className="form-label">Education</label>
            <input type="text" className="form-control" onChange={educationInputChangeHandler}
            value={educationInput} id="education"/>
          </div>

          <div className="mb-3">
            <label htmlFor="aadhar-number" className="form-label">Aadhar Number</label>
            <input type="text" className="form-control" onChange={aadhar_numberInputChangeHandler}
            value={aadhar_numberInput} id="aadhar-number"/>
          </div>

          <div className="mb-3">
            <label htmlFor="home-address" className="form-label">Home Address</label>
            <textarea className="form-control" id="home-address" onChange={home_addressInputChangeHandler}
            value={home_addressInput} rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="communication-address" className="form-label">Communication Address</label>
            <textarea className="form-control" id="communication-address" onChange={communication_addressInputChangeHandler} value={communication_addressInput} rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="interviewer-name" className="form-label">Interviewer Name</label>
            <input type="text" className="form-control" onChange={interviewerInputChangeHandler}
            value={interviewerInput} id="interviewer-name"/>
          </div>

          <div className="mb-3">
            <label htmlFor="interviewer-review" className="form-label">Interviewer Review</label>
            <input type="text" className="form-control" onChange={interviewer_reviewInputChangeHandler}
            value={interviewer_reviewInput} id="interviewer-review"/>
          </div>

          <div className="mb-3">
            <label htmlFor="emergency-contact-name" className="form-label">Emergency Contact Name</label>
            <input type="text" className="form-control" onChange={emergency_contact_nameInputChangeHandler} value={emergency_contact_nameInput} id="emergency-contact-name"/>
          </div>

          <div className="mb-3">
            <label htmlFor="emergency-contact-number" className="form-label">Emergency Contact Number</label>
            <input type="number" className="form-control" onChange={emergency_contact_numberInputChangeHandler} value={emergency_contact_numberInput} id="emergency-contact-number"/>
          </div>
          <div className="float-end">
            <button type="button" className="btn btn-secondary mx-2 text-light" data-bs-dismiss="offcanvas" >Cancel</button>
            <button type="button" className="btn btn-success mx-2" data-bs-dismiss="offcanvas" onClick={saveInfo}>Save</button>
          </div>
        </React.Fragment>

      </div>
    </div>
  </div>
  </div>
    </div>


  );
}

export default Editinfo;
