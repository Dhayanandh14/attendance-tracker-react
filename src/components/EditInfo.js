import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Editinfo = (props) => {
  const [nameInput,setNameInput]= useState()
  const [emailInput,setEmailInput]= useState()
  const [access_idInput,setAccess_idInput]= useState()
  const [ageInput,setAgeInput]= useState()
  const [contact_numberInput,setContact_numberInput]= useState()
  const [personal_emailInput,setPersonal_emailInput]= useState()
  const [squad_nameInput,setSquad_nameInput]= useState()
  const [date_of_JoinInput,setDate_of_JoinInput]= useState()
  const [educationInput,setEducationInput]= useState()
  const [aadhar_numberInput,setAadhar_numberInput]= useState()
  const [home_addressInput,setHome_addressInput]= useState()
  const [communication_addressInput,setCommunication_addressInput]= useState()
  const [interviewerInput,setInterviewerInput]= useState()
  const [interviewer_reviewInput,setInterviewer_reviewInput]= useState()
  const [emergency_contact_nameInput,setEmergency_contact_nameInput]= useState()
  const [emergency_contact_numberInput,setEmergency_contact_numberInput]= useState()

  // props.studentInformation.map((info)=>{

  //   console.log(info)
  // })

  useEffect(() => {
    console.log(props.studentInformation[0])
  },[])



  const nameInputChangeHandler = (event)=>{
    setNameInput(event.target.value)
  }

  const emailInputChangeHandler = (event)=>{

  }

  const access_idInputChangeHandler = (event)=>{

  }
  const ageInputChangeHandler = (event)=>{

  }

  const contact_numberInputChangeHandler = (event)=>{

  }

  const personal_emailInputChangeHandler = (event)=>{

  }

  const squad_nameInputChangeHandler = (event)=>{

  }

  const date_of_JoinInputChangeHandler = (event)=>{

  }

  const educationInputChangeHandler = (event)=>{

  }

  const aadhar_numberInputChangeHandler = (event)=>{

  }

  const home_addressInputChangeHandler = (event)=>{

  }

  const communication_addressInputChangeHandler = (event)=>{

  }

  const interviewerInputChangeHandler = (event)=>{

  }

  const interviewer_reviewInputChangeHandler = (event)=>{

  }

  const emergency_contact_nameInputChangeHandler = (event)=>{

  }

  const emergency_contact_numberInputChangeHandler = (event)=>{

  }


  const saveInfo=()=>{
    alert('Save info')
  }

  return (
    <div>
    <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit Info</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Edit Info</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        {props.studentInformation.map((info) =>
         <React.Fragment>

          <div class="mb-3">
            <label for="student-name-info" class="form-label">Name</label>
            <input type="name" class="form-control" onChange={nameInputChangeHandler} id="student-name" value={nameInput}
            id="student-name-info"/>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" onChange={emailInputChangeHandler} id="exampleFormControlInput1" value={info.user_email} id="exampleFormControlInput"placeholder="name@example.com"/>
          </div>

          <div class="row ">
            <div class="col-md-8">
            <label for="student-access-id" class="form-label"> Access Id</label>
              <input type="text" class="form-control" onChange={access_idInputChangeHandler} value={info.access_id} id="student-access-id" aria-label="Access Id"/>
            </div>
            <div class="col-md-4">
              <label for="student-age" class="form-label">Age</label>
                <input type="text" class="form-control" onChange={ageInputChangeHandler} value={info.age} id="student-age" aria-label="age"/>
            </div>
          </div>


          <div class="row mt-2">
          <div class="col-md-6">
          <label for="student-gender" class="form-label">Gender</label>
            <select class="form-select" aria-label="Default select example" id="student-gender" value={info.gender}>
              <option selected>{info.gender? info.gender :"Select Gender"}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
            <div class="col-md-6">
              <label for="student-blood-group" class="form-label"> Blood Group</label>
                <select class="form-select" aria-label="Default select example" id="student-gender" value={info.gender}>
                  <option selected>{info.blood_group? info.blood_group :"Select Blood Group"}</option>
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

          <div class="mb-3 mt-2">
            <label for="student-contact-number" class="form-label"> Contact Number</label>
            <input type="text" class="form-control" onChange={contact_numberInputChangeHandler} value={info.phone_number} id="student-contact-number"/>
          </div>

          <div class="mb-3 mt-2">
            <label for="student-personal-email" class="form-label"> Personal Email</label>
            <input type="email" class="form-control" onChange={personal_emailInputChangeHandler} value={info.personal_email} id="student-personal-email"/>
          </div>

          <div class="mb-3 ">
            <label for="student-status" class="form-label">Student Status</label>
            <select class="form-select" aria-label="Default select example" id="student-status" >
              <option selected>{info.status? info.status :"Select Status"}</option>
              <option value="Active">Active</option>
              <option value="InActive">Inactive</option>
            </select>
          </div>


          <div class="mb-3 ">
            <label for="student-grade" class="form-label">Grade</label>
            <select class="form-select" aria-label="Default select example" id="student-grade" >
              <option selected>{info.grade? info.grade :"Select Grade"}</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">E</option>
            </select>
          </div>


          <div class="mb-3">
            <label for="squad-name" class="form-label"> Squad Name</label>
            <input type="text" class="form-control" onChange={squad_nameInputChangeHandler} value={info.squad_name} id="squad-name"/>
          </div>



          <div class="mb-3">

            <label for="date-of-join" class="form-label"> Date of Join</label>
            <input type="date" class="form-control" onChange={date_of_JoinInputChangeHandler} value={info.date_of_Join} id="date-of-join"/>
          </div>

          <div class="mb-3">
            <label for="education" class="form-label">Education</label>
            <input type="text" class="form-control" onChange={educationInputChangeHandler} value={info.education} id="education"/>
          </div>

          <div class="mb-3">
            <label for="aadhar-number" class="form-label">Aadhar Number</label>
            <input type="text" class="form-control" onChange={aadhar_numberInputChangeHandler} value={info.aadhar_number} id="aadhar-number"/>
          </div>

          <div class="mb-3">
            <label for="home-address" class="form-label">Home Address</label>
            <textarea class="form-control" id="home-address" onChange={home_addressInputChangeHandler} value={info.home_address} rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label for="communication-address" class="form-label">Communication Address</label>
            <textarea class="form-control" id="communication-address" onChange={communication_addressInputChangeHandler} value={info.communication_address} rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label for="interviewer-name" class="form-label">Interviewer Name</label>
            <input type="text" class="form-control" onChange={interviewerInputChangeHandler} value={info.interviewer} id="interviewer-name"/>
          </div>

          <div class="mb-3">
            <label for="interviewer-review" class="form-label">Interviewer Review</label>
            <input type="text" class="form-control" onChange={interviewer_reviewInputChangeHandler} value={info.interviewer_review} id="interviewer-review"/>
          </div>

          <div class="mb-3">
            <label for="emergency-contact-name" class="form-label">Emergency Contact Name</label>
            <input type="text" class="form-control" onChange={emergency_contact_nameInputChangeHandler} value={info.emergency_contact_name} id="emergency-contact-name"/>
          </div>

          <div class="mb-3">
            <label for="emergency-contact-number" class="form-label">Emergency Contact Number</label>
            <input type="number" class="form-control" onChange={emergency_contact_numberInputChangeHandler} value={info.emergency_contact_number} id="emergency-contact-number"/>
          </div>
          <div class="float-end">
            <button type="button" class="btn btn-secondary mx-2 text-light" data-bs-dismiss="offcanvas" >Cancel</button>
            <button type="button" class="btn btn-success mx-2" onClick={saveInfo}>Save</button>
          </div>
        </React.Fragment>
        )}
      </div>
    </div>
    </div>
  );
}

export default Editinfo;
