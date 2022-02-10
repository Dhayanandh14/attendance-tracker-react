import React, { useState } from "react";
import { useEffect } from "react";
import FormInput from "../components/FormInput";
import Formselectlist from "../components/FormSelectList";
import Label from "../components/Label";
import SideBarComponent from "../components/SidebarComponent";
import UserService from "../Services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Profile() {

  const [loading,setLoading] = useState(false);
  const notify = () => toast.success('Profile Saved', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  const [bio, setBio] = useState({
    user_id:"",
    user_name:"",
    user_email:"",
    access_id:"",
    gender:"",
    age:"",
    blood_group:"",
    role:"",
    phone_number: "",
    personal_email: "",
    aadhar_number:"",
    home_address:"",
    communication_address: "",
    emergency_contact_name:"",
    emergency_contact_number:"",


  });
  useEffect(() => {
    UserService.getUserById(localStorage.getItem("id")).then((res) => {
      setLoading(true);
      setBio(res.data);
      setInformationToInput(res.data)
    });
  }, []);
  const setInformationToInput = (data) => {
    setBio({
      user_id:data["user_id"],
      user_name:data["user_name"],
      user_email:data["user_email"],
      access_id:data["access_id"],
      gender:data["gender"],
      age:data["age"],
      blood_group:data["blood_group"],
      role:data["role"],
      phone_number: data["phone_number"],
      personal_email: data["personal_email"],
      aadhar_number:data["aadhar_number"],
      home_address:data["home_address"],
      communication_address: data["communication_address"],
      emergency_contact_name:data["emergency_contact_name"],
      emergency_contact_number:data["emergency_contact_number"]
    })
  }


  const formInputValuesHandler = (e) => {
    setBio({
      ...bio,
      [e.target.name]: e.target.value,
    });
  };

  function saveProfile(){
    UserService.updateUser(bio,Number(bio.user_id)).then((res) => {
      notify()
    })
  }

  return (
    <div>
      <SideBarComponent />
      {!loading && <h3 className="text-center" style={{"fontSize":"20px"}}>Loading...</h3>}
      {loading && <>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">{bio.user_name}</span>
              <span class="text-black-50">{bio.user_email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
                <div>
                  <Label className="form-label" label="Full name"/>
                  <FormInput type="text" onChange={formInputValuesHandler} name="user_name" value={bio.user_name} placeholder="Enter Your Full name" required/>
                </div>

                <div class="col-md-12 mt-3">
                  <Label className="form-label" label="Email"/>
                  <FormInput type="email" onChange={formInputValuesHandler} name="user_email" value={bio.user_email} placeholder="Enter Your email" required/>
                </div>
                <div class="row mt-3">
                  <div className="col-md-8">
                  <Label htmlFor="access-id" className="form-label" label="Access Id"/>
                    <FormInput type="text" id="access-id" name="access_id"  value={bio.access_id} onChange={formInputValuesHandler}/>
                  </div>
                  <div className="col-md-4">
                    <Label htmlFor="age" className="form-label" label="Age"/>
                    <FormInput type="text" id="age" name="age" value={bio.age}
                    onChange={formInputValuesHandler}/>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <Label htmlFor="gender" className="form-label" label="Gender"/>
                    <Formselectlist name="gender" onChange={formInputValuesHandler} value={bio.gender} id="gender"
                    options={[
                      {value:"DEFAULT",label:bio.gender? bio.gender :"Select Gender"},
                      {value:"Male",label:"Male"},
                      {value:"Female",label:"Female"},
                      {value:"others",label:"others"}
                    ]}
                    />
                  </div>
                  <div className="col-md-6">
                      <Label htmlFor="student-blood-group" className="form-label" label="Blood Group"/>
                      <Formselectlist name="blood_group" onChange={formInputValuesHandler}  id="student-gender"
                      value={bio.blood_group} options={[{value:"DEFAULT",label:bio.blood_group? bio.blood_group:"Select Blood Group"},
                      {value:"A+",label:"A+"},{value:"A-",label:"A-"},
                      {value:"B+",label:"B+"},{value:"B-",label:"B-"},
                      {value:"Ab+",label:"AB+"},{value:"AB-",label:"AB-"}
                    ]}/>
                  </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-8">
                    <Label htmlFor="phone_number" className="form-label" label="Phone Number"/>
                    <FormInput type="text" id="phone_number" name="phone_number" value={bio.phone_number}
                    onChange={formInputValuesHandler}/>
                    </div>
                    <div className="col-md-4">
                      <Label htmlFor="role" className="form-label" label="Role"/>
                      <FormInput type="text" id="role" name="role" value={bio.role} disabled={true}/>
                    </div>
                </div>

                <div className="mt-3">
                  <Label htmlFor="personal-email" className="form-label" label="Personal Email"/>
                  <FormInput type="email" value={bio.personal_email} name="personal_email" id="personal-email" onChange={formInputValuesHandler}/>
                </div>

                <div className="mt-3">
                  <Label htmlFor="aadhar-number" className="form-label" label="Aadhar Number"/>
                  <FormInput type="number" name="aadhar_number" onChange={formInputValuesHandler} id="aadhar_number" value={bio.aadhar_number}/>
                </div>

                <div className="mt-3">
                  <Label htmlFor="home_address" className="form-label" label="Home Address"/>
                  <textarea className="form-input" name="home_address" className="form-control" id="home_address" onChange={formInputValuesHandler} value={bio.home_address}/>
                </div>

                <div className="mt-3">
                  <Label htmlFor="communication_address" className="form-label" label="Communication Address"/>
                  <textarea className="form-input" name="communication_address" className="form-control" id="communication_address" onChange={formInputValuesHandler} value={bio.communication_address}/>
                </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" style={{"background":"#12344d"}} type="button" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span><strong>Emergency Contact</strong></span>

              </div>
              <br />
              <div class="col-md-12">
                <Label htmlFor="emergency_contact_name" className="form-label" label="Contact Name"/>
                <FormInput type="text" name="emergency_contact_name" onChange={formInputValuesHandler} id="emergency_contact_name" value={bio.emergency_contact_name}/>
              </div>{" "}
              <br />
              <div class="col-md-12">
              <Label htmlFor="emergency_contact_number" className="form-label" label="Contact Number"/>
              <FormInput type="number" name="emergency_contact_number" onChange={formInputValuesHandler} id="emergency_contact_number" value={bio.emergency_contact_number}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      </>}
    </div>
  );
}
