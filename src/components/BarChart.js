import React from 'react';
import { useEffect } from 'react';

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import AttendanceService from '../Services/AttendanceService';
const attendanceCount=[]
const totalCount=[]
const percentage=[]
const Barchart = (props) => {
useEffect(() => {
  AttendanceService.getAttendancePercentage().then((res)=>{
    for (let i=0; i<12; i++) attendanceCount.push(res.data[i])
    for(let i=12; i<25; i++) totalCount.push(res.data[i])
    for(let i=0; i<12; i++) percentage.push(attendanceCount[i]/totalCount[i]*100)
  })

},[])
  return (
    <div>
    <div>
    <div>
    <h3 style={{"textAlign": "center"}}>{props.text}</h3>
      <BarChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 80,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis dataKey="users2"/>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey={props.name} fill={props.color} background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  </div>
    </div>
  );
}

export default Barchart;
