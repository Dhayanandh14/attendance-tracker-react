import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SideBarComponent from '../components/SidebarComponent';
import ReportService from "../Services/ReportService";
let show = false;
const Monthlyreport = () => {
  const monthDateInputRef = useRef();
  const [allReport, setAllReport] = useState([]);

const generate=() => {
  let date = new Date();
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDayDate;
  let inputDate = new Date(monthDateInputRef.current.value).getMonth()+1;
  if(new Date(monthDateInputRef.current.value).getMonth()+1 == 2)
  lastDayDate =  monthDateInputRef.current.value+"-"+28;
  else if(inputDate== 4 || inputDate==7 || inputDate==8 || inputDate==10)
  lastDayDate =  monthDateInputRef.current.value+"-"+30;
  else
  lastDayDate =  monthDateInputRef.current.value+"-"+31;
  let firstDayDate =  monthDateInputRef.current.value+"-"+""+firstDay.getDate();
  ReportService.getReportByDateWise(firstDayDate, lastDayDate).then((res) => {
    setAllReport(res.data);
    console.log(res.data)
  });
  show= true;
}

  const reportDetails = () => {
    let head
    if(show)
    head = [<th className="table-light">Name</th>];
    let content = [];
    let keys = Object.keys(allReport);
    if (keys.length > 0) {
      let dateArr = Object.keys(allReport[keys[0]]).sort(); // take date because date common ah elarukum irukum so i will choose keys[0]
      for (let i of dateArr) {
        let dt = new Date(i);
        console.log(dt)
        head.push(<th className="table-light">{dt.getDate()}</th>);
      }

      const func = (key, dates) => {
        let arr = [];
        for (let i in dates) {
          arr.push(
            allReport[key][dateArr[i]] ?
            <td style={{"color":"green"}}><strong>P</strong></td> :
            <td style={{"color":"red"}}><strong>A</strong></td>
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
    <div>
    <SideBarComponent />
    <div style={{marginLeft: "90px" }}>
    <div className="row">
      <div className="col-md-3">
        <label htmlFor="date-of-join" className="form-label">
          Select Month
        </label>
        <input
          type="month"
          className="form-control"
          id="date-of-join"
          ref={monthDateInputRef}
        />
      </div>
      <div className="col-md-3 mt-4 mb-2" style={{"position":"relative","top":"8px"}}>
        <button className="btn btn-dark" onClick={generate}>
          Select
        </button>
      </div>
    </div>
    <table className="table table-bordered table-hover" style={{marginTop: "50px" }}>
      <tbody>{reportDetails()}</tbody>
    </table>
  </div>
  </div>
  );
}

export default Monthlyreport;
