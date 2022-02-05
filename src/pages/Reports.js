import React from "react";
import { Link } from "react-router-dom";
import ChartLogicComponent from "../components/ChartLogicComponent";
import SideBarComponent from "../components/SidebarComponent";
import "./Report.css";
const Reports = () => {
  return (
    <div>
      <SideBarComponent />
      <div style={{ marginLeft: "90px","marginTop":"130px" }}>
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
      <div style={{ "marginTop": "120px"}}>
        <ChartLogicComponent width={1700} check="fullMonth" height={400}/>
      </div>
    </div>
  );
};
export default Reports;
