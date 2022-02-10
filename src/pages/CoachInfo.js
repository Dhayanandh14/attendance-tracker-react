import React, { useState, useEffect } from "react";
import SideBarComponent from "../components/SidebarComponent";
import CoachService from "../Services/CoachService";
import "./CoachInfo.css";
import CoachEditInfo from "./CoachEditInfo";
import { useParams } from "react-router-dom";
import TabComponent from "../components/Tabs";
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
      {localStorage.getItem("role") != "student" &&
        !showButton && <CoachEditInfo id={id} func={fetch} />}
        {!showButton && (
          <div className="coach-info-view">
            {CoachInfo.map((user) => (
              <React.Fragment key={user.user_id}>
                <React.Fragment>
                  <h1>{user.username}</h1>
                  <h5 style={{ marginLeft: "6px" }}>{user.access_id}</h5>
                  <h6 style={{ marginLeft: "6px" }}>{user.useremail}</h6>
                </React.Fragment>
                </React.Fragment>
                ))}
                <TabComponent info={CoachInfo} role="coach"/>
          </div>
        )}
        {showButton && <h1 className="text-center">loading..</h1>}
      </div>
    </React.Fragment>
  );
};

export default CoachInfo;
