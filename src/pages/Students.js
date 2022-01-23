import UserService from "../Services/UserService";

import "./Students.css";
import React, { Component, useEffect, useRef, useState } from "react";
import StudentService from "../Services/StudentService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AttendanceService from "../Services/AttendanceService";
import Allstudentlistcomponent from "../components/AllStudentListComponent";
import SideBarComponent from "../components/SidebarComponent";

let activeArray = [];
let inactiveArray = [];
const Students = () => {
  const [id, setid] = useState(0);
  const [studentDetails, setStudentDetails] = useState([]);
  const studentNameInputRef = useRef();
  const studentAccessIdInputRef = useRef();
  const studentEmailInputRef = useRef();
  const studentPasswordInputRef = useRef();

  const squadNameInputRef = useRef();
  const interviewerInputRef = useRef();
  const dateOfJoinInputRef = useRef();
  const educationInputRef = useRef();
  const interviewerReviewInputRef = useRef();
  const [gradeInput, setGradeInput] = useState();
  const [statusInput, setStatusInput] = useState();
  const [batchInput, setBatchInput] = useState();
  const [displayStudentList, setDisplayStudentList] = useState("all");
  const [loading,setLoading] = useState(true);
  const fetch = () => {
    activeArray = [];
    inactiveArray = [];
    StudentService.getAllStudentDetails().then((res) => {
        setStudentDetails(res.data);
        console.log(studentDetails);
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]["status"] == "Active") {
            activeArray.push(res.data[i]);
          } else if (res.data[i]["status"] == "InActive") {
            inactiveArray.push(res.data[i]);
          }
        }
        setLoading(false)
    })
  };

  useEffect(() => {
    fetch();
  }, []);

  const gradeInputChangeHandler = (event) => {
    setGradeInput(event.target.value);
  };
  const statusInputChangeHandler = (event) => {
    setStatusInput(event.target.value);
  };
  const batchInputChangeHandler = (event) => {
    setBatchInput(event.target.value);
  };

  const addStudents = () => {
    let user = {
      user_name: studentNameInputRef.current.value,
      user_email: studentEmailInputRef.current.value,
      password: studentPasswordInputRef.current.value,
      access_id: studentAccessIdInputRef.current.value,
      role: "student",
    };
    console.log("users" + user);
    UserService.createUsers(user).then((res) => {
      setUserId(res.data.user_id);
    });
    function setUserId(userId) {
      let student_details = {
        squad_name: squadNameInputRef.current.value,
        interviewer: interviewerInputRef.current.value,
        date_of_Join: dateOfJoinInputRef.current.value,
        status: statusInput,
        education: educationInputRef.current.value,
        interviewer_review: interviewerReviewInputRef.current.value,
        grade: gradeInput,
        batch: batchInput,
        user_id: userId,
      };
      console.log(student_details);

      StudentService.createStudentDetails(student_details).then((res) => {
        console.log(student_details);
        setid(res.data.user_id);
        fetch();
      });
      squadNameInputRef.current.value = "";
      interviewerInputRef.current.value = "";
      dateOfJoinInputRef.current.value = "";
      educationInputRef.current.value = "";
      setStatusInput("");
      educationInputRef.current.value = "";
      interviewerReviewInputRef.current.value = "";
      setGradeInput("");
    }
    studentNameInputRef.current.value = "";
    studentEmailInputRef.current.value = "";
    studentPasswordInputRef.current.value = "";
    studentAccessIdInputRef.current.value = "";
  };
  const selectionStatusHandler = (event) => {
    if (event.target.value == 1) {
      setDisplayStudentList("all");
    } else if (event.target.value == 2) {
      setDisplayStudentList("active");
    } else {
      setDisplayStudentList("inactive");
    }
  };
  // const selectStatus = () => {
  //   console.log(selectionStatus);

  // };

  return (
   <React.Fragment>
    <SideBarComponent/>
    {!loading &&
    <React.Fragment>
    <div className="add-student-and-students-status-div">
    <div className="input-group" id="student-status-dropdown-div">

        <select id="student-status-dropdown-div"
          className="form-select"
          onChange={selectionStatusHandler}
          id="student-status-dropdown"
          aria-label="Example select with button addon"
        >
          <option value="1">All Students</option>
          <option value="2">Active Student</option>
          <option value="3">Inactive Student</option>
        </select>
      </div>

      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal" id="add-student-button">
        <box-icon name='plus' id="add-student-plus-icon"></box-icon>Add Students
      </button>
    </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Students
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={studentNameInputRef}
                  placeholder="Enter Student Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={studentAccessIdInputRef}
                  placeholder="Enter Student Access Id"
                  id="studentAccessIdFormControlInput"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  ref={studentEmailInputRef}
                  placeholder="Enter Student Email"
                  id="studentEmailFormControlInput"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={studentPasswordInputRef}
                  placeholder="Enter Student password"
                  id="studentEmailFormControlInput"
                />
              </div>

              <div className=" mb-3 ">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={batchInput}
                  onChange={batchInputChangeHandler}
                  id="add-student-status"
                >
                  <option value="DEFAULT">Select Batch</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={squadNameInputRef}
                  placeholder="Enter Student Squad Name"
                  id="studentSquadNameFormControlInput"
                />
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  ref={dateOfJoinInputRef}
                  placeholder="Enter Student Date of Join"
                  id="add-date-of-join"
                />
              </div>

              <div className="row ">
                <div className="col-md-6 mb-3 ">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={statusInput}
                    onChange={statusInputChangeHandler}
                    id="add-student-status"
                  >
                    <option value="DEFAULT">Select Student Status</option>
                    <option value="Active">Active</option>
                    <option value="InActive">Inactive</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={gradeInput}
                    onChange={gradeInputChangeHandler}
                    id="add-student-grade"
                  >
                    <option value="DEFAULT">Select Student Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">E</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={educationInputRef}
                  placeholder="Enter Student education"
                  id="studentEducationFormControlInput"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={interviewerInputRef}
                  placeholder="Enter Student Interviewer Name"
                  id="studentInterviewerFormControlInput"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={interviewerReviewInputRef}
                  placeholder="Enter Student Interviewer Review"
                  id="studentInterviewerReviewFormControlInput"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={addStudents}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="display-all-student-list">
      <div class="table-responsive">
      <table className="table  display-all-student-list-table ">
        <thead style={{"background": '#f5f7f9'}} className="display-all-student-heading-list">
          <tr>
            <th scope="col" style={{"vertical-align": "middle"}} >Name</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Access Id</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Email</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Batch</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Squad Name</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Date of Join</th>

            <th scope="col" style={{"vertical-align": "middle"}}>Education</th>
            <th scope="col" style={{"vertical-align": "middle"}}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {displayStudentList == "all" && (
            <Allstudentlistcomponent inactiveArray={studentDetails} />
          )}

          {displayStudentList == "active" && (
            <Allstudentlistcomponent inactiveArray={activeArray} />
          )}
          {displayStudentList == "inactive" && (
            <Allstudentlistcomponent inactiveArray={inactiveArray} />
          )}
        </tbody>
      </table>
      </div>
    </div>
      </React.Fragment>}
      {loading && <h1 className="text-center">Loading...</h1>}
    </React.Fragment>
  );
};

export default Students;

// <th scope="col" style={{"vertical-align": "middle"}}>Status</th>
