import CoachService from "../Services/CoachService";
// import CoachService from '../Services/CoachService';
import UserService from "../Services/UserService";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [coach_details, setCoach_details] = useState([]);
  const coachNameInputRef = useRef();
  const coachEmailInputRef = useRef();
  const coachAccessIdInputRef = useRef();
  const coachPasswordInputRef = useRef();
  // const userIdInputRef = useRef();
  const profileJobInputRef = useRef();

  useEffect(() => {
    CoachService.getAllCoachDetails().then((res) =>{
      setCoach_details(res.data)
    })
  },[])
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
      addStudentDetails(res.data["user_id"]);
    });
    const addStudentDetails = (id) => {
      let coach_details = {
        userId: id,
        profile_job: profileJobInputRef.current.value,
      };
      CoachService.createCoachDetails(coach_details).then((res) => {
        console.log(res.data);
      });
    };
  };

  return (
    <div>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add coach
        </button>

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
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  ref={coachNameInputRef}
                  placeholder="Enter Coach Name"
                />
                <input
                  type="text"
                  ref={coachEmailInputRef}
                  placeholder="Enter Coach Email"
                />
                <input
                  type="text"
                  ref={coachPasswordInputRef}
                  placeholder="Enter Password"
                />
                <input
                  type="text"
                  ref={coachAccessIdInputRef}
                  placeholder="Enter Coach Access Id"
                />
                <input
                  type="text"
                  ref={profileJobInputRef}
                  placeholder="Enter Profile Job"
                />

                <button onClick={addCoach}>Add</button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
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
          <th scope="col">Profile Job</th>

        </tr>
      </thead>
      <tbody>
      {coach_details.map((user) =>

      <tr key={user.id}>
      <React.Fragment >
      <td>
        <Link to={{pathname:`/coach_info/`,state:user.id}}>
           {user.user_name}
         </Link></td>
         <td> {user.user_email}</td>
         <td>{user.access_id}</td>
         <td>{user.profile_job}</td>

        </React.Fragment>
        </tr>

        )}

    </tbody>
    </table>

    </div>
  );
};

export default Coaches;
