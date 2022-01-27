import React, { useRef } from "react";
import { useState } from "react";
import SideBarComponent from "../components/SidebarComponent";
import ReportService from "../Services/ReportService";
const ReportByDateRange = () => {
  const fromDateInputRef = useRef();
  const toDateInputRef = useRef();
  const [allReport, setAllReport] = useState([]);

  const Generate = () => {
    let from = fromDateInputRef.current.value.split("-").join("");
    let to = toDateInputRef.current.value.split("-").join("");
    ReportService.getReportByDateWise(from, to).then((res) => {
      setAllReport(res.data);
    });
  };

  const reportDetails = () => {
    let head = [<th>Name</th>];
    let content = [];
    let keys = Object.keys(allReport);
    if (keys.length > 0) {
      let dateArr = Object.keys(allReport[keys[0]]).sort(); // take date because date common ah elarukum irukum so i will choose keys[0]
      for (let i of dateArr) {
        let dt = new Date(i);
        head.push(<th>{dt.getDate()}</th>);
      }

      const func = (key, dates) => {
        let arr = [];
        for (let i in dates) {
          arr.push(
            <td>{allReport[key][dateArr[i]] ? "Present" : "Absent"}</td>
          );
        }
        return <React.Fragment>{arr}</React.Fragment>;
      };

      for (let key of keys) {
        content.push(
          <tr>
            <td>{key}</td>
            {func(key, dateArr)}
          </tr>
        );
      }
    }
    return (
      <React.Fragment>
        {" "}
        <tr>{head}</tr>
        {content}{" "}
      </React.Fragment>
    );
  };

  return (
    <div className="all-reports">
      <SideBarComponent />

      <div className="row">
        <div className="col-md-3">
          <label htmlFor="date-of-join" className="form-label">
            From Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date-of-join"
            ref={fromDateInputRef}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="date-of-join" className="form-label">
            To Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date-of-join"
            ref={toDateInputRef}
          />
        </div>
        <div className="col-md-4 mt-5 mb-2">
          <button className="btn btn-primary" onClick={Generate}>
            Submit Date
          </button>
        </div>
      </div>
      <table className="table">
        <tbody>{reportDetails()}</tbody>
      </table>
    </div>
  );
};

export default ReportByDateRange;
