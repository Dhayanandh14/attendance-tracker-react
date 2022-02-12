import React from 'react';
import "./Dashboard.css"
import SideBarComponent from "../components/SidebarComponent";
import UserService from "../Services/UserService";
import { useEffect,useState } from "react";
import CoachService from "../Services/CoachService";
import ChartLogicComponent from "../components/ChartLogicComponent";
import Doublechartbar2 from "../components/DoubleChartBar2";
import PieChartComponent from "../components/PieChartComponent";
import SecureLocalStorage from '../components/SecureLocalStorage';
export default function Dashboard() {
  const [studentCount,setStudentCount] = useState(0)
  const [coachCount,setCoachCount] = useState(0)
  useEffect(() => {
    UserService.getStudentCount().then((res)=>{
      setStudentCount(res.data)
    })
    CoachService.getCoachCount().then((res)=>{
      setCoachCount(res.data)
    })
  },[])

  return (
    <React.Fragment>
    <div className="">
      <SideBarComponent />
      <div style={{ "marginLeft":"72px"}}>
          <div className="row bg-dark pt-4 pb-4" style={{"color": "white","marginRight":"0px"}}>
            <div className="col-md-9">
              <span className="text-left" id="welcome-text"> Welcome Back, <strong>{SecureLocalStorage.getLocalItem("role")}</strong> </span>
            </div>
            <div className="col-md-2">

                <div className="row">
                    <div className="col-md-2 dashboard-darkarea-icon">
                      <i className="fa fa-users icon"></i>
                    </div>
                    <div className="col-md-5">
                      <div>Students</div>
                      <div> {studentCount}</div>
                    </div>
                    <div className="col-md-2 dashboard-darkarea-icon">
                       <i className="fa fa-users icon"></i>
                    </div>
                    <div className="col-md-1">
                      Coaches <div>{coachCount}</div>
                    </div>
                </div>
          </div>
          </div>
          <div className="row" style={{"marginRight":"0px","marginTop":"55px"}}>
            <div className="col-md-7">
              <ChartLogicComponent width={800} check="fullYear" height={350}/>
            </div>
            <div className="col-md-5" >
            <h3 style={{    "position": "relative","left":" 80px","display":"inline-block"}}>Today Attendance Count</h3>
              <PieChartComponent/>
            </div>

            <div style={{"marginBottom": "40px"}}>
              <ChartLogicComponent width={1600} check="fullMonth" height={350}/>
            </div>
          </div>

        <div>

        </div>
        </div>
    </div>
    </React.Fragment>
  );
}
