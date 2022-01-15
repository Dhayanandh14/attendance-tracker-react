import UserService from "../Services/UserService";

import "./Students.css";
import React, { Component, useEffect, useRef, useState } from "react";
import StudentService from "../Services/StudentService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AttendanceService from "../Services/AttendanceService";

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

  const fetch = () => {
    StudentService.getAllStudentDetails().then((res) => {
      setStudentDetails(res.data);
      console.log(studentDetails);
    });
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
        user_id: userId,
      };
      console.log(student_details);

      StudentService.createStudentDetails(student_details).then((res) => {
        console.log(student_details);
        setid(res.data.user_id);
        fetch();
      });
      squadNameInputRef.current.value=""
      interviewerInputRef.current.value=""
      dateOfJoinInputRef.current.value=""
      educationInputRef.current.value=""
      setStatusInput("")
      educationInputRef.current.value=""
      interviewerReviewInputRef.current.value=""
      setGradeInput("")
    }
    studentNameInputRef.current.value=""
    studentEmailInputRef.current.value=""
    studentPasswordInputRef.current.value=""
    studentAccessIdInputRef.current.value=""
  };


  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Students
      </button>

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
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  ref={studentNameInputRef}
                  placeholder="Enter Student Name"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  ref={studentAccessIdInputRef}
                  placeholder="Enter Student Access Id"
                  id="studentAccessIdFormControlInput"
                />
              </div>

              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  ref={studentEmailInputRef}
                  placeholder="Enter Student Email"
                  id="studentEmailFormControlInput"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  ref={studentPasswordInputRef}
                  placeholder="Enter Student password"
                  id="studentEmailFormControlInput"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
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
                    aria-label="Default select example" value={statusInput}
                    onChange={statusInputChangeHandler}
                    id="add-student-status">
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
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  ref={educationInputRef}
                  placeholder="Enter Student education"
                  id="studentEducationFormControlInput"
                />
              </div>



              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  ref={interviewerInputRef}
                  placeholder="Enter Student Interviewer Name"
                  id="studentInterviewerFormControlInput"
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
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
              <button type="button" data-bs-dismiss="modal" onClick={addStudents} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Access Id</th>
            <th scope="col">Email</th>
            <th scope="col">Squad Name</th>
            <th scope="col">Interviewer</th>
            <th scope="col">Date of Join</th>
            <th scope="col">Status</th>
            <th scope="col">Education</th>
            <th scope="col">Interviewer Review</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((user) => (
            <tr key={user.id}>
              <React.Fragment>
                <td>
                  <Link
                    to={{ pathname: `/student_info/`, state: user.user_id }}
                  >
                    {user.user_name}
                  </Link>
                </td>
                <td> {user.access_id}</td>
                <td> {user.user_email}</td>
                <td> {user.squad_name}</td>
                <td> {user.interviewer}</td>
                <td> {user.date_of_Join}</td>
                <td> {user.status}</td>
                <td> {user.education}</td>
                <td> {user.interviewer_review}</td>
                <td> {user.grade}</td>
              </React.Fragment>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
