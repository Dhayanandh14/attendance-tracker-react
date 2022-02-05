import React from 'react';
import FormInput from './FormInput';
import Formselectlist from './FormSelectList';
import Label from './Label';

const Modal = (props) => {
  const onclick=()=>{
    props.onclick()
  }
  return (
    <div>
    <div>
    <div>
      <button
        type="button"
        className="btn btn-warning add-coach-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      <box-icon name='plus' id="add-coach-plus-icon"></box-icon>
      {props.title==="Add Student"?"Add Student":"Add Coach"}
      </button>
    </div>
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title==="Add Student"?"Add Student":"Add Coach"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">

          <div className="mb-3">
            <Label className="form-label" htmlFor="coachNameFormControlInput" label ="Name"/>
            <FormInput type="text" name="name" onChange={props.onChange} id="coachNameFormControlInput" placeholder={props.title==="Add Student"?"Student name":"Coach name"} />
          </div>

          <div className="mb-3">
            <Label className="form-label" htmlFor="coachEmailFormControl" label = "Email"/>
            <FormInput type="email" name="email" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student email":"Coach email"} id="coachEmailFormControlInput"/>

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
                <FormInput type="text" name="profile_job" onChange={props.onChange}  placeholder="Enter profile job" id="coachProfileJobFormControlInput"/>
            </div>
             }

              <Label for="coachProfileJobFormControlInput" className="form-label" label={props.title==="Add Student"?"Student status":"Coach status"}/>
              <Formselectlist name="student_status" onChange={props.onChange} id="add-student-status" options={
                [
                  {value:"DEFAULT",label:"Select Status"},
                  {value:"Active",label:"Active"},
                  {value:"Inactive",label:"Inactive"}
                ]
              }/>


            </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={onclick}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Modal;
