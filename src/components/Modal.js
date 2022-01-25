import React from 'react';
import Forminput from './FormInput';
import Formselectlist from './FormSelectList';

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
        class="btn btn-warning add-coach-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      <box-icon name='plus' id="add-coach-plus-icon"></box-icon>
        Add coach
      </button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Coach
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">

          <div class="mb-3">
            <label for="coachNameFormControlInput" class="form-label">{props.title=="Add Student"?"Student Name":"Coach Name"}</label>
            <Forminput type="text" name="name" onChange={props.onChange} id="coachNameFormControlInput" placeholder="Enter Coach Name" />
          </div>

          <div class="mb-3">
            <label for="coachEmailFormControlInput" class="form-label">{props.title=="Add Student"?"Student Email":"Coach Email"}</label>
            <Forminput type="email" name="email" onChange={props.onChange} placeholder="Enter Coach Email" id="coachEmailFormControlInput"/>

          </div>
            <div class="mb-3">
                <label for="coachPasswordFormControlInput" class="form-label">{props.title=="Add Student"?"Student Password":"Coach Password"}</label>
                <Forminput type="password" name="password" onChange={props.onChange} placeholder="Enter Password" id="coachPasswordFormControlInput" />
            </div>

            <div class="mb-3">
                <label for="coachAccessIdFormControlInput" class="form-label">{props.title=="Add Student"?"Student Access Id":"Coach Access Id"}</label>
                <Forminput type="text" name="access_id" onChange={props.onChange} placeholder="Enter Password" id="coachAccessIdFormControlInput" />
            </div>

          {props.title === "Add Student"?
          <React.Fragment>
            <div className="mb-3">
            <label htmlFor="studentSquadNameFormControlInput">Squad Name</label>
             <Forminput  type="text" name="squadName" placeholder="Enter Student Squad Name" id="studentSquadNameFormControlInput" onChange={props.onChange}/>
           </div>

           <div className="mb-3">
           <label htmlFor="add-date-of-join">Date of Join</label>
             <Forminput type="date" name="dateOfJoin" placeholder="Enter Student Date of Join" id="add-date-of-join" onChange={props.onChange}/>
           </div>



           <div className="mb-3">
           <label id="studentEducationFormControlInput">Education</label>
             <Forminput  type="text" name="education" placeholder="Enter Student education" id="studentEducationFormControlInput" onChange={props.onChange}/>
           </div>


           <div className="mb-3">
           <label id="studentInterviewerFormControlInput">Interviewer Name</label>
            <Forminput type="text" name="interviewer_name" placeholder="Enter Student Interviewer Name"
            id="studentInterviewerFormControlInput" onChange={props.onChange}/>
           </div>


           <div className="mb-3">
            <label for="studentInterviewerReviewFormControlInput">Enter Student Interviewer Review</label>
             <Forminput type="text" name="interviewer_review" placeholder="Enter Student Interviewer Review" id="studentInterviewerReviewFormControlInput" onChange={props.onChange}/>
           </div>
           </React.Fragment>

           :


            <div class="mb-3">
                <label for="coachProfileJobFormControlInput" class="form-label">Profile Job</label>
                <Forminput type="text" name="profile_job" onChange={props.onChange}  placeholder="Enter Profile Job" id="coachProfileJobFormControlInput"/>
            </div>
             }

              <label for="coachProfileJobFormControlInput" class="form-label">{props.title=="Add Student"?"Student Status":"Coach Status"}</label>
              <Formselectlist name="student_status" onChange={props.onChange} id="add-student-status" options={
                [
                  {value:"DEFAULT",label:"Select Status"},
                  {value:"Active",label:"Active"},
                  {value:"Inactive",label:"Inactive"}
                ]
              }/>


            </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={onclick}>
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
