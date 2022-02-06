import UserService from "../Services/UserService";
import "./Students.css";
import React, { useEffect, useState } from "react";
import StudentService from "../Services/StudentService";
import AllStudentListComponent from "../components/AllStudentListComponent";
import SideBarComponent from "../components/SidebarComponent";
import Formselectlist from "../components/FormSelectList";
import Modal from "../components/Modal";
import EditInfoOffCanvas from "../components/OffCanvas";

let activeArray = [];
let inactiveArray = [];
const Students = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    squadName: "",
    dateOfJoin: "",
    access_id: "",
    interviewer_name: "",
    interviewer_review: "",
    education: "",
    student_status_filter: "",
    student_status: "",
  });

  const formInputValuesHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const [id, setid] = useState(0);
  const [studentDetails, setStudentDetails] = useState([]);

  const [displayStudentList, setDisplayStudentList] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    activeArray = [];
    inactiveArray = [];
    StudentService.getAllStudentDetails().then((res) => {
      setStudentDetails(res.data);
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i]["status"] === "Active") {
          activeArray.push(res.data[i]);
        } else if (res.data[i]["status"] === "Inactive") {
          inactiveArray.push(res.data[i]);
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  const addStudents = () => {
    let user = {
      user_name: formValues.name,
      user_email: formValues.email,
      password: formValues.password,
      access_id: formValues.access_id,
      role: "student",
    };
    UserService.createUsers(user,"yes").then((res) => {
      setUserId(res.data.user_id);
    });
    function setUserId(userId) {
      let student_details = {
        squad_name: formValues.squadName,
        interviewer: formValues.interviewer_name,
        date_of_Join: formValues.dateOfJoin,
        status: "Active",
        education: formValues.education,
        interviewer_review: formValues.interviewer_review,
        user_id: userId,
      };
      StudentService.createStudentDetails(student_details).then((res) => {
        setid(res.data.user_id);
        fetch();
      });
    }
  };
  const studentStatusFilter = [
    { value: "DEFAULT", label: "All Student" },
    {
      value: "1",
      label: "Active Student",
    },
    {
      value: "2",
      label: "InActive Student",
    },
  ];
  const selectionStatusHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value == 1) {
      setDisplayStudentList("active");
    } else if (event.target.value == 2) {
      setDisplayStudentList("inactive");
    }
    else{
      setDisplayStudentList("all");
    }
  };

  return (
    <React.Fragment>
      <SideBarComponent />
      {!loading && (
        <React.Fragment>
          <div className="add-student-and-students-status-div">
            <div className="input-group" id="student-status-dropdown-div">
              <Formselectlist
                id="student-status-dropdown"
                name="student_status_filter"
                onChange={selectionStatusHandler}
                options={studentStatusFilter}
              />
              </div>

              <EditInfoOffCanvas  infoFormValues={""}
              onChange={formInputValuesHandler}
              onclick={addStudents}
              title="Add Student" style={"-70px"}/>
              </div>
              <div className="display-all-student-list">
            <div className="table-responsive">
              <table className="table  display-all-student-list-table ">
                <thead
                  style={{ background: "#f5f7f9" }}
                  className="display-all-student-heading-list"
                >
                  <tr>
                    <th scope="col" style={{ verticalAlign: "middle" }}>
                      Name
                    </th>
                    <th scope="col" style={{ verticalAlign: "middle" }}>
                      Access Id
                    </th>
                    <th scope="col" style={{ verticalAlign: "middle" }}>
                      Email
                    </th>
                    <th scope="col" style={{ verticalAlign: "middle" }}>
                      Squad Name
                    </th>
                    <th scope="col" style={{ verticalAlign: "middle" }}>
                      Date of Join
                    </th>



                  </tr>
                </thead>
                <tbody>
                {displayStudentList === "all" && (
                  <AllStudentListComponent array={studentDetails} />
                )}
                {displayStudentList === "active" && (
                    <AllStudentListComponent array={activeArray} />
                  )}
                  {displayStudentList === "inactive" && (
                    <AllStudentListComponent array={inactiveArray} />
                  )}
                </tbody>
              </table>
            </div>
            </div>
            </React.Fragment>

      )}
      {loading && <h1 className="text-center">Loading...</h1>}
    </React.Fragment>
  );
};

export default Students;
