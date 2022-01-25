import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Modal from "../components/Modal";
import SideBarComponent from "../components/SidebarComponent";
import CoachService from "../Services/CoachService";
import UserService from "../Services/UserService";
import "./Coaches.css";
const Coaches = () => {
  const [coach_details, setCoach_details] = useState([]);
  const [loading,setLoading] = useState(true);
  const [coachFormValues,setCoachFormValues]=useState({
    name:"",
    email:"",
    access_id:"",
    password:"",
    status:"",
    profile_job:"",
  });
  const formInputValuesHandler = (e) => {
    setCoachFormValues({...coachFormValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    CoachService.getAllCoachDetails().then((res) =>{
      setCoach_details(res.data)
      setLoading(false)
    })
  },[])

  const fetch = ()=>{
    CoachService.getAllCoachDetails().then((res) =>{
      setCoach_details(res.data)
    })
  }
  const addCoach = () => {
    let coach = {
      user_name:  coachFormValues.name,
      user_email: coachFormValues.email,
      password:  coachFormValues.password,
      access_id:  coachFormValues.access_id,
      role: "coach"
    };
    UserService.createUsers(coach).then((res) => {
      addCoachDetails(res.data["user_id"]);
    });
    const addCoachDetails = (id) => {
      let coach_details = {
        userId: id,
        profile_job: coachFormValues.profile_job,
        status: coachFormValues.status
      };
      CoachService.createCoachDetails(coach_details).then((res) => {
        fetch()
      });
    };
  };
  return (
    <div>
      <SideBarComponent/>
      {!loading &&
        <React.Fragment>
          <Modal onChange={formInputValuesHandler} formvalue={coachFormValues} onclick={addCoach} title="Add Coach"/>
     <div className="display-all-coach-list">
      <div class="table-responsive">
      <table className="table display-all-coach-list-table">
      <thead style={{"background": '#f5f7f9'}}className="display-all-coach-heading-list">
        <tr>
          <th style={{"verticalAlign": "middle"}}  scope="col">Name</th>
          <th style={{"verticalAlign": "middle"}}  scope="col">Access Id</th>
          <th style={{"verticalAlign": "middle"}}  scope="col">Email</th>
          <th style={{"verticalAlign": "middle"}}  scope="col">Profile Job</th>
          <th style={{"verticalAlign": "middle"}}  scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
      {coach_details.map((coach) =>

      <tr key={coach.id}>
      <React.Fragment >
        <td>
            <Link style={{"vertical-align": "super","text-decoration":"none","font-weight": "bold"}} to={{pathname:`coaches/coach_info/${coach.id}`,state:coach.id}}>
              {coach.user_name}
            </Link>
          </td>
          <td style={{ color:coach.status == 'Active' ? 'green' : 'red' }}><strong> {coach.access_id}</strong>
          </td>
         <td> {coach.user_email}</td>
         <td>{coach.profile_job}</td>
         <td>{coach.status}</td>
      </React.Fragment>
        </tr>
        )}
      </tbody>
    </table>
    </div>
    </div>
    </React.Fragment>
      }
      {loading && <h1 className="text-center">Loading...</h1>}
    </div>
  );
};

export default Coaches;
