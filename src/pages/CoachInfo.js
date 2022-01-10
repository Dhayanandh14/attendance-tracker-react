import React, { useState,useEffect } from 'react';
import CoachService from '../Services/CoachService';
import CoachEditInfo from './CoachEditInfo';

const Coachinfo = (props) => {
  const [CoachInfo,setCoachInfo] = useState([])
  console.log(props.location.state)
  useEffect(() => {
    CoachService.getCoachInfoById(props.location.state).then((res) => {
      console.log(res.data)
      setCoachInfo(res.data)
      // setInformationToInput(res.data)
    });
  }, []);
  return (
    <div>
      <CoachEditInfo id={props.location.state} func={fetch}/>
    <table className="table table-bordered">
      <tbody>
        {CoachInfo.map((user) =>
          <React.Fragment key={user.user_id}>
            <tr>
              <td>Name</td>
              <th scope="row">{user.username}</th>
          </tr>
          <tr>
            <td>Coach Email</td>
            <th scope="row">{user.useremail}</th>
          </tr>
        <tr>
          <td>Access Id</td>
          <th scope="row">{user.access_id}</th>
        </tr>
        <tr>
          <td>Profile Job</td>
          <th scope="row">{user.profile_job}</th>
        </tr>
        <tr>
          <td>Age</td>
          <th scope="row">{user.age}</th>
        </tr>
        <tr>
          <td>Gender</td>
          <th scope="row">{user.gender}</th>
        </tr>
        <tr>
          <td>Blood Group</td>
          <th scope="row">{user.blood_group}</th>
        </tr>
        <tr>
          <td>Contact No</td>
          <th scope="row">{user.phone_number}</th>
        </tr>
        <tr>
          <td>Personal Email</td>
          <th scope="row">{user.personal_email}</th>
          </tr>
        <tr>
          <td>Aadhar Number</td>
          <th scope="row">{user.aadhar_number}</th>
        </tr>
        <tr>
          <td>Home Address</td>
          <th scope="row">{user.home_address}</th>
        </tr>
        <tr>
          <td>Communication Address</td>
          <th scope="row">{user.communication_address}</th>
        </tr>
        <tr>
          <td>Emergency Contact Name</td>
          <th scope="row">{user.emergency_contact_name}</th>
        </tr>
        <tr>
          <td>Emergency Contact Number</td>
          <th scope="row">{user.emergency_contact_number}</th>
        </tr>
      </React.Fragment>
    )}

    </tbody>
  </table>
    </div>
  );
}

export default Coachinfo;
