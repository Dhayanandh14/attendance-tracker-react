import React from 'react';
import AddUserComponent from './AddUserComponent';
import FormInput from './FormInput';
import Formselectlist from './FormSelectList';
import Label from './Label';
const EditInfoOffCanvas = (props) => {
  const{infoFormValues} = props;

  const saveInfo=()=>{
    props.onclick()
  }
  return (
    <div>
    <div id="student-edit-info-button" style={{"marginTop":props.style}}>
    <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    {props.title == "Add Student" && "Add Student"}
    {props.title == "Add Coach" && "Add Coach"}
    {props.title == "students"&& "Edit Info"}
    {props.title == "Coaches" && "Edit Info"}</button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{    "width": "30%"}}>
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">
          {props.title == "Add Student" && "Add Student"}
          {props.title == "Add Coach" && "Add Coach"}
          {props.title == "students"&& "Edit Info"}
          {props.title == "Coaches" && "Edit Info"}
        </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
          {(props.title =="students" || props.title== "Coaches")&&
            <React.Fragment>
              <div className="mb-3">
                <Label htmlFor="student-name-info" className="form-label" label="Name"/>
                <FormInput  type="text" onChange={props.onChange} name="name" value={infoFormValues.name}id="student-name-info"/>
              </div>

              <div className="mb-3">
                <Label htmlFor="exampleFormControlInput1" className="form-label" label="Email address"/>
                <FormInput type="email" onChange={props.onChange} name="email" value={infoFormValues.email} placeholder="Enter Your Email"/>
              </div>

              <div className="row ">
                <div className="col-md-8">
                <Label htmlFor="student-access-id" className="form-label" label="Access Id"/>
                  <FormInput type="text" id="student-access-id" name="access_id"  value={infoFormValues.access_id} onChange={props.onChange}/>
                </div>
                <div className="col-md-4">
                  <Label htmlFor="student-age" className="form-label" label="Age"/>
                  <FormInput type="text" id="student-age" name="age" value={infoFormValues.age}
                  onChange={props.onChange}/>
                </div>
              </div>


              <div className="row mt-2">
              <div className="col-md-6">
                <Label htmlFor="student-gender" className="form-label" label="Gender"/>
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
                  <Label htmlFor="student-blood-group" className="form-label" label="Blood Group"/>
                  <Formselectlist name="blood_group" onChange={props.onChange}  id="student-gender"
                  value={infoFormValues.blood_group} options={[{value:"DEFAULT",label:infoFormValues.blood_group?infoFormValues.blood_group:"Select Blood Group"},
                  {value:"A+",label:"A+"},{value:"A-",label:"B+"}
                ]}/>
                </div>
              </div>

              <div className="mb-3 mt-2">
                <Label htmlFor="student-contact-number" className="form-label" label="Contact Number"/>
                <FormInput type="text" id="student-contact-number" name="contact_number" value={infoFormValues.contact_number}
                onChange={props.onChange}/>
              </div>

              <div className="mb-3 mt-2">
                <Label htmlFor="student-personal-email" className="form-label" label="Personal Email"/>
                <FormInput type="email" value={infoFormValues.personal_email} name="personal_email" id="student-personal-email" onChange={props.onChange}/>
              </div>

              <div className="mb-3 ">
                <Label htmlFor="student-status" className="form-label" label= "Status"/>

                <Formselectlist name="status" value={infoFormValues.status} onChange={props.onChange} id="student-status" options={[
                  {value:"DEFAULT", label:infoFormValues.status?infoFormValues.status:"Default Select Example"},
                  {value:"Active",label:"Active"},{value:"Inactive", label:"Inactive"}
                ]}/>
              </div>

              {props.title == "students" &&
              <React.Fragment>
              <div className="mb-3">
                <Label htmlFor="squad-name" className="form-label" label="Squad Name"/>
                <FormInput type="text" name="squad_name" onChange={props.onChange} value={infoFormValues.squad_name}
                id="squad-name"
                />
              </div>


              <div className="mb-3">
                <Label htmlFor="date-of-join" className="form-label" label="Date of Join"/>
                <FormInput type="date" name="date_of_Join" onChange={props.onChange} value={infoFormValues.date_of_Join} id="date-of-join"/>
              </div>


              <div className="mb-3">
                <Label htmlFor="education" className="form-label" label="Education"/>
                <Formselectlist name="education" onChange={props.onChange} id="add-student-education" value={infoFormValues.education} options={
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
            }

              <div className="mb-3">
                <Label htmlFor="aadhar-number" className="form-label" label="Aadhar Number"/>
                <FormInput type="text" name="aadhar_number" onChange={props.onChange} id="aadhar_number" value={infoFormValues.aadhar_number} id="aadhar-number"/>
              </div>

              <div className="mb-3">
                <Label htmlFor="home-address" className="form-label" label="Home Address"/>
                <FormInput type="text" name="home_address" onChange={props.onChange} value={infoFormValues.home_address} id="home-address"/>
              </div>

              <div className="mb-3">
                <Label htmlFor="communication-address" className="form-label" label="Communication Address"/>
                <FormInput type="text" name="communication_address" id="communication-address" onChange={props.onChange} value={infoFormValues.communication_address}/>
              </div>

              {props.title == "students" &&
              <React.Fragment>
              <div className="mb-3">
                <Label htmlFor="interviewer-name" className="form-label" label="Interviewer Name"/>
                <FormInput type="text" name="interviewer" onChange={props.onChange} value={infoFormValues.interviewer} id="interviewer-name"/>
              </div>


              <div className="mb-3">
                <Label htmlFor="interviewer-review" className="form-label" label="Interviewer Review"/>
                <FormInput type="text" name="interviewer_review" onChange={props.onChange} value={infoFormValues.interviewer_review} id="interviewer-review"/>
              </div>
            </React.Fragment>
            }

              <div className="mb-3">
                <Label htmlFor="emergency-contact-name" className="form-label" label="Emergency Contact Name"/>
                <FormInput type="text" name="emergency_contact_name" onChange={props.onChange} value={infoFormValues.emergency_contact_name} id="emergency_contact_name"/>

              </div>

              <div className="mb-3">
                <Label htmlFor="emergency-contact-number" className="form-label" label="Emergency Contact Number"/>
                <FormInput type="number" name="emergency_contact_number" onChange={props.onChange} value={infoFormValues.emergency_contact_number} id="emergency-contact-number"/>
              </div>

            </React.Fragment>
          }
          <div style={{"marginBottom":"20px"}}>
          {props.title =="Add Student" &&
            <React.Fragment>
              <AddUserComponent
              onChange={props.onChange}
              onclick={props.addStudents}
              title="Add Student"/>
            </React.Fragment>
          }
          {props.title =="Add Coach" &&
            <React.Fragment>
              <AddUserComponent
              onChange={props.onChange}
              onclick={props.addStudents}
              title="Add Coach"/>
            </React.Fragment>
          }
          </div>

      <div className="float-end">
      <button type="button" className="btn btn-secondary mx-2 text-light" data-bs-dismiss="offcanvas" >Cancel</button>
      <button type="button" className="btn btn-success mx-2" data-bs-dismiss="offcanvas" onClick={saveInfo}>

      {props.title =="Add Student"? "Add Student": props.title =="Add Coach"?"Add Coach":"Save" }

      </button>
    </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default EditInfoOffCanvas;
