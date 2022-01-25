import React, { useEffect, useState } from 'react';
import Editinfooffcanvas from '../components/EditInfoOffCanvas';
import CoachService from '../Services/CoachService';
const CoachEditInfo = (props) => {
  const [coachInfoFormValues,setCoachInfoFormValues] = useState({
    userId:"",
    coachId:"",
    name:"",
    email:"",
    access_id:"",
    age:"",
    gender:"",
    contact_number:"",
    personal_email:"",
    education:"",
    aadhar_number:"",
    home_address:"",
    status:"",
    blood_group:"",
    communication_address:"",
    emergency_contact_name:"",
    emergency_contact_number:"",
    profile_job:""
  })
  useEffect(() => {
    CoachService.getCoachInfoById(props.id).then((res) => {
      console.log(res.data)
      setInformationToInput(res.data)
    });
  }, []);

  const setInformationToInput=(data)=>{
    setCoachInfoFormValues({
      userId:data[0]["id"],
      coachId:data[0]["coach_id"],
      name:data[0]["username"],
      email:data[0]["useremail"],
      access_id:data[0]["access_id"],
      age:data[0]["age"],
      gender:data[0]["gender"],
      blood_group:data[0]["blood_group"],
      contact_number:data[0]["phone_number"],
      personal_email:data[0]["personal_email"],
      aadhar_number:data[0]["aadhar_number"],
      home_address:data[0]["home_address"],
      status:data[0]["status"],
      communication_address:data[0]["communication_address"],
      emergency_contact_name:data[0]["emergency_contact_name"],
      emergency_contact_number:data[0]["emergency_contact_number"],
      profile_job:data[0]["profile_job"]
    })
  }


    const formInputValuesHandler = (e) => {
      setCoachInfoFormValues({...coachInfoFormValues, [e.target.name]: e.target.value })
    }


  const saveInfo=()=>{
    console.log(coachInfoFormValues)
   let updateCoachInfo={user_id:coachInfoFormValues.userId, coach_id:coachInfoFormValues.coachId,user_name:coachInfoFormValues.name, user_email:coachInfoFormValues.email,access_id:coachInfoFormValues.access_id,role:"coach",
    age:coachInfoFormValues.age,phone_number:coachInfoFormValues.contact_number,
    personal_email:coachInfoFormValues.personal_email,status:coachInfoFormValues.status,
    aadhar_number:coachInfoFormValues.aadhar_number,
    home_address:coachInfoFormValues.home_address,communication_address:coachInfoFormValues.communication_address,
    emergency_contact_name:coachInfoFormValues.emergency_contact_name,emergency_contact_number:coachInfoFormValues.emergency_contact_number, gender:coachInfoFormValues.gender, blood_group:coachInfoFormValues.blood_group,
    profile_job:coachInfoFormValues.profile_job,
    userId:coachInfoFormValues.userId// this user Id is in Coach details table
  }
    console.log("updateCoachInfor",updateCoachInfo)
    CoachService.editCoachDetails(coachInfoFormValues.userId,updateCoachInfo).then(res => {
      console.log(res.data);
      props.func()
    })
  }
  return (
    <div>
    <div id="coach-edit-info-button">
    <Editinfooffcanvas infoFormValues={coachInfoFormValues} onChange={formInputValuesHandler} onclick={saveInfo}/>
    </div>
    </div>
  );
}


export default CoachEditInfo
