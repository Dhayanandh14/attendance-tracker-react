import React from "react";
import TabComponent from "./Tabs";

const Infotablecomponent = (props) => {
  return (
    <div style={{"marginTop":"20px"}}>
      {props.info.map((user) => (
        <table className="table student-info-table table-borderless">
          <tbody>
            <tr>
              {props.check == "false" && (
                <>
                  <th className="left-side-student-info-table" scope="row">
                    Phone Number
                  </th>
                  <td className="left-side-student-info-table">
                    {user.phone_number}
                  </td>
                  <th className="left-side-student-info-table" scope="row">
                    Blood Group
                  </th>
                  <td className="left-side-student-info-table">
                    {user.blood_group}
                  </td>
                </>
              )}
              {props.check == "true" && (
                <>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Access id
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.access_id}
                  </td>
                  {props.role!="coach" && <>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row">
                    Squad Name
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.squad_name}
                  </td>
                  </>}
                </>
              )}
            </tr>
            {props.check == "false" && (
              <>
                <tr>
                  <th className="left-side-student-info-table" scope="row">
                    Age
                  </th>
                  <td className="left-side-student-info-table ">{user.age}</td>

                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Home Address
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.home_address}
                  </td>
                </tr>

                <tr>
                  <th className="left-side-student-info-table" scope="row">
                    Gender
                  </th>
                  <td className="left-side-student-info-table ">
                    {user.gender}
                  </td>

                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Communication Address
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.communication_address}
                  </td>
                </tr>

                <tr>
                  <th className="left-side-student-info-table" scope="row">
                    Personal Email
                  </th>
                  <td className="left-side-student-info-table ">
                    {user.personal_email}
                  </td>

                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Aadhar Number
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.aadhar_number}
                  </td>
                </tr>

                <tr>
                {props.role!="coach" && <>
                  <th className="left-side-student-info-table" scope="row">
                    Education
                  </th>
                  <td className="left-side-student-info-table ">
                    {user.education}
                  </td>
                  </>}
                </tr>
              </>
            )}
            {props.check == "emergency" && (
              <>
                <tr>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Emergency Contact Name
                  </th>
                  <td
                    className="right-side-student-info-table info-output"
                    colSpan="2"
                  >
                    {user.emergency_contact_name}
                  </td>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Emergency Contact Number
                  </th>
                  <td
                    className="right-side-student-info-table info-output"
                    colSpan="2"
                  >
                    {user.emergency_contact_number}
                  </td>
                </tr>
              </>
            )}

            {props.check == "true" && (
              <>
              <tr>
                <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Email
                  </th>
                  <td className="right-side-student-info-table info-output">
                  {props.role=="coach" &&
                    user.useremail}
                  {props.role=="student" &&
                    user.user_email}
                  </td>
                  {props.role!="coach" && <>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Interviewer Name
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.interviewer}
                  </td>
                  </>}
                </tr>
              <tr>
              {props.role=="coach" &&
                <th
                    className="right-side-student-info-table info-title"
                    scope="row"
                  >
                    Profile Job
                  </th>}
                  {props.role=="coach" &&
                  <td className="right-side-student-info-table info-output">

                    {user.profile_job}
                  </td>}

                </tr>



                {props.role!="coach" && <>
                <tr>
                  <th className="left-side-student-info-table" scope="row">
                      Date Of Join
                  </th>
                  <td className="left-side-student-info-table ">
                      {user.date_of_Join}
                  </td>
                  <th
                    className="right-side-student-info-table info-title"
                    scope="row">
                    Interviewer Review
                  </th>
                  <td className="right-side-student-info-table info-output">
                    {user.interviewer_review}
                  </td>
                </tr>
              </>}




                <tr>
                <th className="left-side-student-info-table" scope="row">
                    Status
                  </th>
                  <td className="left-side-student-info-table ">
                    {user.status}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Infotablecomponent;
