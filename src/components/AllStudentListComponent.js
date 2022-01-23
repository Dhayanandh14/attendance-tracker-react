import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Allstudentlistcomponent = (props) => {
  console.log(props)
  return (
<React.Fragment>

    {props.inactiveArray.map((user) =>
      <tr key={user.user_id}>
      <React.Fragment>
        <td>
          <Link style={{"vertical-align": "super","text-decoration":"none","fontWeight":"bold"}}
            to={{ pathname: `students/student_info/${user.user_id}` }}>
            {user.user_name}
          </Link>
        </td>
        <td  style={{ color:user.status == 'Active' ? 'green' : 'red' }}> <strong> {user.access_id}</strong></td>
        <td> {user.user_email}</td>
        <td> {user.batch}</td>
        <td> {user.squad_name}</td>

        <td> {user.date_of_Join}</td>

        <td> {user.education}</td>

        <td> {user.grade}</td>
      </React.Fragment>
      </tr>
    )}
    </React.Fragment>
  );
}

export default Allstudentlistcomponent;

// <td style={{ color:user.status == 'Active' ? 'green' : 'red' }}> <strong>{user.status}</strong> </td>
