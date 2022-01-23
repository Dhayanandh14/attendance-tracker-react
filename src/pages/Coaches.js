import CoachService from "../Services/CoachService";
// import CoachService from '../Services/CoachService';
import "./Coaches.css"
import UserService from "../Services/UserService";
import { Link,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import SideBarComponent from "../components/SidebarComponent";
// import "./Students.css"
const Coaches = () => {

  const [coaches, setCoaches] = useState([]);
  const [coach_details, setCoach_details] = useState([]);
  const coachNameInputRef = useRef();
  const coachEmailInputRef = useRef();
  const coachAccessIdInputRef = useRef();
  const coachPasswordInputRef = useRef();
  const [coachStatus,setCoachStatus] = useState();
  // const userIdInputRef = useRef();

  const profileJobInputRef = useRef();
  const [loading,setLoading] = useState(true);

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
  const statusInputChangeHandler = (event)=>{
    setCoachStatus(event.target.value);
  }
  const addCoach = () => {
    console.log(coachPasswordInputRef.current.value);
    let coach = {
      user_name: coachNameInputRef.current.value,
      user_email: coachEmailInputRef.current.value,
      password: coachPasswordInputRef.current.value,
      access_id: coachAccessIdInputRef.current.value,
      role: "coach"
    };
    UserService.createUsers(coach).then((res) => {
      console.log(res.data);
      addCoachDetails(res.data["user_id"]);
    });
    const addCoachDetails = (id) => {
      let coach_details = {
        userId: id,
        profile_job: profileJobInputRef.current.value,
        status: coachStatus
      };
      CoachService.createCoachDetails(coach_details).then((res) => {
        console.log(res.data);
        fetch()
      });
    };
  };

  return (

    <div>
      <SideBarComponent/>
      {!loading &&
        <React.Fragment>
      <div>
        <div>
          <button
            type="button"
            class="btn btn-warning add-coach-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
          <box-icon name='plus' id="add-coach-plus-icon"></box-icon>
            Add coach
          </button>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Coach
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">

              <div class="mb-3">
                <label for="coachNameFormControlInput" class="form-label">Coach Name</label>
                <input type="text" class="form-control" ref={coachNameInputRef}
                placeholder="Enter Coach Name" id="coachNameFormControlInput"/>
              </div>

              <div class="mb-3">
                <label for="coachEmailFormControlInput" class="form-label">Coach Email</label>
                <input type="email" class="form-control"  ref={coachEmailInputRef}
                placeholder="Enter Coach Email" id="coachEmailFormControlInput"/>
              </div>
                <div class="mb-3">
                    <label for="coachPasswordFormControlInput" class="form-label">Coach Email</label>
                    <input type="text" class="form-control"  ref={coachPasswordInputRef}
                    placeholder="Enter Password" id="coachPasswordFormControlInput"/>
                </div>

                <div class="mb-3">
                    <label for="coachAccessIdFormControlInput" class="form-label">Coach Access Id</label>
                    <input type="text" class="form-control"  ref={coachAccessIdInputRef}
                    placeholder="Enter Coach Access Id" id="coachAccessIdFormControlInput"/>
                </div>

                <div class="mb-3">
                    <label for="coachProfileJobFormControlInput" class="form-label">Profile Job</label>
                    <input type="text" class="form-control" ref={profileJobInputRef}
                    placeholder="Enter Profile Job" id="coachProfileJobFormControlInput"/>
                </div>

                <label for="coachProfileJobFormControlInput" class="form-label">Coach Status</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={statusInputChangeHandler}
                  id="add-student-status">
                  <option value="DEFAULT">Select Coach Status</option>
                  <option value="Active">Active</option>
                  <option value="InActive">Inactive</option>
                </select>




              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onClick={addCoach}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="display-all-coach-list">
      <div class="table-responsive">
      <table className="table display-all-coach-list-table">
      <thead style={{"background": '#f5f7f9'}}className="display-all-coach-heading-list">
        <tr>
          <th style={{"vertical-align": "middle"}}  scope="col">Name</th>
          <th style={{"vertical-align": "middle"}}  scope="col">Access Id</th>
          <th style={{"vertical-align": "middle"}}  scope="col">Email</th>
          <th style={{"vertical-align": "middle"}}  scope="col">Profile Job</th>
          <th style={{"vertical-align": "middle"}}  scope="col">Status</th>

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
