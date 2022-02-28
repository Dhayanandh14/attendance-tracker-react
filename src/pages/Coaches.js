import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EditInfoOffCanvas from "../components/OffCanvas";
import SideBarComponent from "../components/SidebarComponent";
import CoachService from "../Services/CoachService";
import UserService from "../Services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SecureLocalStorage from '../components/SecureLocalStorage';
import "./Coaches.css";
const Coaches = () => {
  const notify = () =>toast.error('Email already Exist', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const [coach_details, setCoach_details] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coachFormValues, setCoachFormValues] = useState({
    name: "",
    email: "",
    access_id: "",
    password: "",
    status: "",
    profile_job: "",
  });
  const formInputValuesHandler = (e) => {
    setCoachFormValues({ ...coachFormValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    CoachService.getAllCoachDetails().then((res) => {
      setCoach_details(res.data);
      setLoading(false);
    });
  }, []);

  const fetch = () => {
    CoachService.getAllCoachDetails().then((res) => {
      setCoach_details(res.data);
    });
  };
  const addCoach = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let coach = {
      user_name: coachFormValues.name,
      user_email: coachFormValues.email,
      password: coachFormValues.password,
      access_id: coachFormValues.access_id,
      role: "coach",
    };
    if(coachFormValues.name == ""){
      alert("Please enter name")
    }else if(re.test(coachFormValues.email)){
      if(coachFormValues.password == ""){
        alert("Please enter password")
      }
      UserService.getUserByEmail(coachFormValues.email).then((res) => {
        if (res.data === "email exist") {
          notify()
        } else {
          authentication(res.data);
        }
      });
    }else{
      alert("invalid email format")
    }
    function authentication(){
      UserService.createUsers(coach,"yes").then((res) => {
        addCoachDetails(res.data["user_id"]);
      });
    }
    const addCoachDetails = (id) => {
      let coach_details = {
        userId: id,
        profile_job: coachFormValues.profile_job,
        status: "Active",
      };
      CoachService.createCoachDetails(coach_details).then((res) => {
        fetch();
      });
    };
  };
  return (
    <div>
      <SideBarComponent />
      {!loading && (
        <React.Fragment>
        <div >
        {!((SecureLocalStorage.getLocalItem("role")=="student") || (SecureLocalStorage.getLocalItem("role")=="guest"))&&
        <>
          fds
          <EditInfoOffCanvas  infoFormValues={""}
            onChange={formInputValuesHandler}
            formvalue={coachFormValues}
            onclick={addCoach}
            title="Add Coach"
            style={"-50px"}/>
            </>}
        </div>
          <div className="display-all-coach-list">
            <div className="table-responsive">
              <table className="table display-all-coach-list-table">
                <thead
                  style={{ background: "#f5f7f9" }}
                  className="display-all-coach-heading-list"
                >
                  <tr>
                    <th style={{ verticalAlign: "middle" }} scope="col">
                      Name
                    </th>
                    <th style={{ verticalAlign: "middle" }} scope="col">
                      Access Id
                    </th>
                    <th style={{ verticalAlign: "middle" }} scope="col">
                      Email
                    </th>
                    <th style={{ verticalAlign: "middle" }} scope="col">
                      Profile Job
                    </th>
                    <th style={{ verticalAlign: "middle" }} scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coach_details.map((coach) => (
                    <tr key={coach.id}>
                      <React.Fragment>
                        <td>
                          <Link
                            style={{
                              "vertical-align": "super",
                              "text-decoration": "none",
                              "font-weight": "bold",
                            }}
                            to={{
                              pathname: `coaches/${coach.id}`,
                              state: coach.id,
                            }}
                          >
                            {coach.user_name}
                          </Link>
                        </td>
                        <td
                          style={{
                            color: coach.status === "Active" ? "green" : "red",
                          }}
                        >
                          <strong> {coach.access_id}</strong>
                        </td>
                        <td> {coach.user_email}</td>
                        <td>{coach.profile_job}</td>
                        <td>{coach.status}</td>
                      </React.Fragment>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
        </React.Fragment>
      )}
      {loading && <h1 className="text-center">Loading...</h1>}
    </div>
  );
};

export default Coaches;
