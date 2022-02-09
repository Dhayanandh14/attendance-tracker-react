import React, { PureComponent,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AttendanceService from '../Services/AttendanceService';
import UserService from '../Services/UserService';


let data=[]
let length=0;
const Doublechartbar2 = () => {
  let lastDayDate;
  let firstDay;
  let date = new Date();

  firstDay = date.getFullYear()+""+0+Number(date.getMonth()+1)+""+"01";

  if(date.getMonth()+1 == 2)
    lastDayDate = date.getFullYear()+""+"0"+Number(date.getMonth()+1)+""+28;
  else if(Number(date.getMonth()+1)== 4 || Number(date.getMonth()+1)==7 || Number(date.getMonth()+1)==8 || Number(date.getMonth()+1)==10){
    if(Number(date.getMonth()+1) == 10) lastDayDate = date.getFullYear()+""+Number(date.getMonth()+1)+""+30;
    else lastDayDate = date.getFullYear()+""+0+date.getMonth()+1+""+30;
  }
  else{
    if(Number(date.getMonth()+1) == 11 || Number(date.getMonth()+1) ==12)
      lastDayDate = date.getFullYear()+""+Number(date.getMonth()+1)+""+31;
    else
      lastDayDate = date.getFullYear()+""+0+Number(date.getMonth()+1)+""+31;
  }

const monthEndDateFinder=()=>{
  if(Number(date.getMonth()+1) == 2) length=28
      else if(Number(date.getMonth()+1)== 4 || Number(date.getMonth()+1)==7 || Number(date.getMonth()+1)==8 || Number(date.getMonth()+1)==10) length=30
      else length=31

      return length
}
useEffect(() => {
  UserService.getStudentCount().then((res)=>{
    localStorage.setItem("total",res.data)
  })

AttendanceService.getEachDayAttendancePercentage(firstDay, lastDayDate).then((attendanceCount)=>{
  let endDate =  monthEndDateFinder()
  data=[]
  for(let i=1; i<=endDate;i++){
    data.push({name:i,absent:localStorage.getItem("total")-attendanceCount.data[i-1],present:attendanceCount.data[i-1],amt:Math.floor(Math.random()*100)})
  }
})

},[])

  return (
    <ResponsiveContainer width="100%" height="80%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="present" fill="#28ae60" />
      <Bar dataKey="absent" fill="#cc4335" />
    </BarChart>
  </ResponsiveContainer>
  );
}

export default Doublechartbar2;
