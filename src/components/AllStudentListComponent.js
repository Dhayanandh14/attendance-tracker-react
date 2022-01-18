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
          <Link
            to={{ pathname: `/student_info/`, state: user.user_id }}
          >
            {user.user_name}
          </Link>
        </td>
        <td> {user.access_id}</td>
        <td> {user.user_email}</td>
        <td> {user.batch}</td>
        <td> {user.squad_name}</td>
        <td> {user.interviewer}</td>
        <td> {user.date_of_Join}</td>
        <td style={{ color:user.status == 'Active' ? 'green' : 'red' }}> <strong>{user.status}</strong> </td>
        <td> {user.education}</td>
        <td> {user.interviewer_review}</td>
        <td> {user.grade}</td>
      </React.Fragment>
      </tr>
    )}
    </React.Fragment>
  );
}

export default Allstudentlistcomponent;
