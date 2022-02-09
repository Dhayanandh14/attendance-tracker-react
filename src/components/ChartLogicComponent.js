import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import AttendanceService from "../Services/AttendanceService";
import UserService from "../Services/UserService";
import Barchart from "./BarChart";

const attendanceCount = [];
const totalCount = [];
const percentage = [];
let monthData = [];
let length = 0;
let dailyData = [];
const ChartLogicComponent = (props) => {
  const [showYearGraph, setShowYearGraph] = useState(false);
  let lastDayDate;
  let firstDay;
  let data = [];
  let date = new Date();

  firstDay =
    date.getFullYear() + "" + 0 + Number(date.getMonth() + 1) + "" + "01";

  if (date.getMonth() + 1 == 2)
    lastDayDate =
      date.getFullYear() + "" + "0" + Number(date.getMonth() + 1) + "" + 28;
  else if (
    Number(date.getMonth() + 1) == 4 ||
    Number(date.getMonth() + 1) == 7 ||
    Number(date.getMonth() + 1) == 8 ||
    Number(date.getMonth() + 1) == 10
  ) {
    if (Number(date.getMonth() + 1) == 10)
      lastDayDate =
        date.getFullYear() + "" + Number(date.getMonth() + 1) + "" + 30;
    else
      lastDayDate = date.getFullYear() + "" + 0 + date.getMonth() + 1 + "" + 30;
  } else {
    if (Number(date.getMonth() + 1) == 11 || Number(date.getMonth() + 1) == 12)
      lastDayDate =
        date.getFullYear() + "" + Number(date.getMonth() + 1) + "" + 31;
    else
      lastDayDate =
        date.getFullYear() + "" + 0 + Number(date.getMonth() + 1) + "" + 31;
  }

  const monthEndDateFinder = () => {
    if (Number(date.getMonth() + 1) == 2) length = 28;
    else if (
      Number(date.getMonth() + 1) == 4 ||
      Number(date.getMonth() + 1) == 7 ||
      Number(date.getMonth() + 1) == 8 ||
      Number(date.getMonth() + 1) == 10
    )
      length = 30;
    else length = 31;

    return length;
  };
  useEffect(() => {
    UserService.getStudentCount().then((res) => {
      localStorage.setItem("total", res.data);
    });
    AttendanceService.getAttendancePercentage().then((res) => {
      for (let i = 0; i < 12; i++) {
        attendanceCount.push(res.data[i]);
      }
      for (let i = 12; i < 25; i++) {
        totalCount.push(res.data[i]);
      }
      for (let i = 0; i < 12; i++) {
        percentage.push((attendanceCount[i] / totalCount[i]) * 100);
      }
      setShowYearGraph(true);
    });

    AttendanceService.getEachDayAttendancePercentage(
      firstDay,
      lastDayDate
    ).then((attendanceCount) => {
      let endDate = monthEndDateFinder();
      monthData = [];
      for (let i = 1; i <= endDate; i++) {
        monthData.push({
          name: i,
          "Present Percentage": Math.trunc(
            (attendanceCount.data[i - 1] / localStorage.getItem("total")) * 100
          ),
          users2: Math.floor(Math.random() * 100),
        });
      }
    });
  }, []);
  if (showYearGraph) {
    data = [
      {
        name: "Jan",
        Percentage: Math.trunc(isNaN(percentage[0]) ? 0 : percentage[0]),
        users2: 25,
      },
      {
        name: "Febr",
        Percentage: Math.trunc(isNaN(percentage[1]) ? 0 : percentage[1]),
        users2: 50,
      }, //
      {
        name: "March",
        Percentage: Math.trunc(isNaN(percentage[2]) ? 0 : percentage[2]),
        users2: 75,
      },
      {
        name: "April",
        Percentage: Math.trunc(isNaN(percentage[3]) ? 0 : percentage[3]),
        users2: 100,
      },
      {
        name: "May",
        Percentage: Math.trunc(isNaN(percentage[4]) ? 0 : percentage[4]),
        users2: 27,
      },
      {
        name: "June",
        Percentage: Math.trunc(isNaN(percentage[5]) ? 0 : percentage[5]),
        users2: 29,
      },
      {
        name: "July",
        Percentage: Math.trunc(isNaN(percentage[6]) ? 0 : percentage[6]),
        users2: 21,
      },
      {
        name: "Aug",
        Percentage: Math.trunc(isNaN(percentage[7]) ? 0 : percentage[7]),
        users2: 22,
      },
      {
        name: "Sept",
        Percentage: Math.trunc(isNaN(percentage[8]) ? 0 : percentage[8]),
        users2: 22,
      },
      {
        name: "Oct",
        Percentage: Math.trunc(isNaN(percentage[9]) ? 0 : percentage[9]),
        users2: 23,
      },
      {
        name: "Nov",
        Percentage: Math.trunc(isNaN(percentage[10]) ? 0 : percentage[10]),
        users2: 24,
      },
      {
        name: "Dec",
        Percentage: Math.trunc(isNaN(percentage[11]) ? 0 : percentage[11]),
        users2: 24,
      },
    ];
  }

  return (
    <div>
      {props.check == "fullYear" &&
        (!showYearGraph ? (
          <h3 className="text-center">loading Chart...</h3>
        ) : (
          <Barchart
            width={props.width}
            name="Percentage"
            color="green"
            height={props.height}
            data={data}
            text="Attendance Percentage Of month"
          />
        ))}

      {props.check == "fullMonth" && (
        <Barchart
          width={props.width}
          name="Present Percentage"
          height={props.height}
          color="#1f7500"
          data={monthData}
          text="Attendance Percentage Of each day"
        />
      )}
    </div>
  );
};

export default ChartLogicComponent;
