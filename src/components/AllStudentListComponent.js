import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const AllStudentListComponent = (props) => {
  return (
<React.Fragment>
    {props.array.map((user) =>
      <tr key={user.user_id}>
      <React.Fragment >
        <td>
          <Link style={{"verticalAlign": "super","textDecoration":"none","fontWeight":"bold"}}
            to={{ pathname: `students/${user.user_id}` }}>
            {user.user_name}
          </Link>
        </td>
        <td  style={{ color:user.status === 'Active' ? 'green' : 'red' }}> <strong> {user.access_id}</strong></td>
        <td> {user.user_email}</td>
        <td> {user.squad_name}</td>

        <td> {user.date_of_Join}</td>


      </React.Fragment>
      </tr>
    )}
    </React.Fragment>
  );
}

export default AllStudentListComponent;
