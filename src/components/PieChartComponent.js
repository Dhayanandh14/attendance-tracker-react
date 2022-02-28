import React, { PureComponent,useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import AttendanceService from '../Services/AttendanceService';

const renderActiveShape = (props) => {

  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={"rgb(20, 121, 235)"}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={"red"} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={"red"} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Count ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="blue">
        {`( ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class PieChartComponent extends PureComponent {
  constructor(props) {
    super(props)
  this.state = {
    activeIndex: 0,
    presentCount:0,
    absentCount:0
  };
}

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

componentDidMount(){
  const date = new Date(Date.now())
  let currentDate = date.getFullYear()+"-"+Number(date.getMonth()+1)+"-"+date.getDate()
  AttendanceService.getEveryDayAttendancePresentCount(currentDate).then((res)=>{
    this.setState({presentCount:(res.data)})
    console.log(res.data);
  })
  AttendanceService.getEveryDayAttendanceAbsentCount(currentDate).then((res)=>{
    this.setState({absentCount:(res.data)})
  })
}

render() {
  return (
    <ResponsiveContainer width="100%" height="90%">
    {
      (this.state.presentCount == 0 && this.state.absentCount ==0)? <h3 style={{"marginBottom":"300px",    "position": "relative",
      "left": "150px",
      "top": "93px"}}>No Attendance</h3>
       :
      <React.Fragment>
      <PieChart width={700} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={[
              {name: 'Present', value: this.state.presentCount},
              { name: 'Absent', value: this.state.absentCount}]
            }
            cx="40%"
            cy="43%"
            innerRadius={90}
            outerRadius={110}
            fill="#ff6c36"

            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
        </React.Fragment>}
      </ResponsiveContainer>
    );
  }
}
