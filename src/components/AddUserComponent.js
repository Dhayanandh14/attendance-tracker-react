import React from 'react';
import FormInput from './FormInput';
import Formselectlist from './FormSelectList';
import Label from './Label';

const AddUserComponent = (props) => {
  return (
    <div>
    <div className="mb-3">

    <Label className="form-label" htmlFor="coachNameFormControlInput" label ="Name"/>
    <FormInput type="text" name="name" onChange={props.onChange} id="coachNameFormControlInput" placeholder={props.title==="Add Student"?"Student name":"Coach name"} />
  </div>

  <div className="mb-3">

    <Label className="form-label" htmlFor="coachEmailFormControl" label = "Email"/>
    <FormInput type="email" name="email" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student email":"Coach email"} id="coachEmailFormControlInput" required/>

  </div>
    <div className="mb-3">
        <Label className="form-label" htmlFor="coachPasswordFormControl" label="Password"/>
        <FormInput type="password" name="password" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student password":"Coach password"} id="coachPasswordFormControlInput" />
    </div>

    <div className="mb-3">
        <Label htmlFor="coachAccessIdFormControlInput" className="form-label" label="Access id"/>
        <FormInput type="text" name="access_id" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student access id":"coach access id"} id="coachAccessIdFormControlInput" />
    </div>

  {props.title === "Add Student"?
  <React.Fragment>
    <div className="mb-3">
    <Label htmlFor="studentSquadNameFormControlInput" label="Squad Name"/>
     <FormInput  type="text" name="squadName" placeholder="Enter Student Squad Name" id="studentSquadNameFormControlInput" onChange={props.onChange}/>
   </div>

   <div className="mb-3">
    <Label htmlFor="add-date-of-join" label="Date of join"/>
     <FormInput type="date" name="dateOfJoin" placeholder="Enter student date of join" id="add-date-of-join" onChange={props.onChange}/>
   </div>



   <div className="mb-3">
      <Label htmlFor="studentEducationFormControlInput" label="Education"/>

     <Formselectlist name="education" onChange={props.onChange} id="add-student-education" options={
      [
        {value:"DEFAULT",label:"Select Education"},
        {value:"High Secondary",label:"High Secondary"},
        {value:"PG",label:"PG"},
        {value:"UG",label:"UG"},
        {value:"Diploma",label:"Diploma"}
      ]
    }/>
   </div>

   </React.Fragment>

   :


    <div className="mb-3">
        <Label forHtml="coachProfileJobFormControlInput" className="form-label" label="Profile job"/>
        <Formselectlist name="profile_job" onChange={props.onChange} id="coachProfileJobFormControlInput"
                options={
                [
                  {value:"DEFAULT",label:"Select Profile Job"},
                  {value:"Tech coach",label:"Tech Coach"},
                  {value:"ELS",label:"ELS"},
                ]
                }/>
    </div>
     }



    </div>
  );
}

export default AddUserComponent;
