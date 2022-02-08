import React from 'react';
import { Link } from "react-router-dom";
import "../Report.css";

const StudentView = () => {
  const logoutHandler = () => {
    window.location.replace("/signin");
    localStorage.removeItem("role");
  }
  return (
    <div>
    <button className="btn btn-danger float-end" onClick={logoutHandler} style={{
      "position": "relative",
      "top": "-107px",
      "right": "20px"
  }}>Logout</button>
    <div>
      <div style={{ marginLeft: "10px","marginTop":"130px" }}>
    <table style={{"border-collapse": "separate",
      "border-spacing": "126px 0"}}>
      <tr>
    <td>
        <button className="btn btn-dark report-button"style={{"width": "369px"}}>
          <i class="fas fa-chart-bar report-icon"></i>Monthly Report
          <Link to={`reports/monthly_report`}>
            <button className="btn btn-light report-click-button">click</button>
          </Link>
        </button>
    </td>

    <td>
        <button className="btn btn-dark report-button"style={{"width": "369px"}}><i class="fas fa-chart-bar report-icon"></i>
         All Reports By Date Range
          <Link to={`reports/report_by_date`}>
          <button className="btn btn-light report-click-button">click</button>
          </Link>
          </button>
    </td>

    <td>
          <button className="btn btn-dark report-button"style={{"width": "369px"}}>
          <span style={{"position": "relative","top": "7px"}}> <i class="fas fa-chart-bar report-icon"></i> Report By Name And Date Range</span>
          <Link to={`reports/student_reports`}>
            <button className="btn btn-light report-click-button" style={{"position": "relative","top": "-11px"}}>click</button>
          </Link>
          </button>
    </td>
        </tr>

    </table>
      </div>
    </div>
    </div>
  );
}

export default StudentView;
