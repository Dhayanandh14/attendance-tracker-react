import React, { useState, useEffect } from "react";
import SideBarComponent from "../components/SidebarComponent";
import CoachService from "../Services/CoachService";
import "./CoachInfo.css";
import CoachEditInfo from "./CoachEditInfo";
import { useParams } from "react-router-dom";
const CoachInfo = (props) => {
  const { id } = useParams();
  const [CoachInfo, setCoachInfo] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
    setShowButton(true);
    // setLoading(false)
  }, []);

  const fetch = () => {
    CoachService.getCoachInfoById(id).then((res) => {
      setCoachInfo(res.data);
      setShowButton(false);
      setLoading(false);
      // setInformationToInput(res.data)
    });
  };
  return (
    <React.Fragment>
      <SideBarComponent />
      <div>
        {!showButton && <CoachEditInfo id={id} func={fetch} />}
        {!showButton && (
          <div className="coach-info-view">
            {CoachInfo.map((user) => (
              <React.Fragment key={user.user_id}>
                <React.Fragment>
                  <h1>{user.username}</h1>
                  <h5 style={{ marginLeft: "6px" }}>{user.access_id}</h5>
                  <h6 style={{ marginLeft: "6px" }}>{user.useremail}</h6>
                </React.Fragment>

                <hr style={{ marginTop: "61px", marginBottom: "25px" }} />
                <table className="table coach-info-table table-borderless">
                  <tbody key={user.user_id}>
                    <React.Fragment key={user.user_id}>
                      <tr>
                        <th className="left-side-coach-info-table" scope="row">
                          Phone Number
                        </th>
                        <td className="left-side-coach-info-table">
                          {user.phone_number}
                        </td>

                        <th className="right-side-coach-info-table" scope="row">
                          Status
                        </th>
                        <td className="right-side-coach-info-table ">
                          {user.status}
                        </td>
                      </tr>

                      <tr>
                        <th className="left-side-coach-info-table" scope="row">
                          Blood Group
                        </th>
                        <td className="left-side-coach-info-table">
                          {user.blood_group}
                        </td>

                        <th className="right-side-coach-info-table" scope="row">
                          Aadhar Number
                        </th>
                        <td className="right-side-coach-info-table ">
                          {user.aadhar_number}
                        </td>
                      </tr>

                      <tr>
                        <th className="left-side-coach-info-table" scope="row">
                          Age
                        </th>
                        <td className="left-side-coach-info-table ">
                          {user.age}
                        </td>

                        <th
                          className="right-side-coach-info-table info-title"
                          scope="row"
                        >
                          Home Address
                        </th>
                        <td className="right-side-coach-info-table info-output">
                          {user.home_address}
                        </td>
                      </tr>

                      <tr>
                        <th className="left-side-coach-info-table" scope="row">
                          Gender
                        </th>
                        <td className="left-side-coach-info-table ">
                          {user.gender}
                        </td>

                        <th
                          className="right-side-coach-info-table info-title"
                          scope="row"
                        >
                          Communication Address
                        </th>
                        <td className="right-side-coach-info-table info-output">
                          {user.communication_address}
                        </td>
                      </tr>

                      <tr>
                        <th className="left-side-coach-info-table" scope="row">
                          Personal Email
                        </th>
                        <td className="left-side-coach-info-table ">
                          {user.personal_email}
                        </td>

                        <th
                          className="right-side-coach-info-table info-title"
                          scope="row"
                        >
                          Emergency Contact Name
                        </th>
                        <td
                          className="right-side-coach-info-table info-output"
                          colSpan="2"
                        >
                          {user.emergency_contact_name}
                        </td>
                      </tr>

                      <tr>
                        <th
                          className="left-side-student-info-table"
                          scope="row"
                        >
                          Profile Job
                        </th>
                        <td className="left-side-student-info-table ">
                          {user.profile_job}
                        </td>

                        <th
                          className="right-side-coach-info-table info-title"
                          scope="row"
                        >
                          Emergency Contact Number
                        </th>
                        <td
                          className="right-side-coach-info-table info-output"
                          colSpan="2"
                        >
                          {user.emergency_contact_number}
                        </td>
                      </tr>
                    </React.Fragment>
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
        )}
        {showButton && <h1 className="text-center">loading..</h1>}
      </div>
    </React.Fragment>
  );
};

export default CoachInfo;
