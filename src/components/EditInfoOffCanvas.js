import React from 'react';
import Forminput from './FormInput';
import Formselectlist from './FormSelectList';
const Editinfooffcanvas = (props) => {
  const{infoFormValues} = props;

  const saveInfo=()=>{
    props.onclick()
  }
  return (
    <div>
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
            <Forminput  type="text" onChange={props.onChange} name="name" value={infoFormValues.name}id="student-name-info"/>

          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <Forminput type="email" onChange={props.onChange} name="email" value={infoFormValues.email} placeholder="Enter Your Email"/>
          </div>

          <div className="row ">
            <div className="col-md-8">
            <label htmlFor="student-access-id" className="form-label"> Access Id</label>
              <Forminput type="text" id="student-access-id" name="access_id"  value={infoFormValues.access_id} onChange={props.onChange}/>
            </div>
            <div className="col-md-4">
              <label htmlFor="student-age" className="form-label">Age</label>
              <Forminput type="text" id="student-age" name="age" value={infoFormValues.age}
              onChange={props.onChange}/>
            </div>
          </div>


          <div className="row mt-2">
          <div className="col-md-6">
            <label htmlFor="student-gender" className="form-label">Gender</label>
            <Formselectlist name="gender" onChange={props.onChange} value={infoFormValues.gender} id="student-gender"
            options={[
              {value:"DEFAULT",label:infoFormValues.gender? infoFormValues.gender :"Select Gender"},
              {value:"Male",label:"Male"},
              {value:"Female",label:"Female"},
              {value:"others",label:"others"}
          ]}
            />
          </div>
            <div className="col-md-6">
              <label htmlFor="student-blood-group" className="form-label"> Blood Group</label>
              <Formselectlist name="blood_group" onChange={props.onChange}  id="student-gender"
              value={infoFormValues.blood_group} options={[{value:"DEFAULT",label:infoFormValues.blood_group?infoFormValues.blood_group:"Select Blood Group"},
              {value:"A+",label:"A+"},{value:"A-",label:"B+"}
            ]}/>
            </div>
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="student-contact-number" className="form-label"> Contact Number</label>
            <Forminput type="text" id="student-contact-number" name="contact_number" value={infoFormValues.contact_number}
             onChange={props.onChange}/>
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="student-personal-email" className="form-label"> Personal Email</label>
            <Forminput type="email" value={infoFormValues.personal_email} name="personal_email" id="student-personal-email" onChange={props.onChange}/>
          </div>



          <div className="mb-3 ">
            <label htmlFor="student-status" className="form-label">Student Status</label>

            <Formselectlist name="status" value={infoFormValues.status} onChange={props.onChange} id="student-status" options={[
              {value:"DEFAULT", label:infoFormValues.status?infoFormValues.status:"Defauld Select Example"},
              {value:"Active",label:"Active"},{value:"Inactive", label:"Inactive"}
            ]}/>
          </div>

          {infoFormValues.squad_name &&
          <div className="mb-3">
            <label htmlFor="squad-name" className="form-label"> Squad Name</label>
            <Forminput type="text" name="squad_name" onChange={props.onChange} value={infoFormValues.squad_name}
            id="squad-name"
            />
          </div>}

          {infoFormValues.date_of_Join &&
          <div className="mb-3">
            <label htmlFor="date-of-join" className="form-label"> Date of Join</label>
            <Forminput type="date" name="date_of_Join" onChange={props.onChange} value={infoFormValues.date_of_Join} id="date-of-join"/>
        </div>}

       {infoFormValues.education &&
        <div className="mb-3">
            <label htmlFor="education" className="form-label">Education</label>
            <Forminput type="text" name="education" onChange={props.onChange} value={infoFormValues.education} id="education"/>
          </div>
        }

          <div className="mb-3">
            <label htmlFor="aadhar-number" className="form-label">Aadhar Number</label>
            <Forminput type="text" name="aadhar_number" onChange={props.onChange} id="aadhar_number" value={infoFormValues.aadhar_number} id="aadhar-number"/>
          </div>

          <div className="mb-3">
            <label htmlFor="home-address" className="form-label">Home Address</label>
            <Forminput type="text" name="home_address" onChange={props.onChange} value={infoFormValues.home_address} id="home-address"/>
          </div>

          <div className="mb-3">
            <label htmlFor="communication-address" className="form-label">Communication Address</label>
            <Forminput type="text" name="communication_address" id="communication-address" onChange={props.onChange} value={infoFormValues.communication_address}/>
          </div>

          {infoFormValues.interviewer &&
          <div className="mb-3">
            <label htmlFor="interviewer-name" className="form-label">Interviewer Name</label>
            <Forminput type="text" name="interviewer_name" onChange={props.onChange} value={infoFormValues.interviewer} id="interviewer-name"/>
          </div>}

          {infoFormValues.interviewer_review &&
          <div className="mb-3">
            <label htmlFor="interviewer-review" className="form-label">Interviewer Review</label>
            <Forminput type="text" name="interviewer_review" onChange={props.onChange} value={infoFormValues.interviewer_review} id="interviewer-review"/>
          </div>}

          <div className="mb-3">
            <label htmlFor="emergency-contact-name" className="form-label">Emergency Contact Name</label>
            <Forminput type="text" name="emergency_contact_name" onChange={props.onChange} value={infoFormValues.emergency_contact_name} id="emergency_contact_name"/>

          </div>

          <div className="mb-3">
            <label htmlFor="emergency-contact-number" className="form-label">Emergency Contact Number</label>
            <Forminput type="number" name="emergency_contact_number" onChange={props.onChange} value={infoFormValues.emergency_contact_number} id="emergency-contact-number"/>
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
  );
}

export default Editinfooffcanvas;
