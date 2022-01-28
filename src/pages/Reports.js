import React from "react";
import { Link } from "react-router-dom";
import SideBarComponent from "../components/SidebarComponent";
import "./Report.css";
const Reports = () => {
  return (
    <div>
      <SideBarComponent />
      <div style={{ marginLeft: "90px" }}>
        <button className="btn btn-primary">Monthly Report</button>
        <br />
        <br />
        <Link to={`reports/report_by_date`}>
          <button className="btn btn-dark">
            Get All Reports By Date Range
          </button>
        </Link>
        <br />
        <br />
        <br />
        <Link to={`reports/report_By_name`}>
          <button className="btn btn-dark">Get Report By Name</button>
        </Link>
      </div>
    </div>
  );
};
export default Reports;
