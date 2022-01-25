import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentService from '../Services/StudentService';
import Editinfooffcanvas from '../components/EditInfoOffCanvas';

const Editinfo = (props) => {
  const [studentInfo,setStudentInfo] = useState([])

  const [studentInfoFormValues,setStudentInfoFormValues] = useState({
    userId:"",
    studentId:"",
    name:"",
    email:"",
    access_id:"",
    age:"",
    gender:"",
    contact_number:"",
    personal_email:"",
    batch:"",
    squad_name:"",
    date_of_Join:"",
    education:"",
    aadhar_number:"",
    home_address:"",
    status:"",
    blood_group:"",
    communication_address:"",
    interviewer:"",
    interviewer_review:"",
    emergency_contact_name:"",
    emergency_contact_number:""
  })

  useEffect(() => {
    StudentService.getStudentInfoById(props.id).then((res) => {
      setStudentInfo(res.data)
      console.log(res.data)
      setInformationToInput(res.data)
    });
  }, []);

  const setInformationToInput=(data)=>{
    setStudentInfoFormValues( {
    userId:data[0]["user_id"],
    studentId:data[0]["student_id"],
    name:data[0]["user_name"],
    email:data[0]["user_email"],
    access_id:data[0]["access_id"],
    age:data[0]["age"],
    gender:data[0]["gender"],
    contact_number:data[0]["phone_number"],
    personal_email:data[0]["personal_email"],
    batch:data[0]["batch"],
    squad_name:data[0]["squad_name"],
    blood_group:data[0]["blood_group"],
    date_of_Join:data[0]["date_of_Join"],
    education:data[0]["education"],
    aadhar_number:data[0]["aadhar_number"],
    home_address:data[0]["home_address"],
    communication_address:data[0]["communication_address"],
    interviewer:data[0]["interviewer"],
    status:data[0]["status"],
    interviewer_review:data[0]["interviewer_review"],
    emergency_contact_name:data[0]["emergency_contact_name"],
    emergency_contact_number:data[0]["emergency_contact_number"]
    })
  }

  const formInputValuesHandler = (e) => {
    setStudentInfoFormValues({...studentInfoFormValues, [e.target.name]: e.target.value })
    console.log(studentInfoFormValues)
  }

  const saveInfo=()=>{
    console.log(studentInfoFormValues)
   let updateStudentInfo={user_id:studentInfoFormValues.userId, student_id:studentInfoFormValues.studentId,user_name:studentInfoFormValues.name, user_email:studentInfoFormValues.email,access_id:studentInfoFormValues.access_id,role:"student",
    age:studentInfoFormValues.age,phone_number:studentInfoFormValues.contact_number,
    personal_email:studentInfoFormValues.personal_email,
    squad_name:studentInfoFormValues.squad_name, date_of_Join: studentInfoFormValues.date_of_Join,
    education:studentInfoFormValues.education,aadhar_number:studentInfoFormValues.aadhar_number,
    home_address:studentInfoFormValues.home_address,communication_address:studentInfoFormValues.communication_address,
    interviewer:studentInfoFormValues.interviewer,interviewer_review:studentInfoFormValues.interviewer_review,
    emergency_contact_name:studentInfoFormValues.emergency_contact_name,emergency_contact_number:studentInfoFormValues.emergency_contact_number, gender:studentInfoFormValues.gender, blood_group:studentInfoFormValues.blood_group, status:studentInfoFormValues.status,grade:studentInfoFormValues.grade,batch:studentInfoFormValues.batch}
    console.log(updateStudentInfo)
    StudentService.editStudentDetails(studentInfoFormValues.userId,updateStudentInfo).then(res => {
      console.log(res.data);
      props.func()
    })
  }

  return (
    <div>
    <div style={{"float": "right"}}>
    <Editinfooffcanvas infoFormValues={studentInfoFormValues} onChange={formInputValuesHandler} onclick={saveInfo}/>
  </div>
    </div>


  );
}

export default Editinfo;
