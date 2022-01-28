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
        Add coach
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
              Add Coach
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
            <Label className="form-label" htmlFor="coachNameFormControlInput" label = {props.title==="Add Student"?"Student Name":"Coach Name"}/>
            <FormInput type="text" name="name" onChange={props.onChange} id="coachNameFormControlInput" placeholder="Enter Coach Name" />
          </div>

          <div className="mb-3">
            <Label className="form-label" htmlFor="coachEmailFormControl" label = {props.title==="Add Student"?"Student Email":"Coach Email"}/>
            <FormInput type="email" name="email" onChange={props.onChange} placeholder="Enter Coach Email" id="coachEmailFormControlInput"/>

          </div>
            <div className="mb-3">
                <Label className="form-label" htmlFor="coachPasswordFormControl" label={props.title==="Add Student"?"Student Password":"Coach Password"}/>
                <FormInput type="password" name="password" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student Password":"Coach Password"} id="coachPasswordFormControlInput" />
            </div>

            <div className="mb-3">
                <Label htmlFor="coachAccessIdFormControlInput" className="form-label" label={props.title==="Add Student"?"Student Access Id":"Coach Access Id"}/>
                <FormInput type="text" name="access_id" onChange={props.onChange} placeholder={props.title==="Add Student"?"Student Access Id":"Coach Access Id"} id="coachAccessIdFormControlInput" />
            </div>

          {props.title === "Add Student"?
          <React.Fragment>
            <div className="mb-3">
            <Label htmlFor="studentSquadNameFormControlInput" label="Squad Name"/>
             <FormInput  type="text" name="squadName" placeholder="Enter Student Squad Name" id="studentSquadNameFormControlInput" onChange={props.onChange}/>
           </div>

           <div className="mb-3">
            <Label htmlFor="add-date-of-join" label="Date of Join"/>
             <FormInput type="date" name="dateOfJoin" placeholder="Enter Student Date of Join" id="add-date-of-join" onChange={props.onChange}/>
           </div>



           <div className="mb-3">
              <Label htmlFor="studentEducationFormControlInput" label="Education"/>
             <FormInput  type="text" name="education" placeholder="Enter Student education" id="studentEducationFormControlInput" onChange={props.onChange}/>
           </div>


           <div className="mb-3">
            <Label htmlFor="studentInterviewerFormControlInput" label="Interviewer Name"/>
            <FormInput type="text" name="interviewer_name" placeholder="Enter Student Interviewer Name"
            id="studentInterviewerFormControlInput" onChange={props.onChange}/>
           </div>


           <div className="mb-3">
              <Label htmlFor="studentInterviewerReviewFormControlInput" label="Enter Student Interviewer Review"/>
             <FormInput type="text" name="interviewer_review" placeholder="Enter Student Interviewer Review" id="studentInterviewerReviewFormControlInput" onChange={props.onChange}/>
           </div>
           </React.Fragment>

           :


            <div className="mb-3">
                <Label forHtml="coachProfileJobFormControlInput" className="form-label" label="Profile Job"/>
                <FormInput type="text" name="profile_job" onChange={props.onChange}  placeholder="Enter Profile Job" id="coachProfileJobFormControlInput"/>
            </div>
             }

              <Label for="coachProfileJobFormControlInput" className="form-label" label={props.title==="Add Student"?"Student Status":"Coach Status"}/>
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
