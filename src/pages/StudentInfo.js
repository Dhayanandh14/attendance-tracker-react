import React, { useEffect } from "react";
import { useState } from "react";
import StudentEditinfo from "./StudentEditInfo";
import SideBarComponent from "../components/SidebarComponent";
import StudentService from "../Services/StudentService";
import "./StudentInfo.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import Infotablecomponent from "../components/InfoTableComponent";
import TabComponent from "../components/Tabs";
const StudentInfo = (props) => {
  let { id } = useParams();
  const [studentInfo, setStudentInfo] = useState([]);
  const [showButton, setShowButon] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    StudentService.getStudentInfoById(id).then((res) => {
      setStudentInfo(res.data);
      setShowButon(true);
      setLoading(false);
      // setInformationToInput(res.data)
    });
  }, []);

  const fetch = () => {
    StudentService.getStudentInfoById(id).then((res) => {
      setStudentInfo(res.data);
      setLoading(false);
      // setInformationToInput(res.data)
    });
  };

  return (
    <React.Fragment>
      <SideBarComponent />
      {!loading && (
        <React.Fragment>

          {showButton && <StudentEditinfo id={id} func={fetch} />}

          <div className="student-info-view">
          {studentInfo.map((user) => (
            <React.Fragment key={user.user_id}>
            <React.Fragment>
            <h1>{user.user_name}</h1>
            <h5 style={{ marginLeft: "6px" }}>{user.access_id}</h5>
            <h6 style={{ marginLeft: "6px" }}>{user.user_email}</h6>
            </React.Fragment>
            </React.Fragment>
            ))}
            <TabComponent info= {studentInfo} role="student"/>
          </div>
        </React.Fragment>
      )}
      {loading && <h1 className="text-center">Loading...</h1>}
    </React.Fragment>
  );
};

export default StudentInfo;
