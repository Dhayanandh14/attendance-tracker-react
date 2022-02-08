import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import Coaches from "./pages/Coaches";
import StudentInfo from "./pages/StudentInfo";
import CoachInfo from "./pages/CoachInfo";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import ReportByDateRange from "./pages/ReportByDateRange";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Monthlyreport from "./pages/MonthlyReport";
import ReportByNameAndDateRange from "./pages/ReportByNameAndDateRange";
import StudentView from "./pages/StudentsView/StudentView";
import StudentViewReportByDateRange from "./pages/StudentsView/StudentViewReportByDateRange";
import StudentViewMonthlyReport from "./pages/StudentsView/StudentViewMonthlyReport";
import StudentViewReportByNameAndDateRange from "./pages/StudentsView/StudentViewReportByNameAndDateRange";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

function App() {
  console.log("render test")
  // const [reRender, setreRender] = useState("");
  // console.log(localStorage.getItem("role"))
  // let role = localStorage.getItem("role");
  // let isAdmin = false;
  // if(role !=null && typeof role === "object"){
  //   console.log(role);
  //  let isExist = role.includes("admin");
  //  console.log(isExist);
  //  isAdmin = isExist;
  // }

  // if( role !=null && role=="admin"){
  //   isAdmin = true;
  // }
  return (
    <div>

      <Router>
        <Switch>
          {localStorage.getItem("role") == "admin"&& (
            <>
              <Route path="/" exact>
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/signup">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/signin">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/students" exact>
                <Students />
              </Route>
              <Route path="/coaches" exact>
                <Coaches />
              </Route>
              <Route path="/students/:id">
                <StudentInfo />
              </Route>
              <Route path="/coaches/:id" component={CoachInfo}></Route>
              <Route path="/attendance" component={Attendance}></Route>
              <Route path="/reports" component={Reports} exact></Route>

              <Route
                path="/reports/report_by_date/"
                component={ReportByDateRange}
              ></Route>
              <Route
                path="/reports/monthly_report/"
                component={Monthlyreport}
              ></Route>
              <Route
                path="/reports/student_reports"
                component={ReportByNameAndDateRange}
              ></Route>

            </>
          )}
          <Route path="/" exact>
            <Redirect to="/signin" />
         </Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>

          {(localStorage.getItem("role") == "student" || localStorage.getItem("role") == "guest") && (
            <>
            <Route path="/" exact>
                <Redirect to="/reports" />
              </Route>
            <Route path="/reports" component={StudentView} exact></Route>
            <Route
                path="/reports/report_by_date/"
                component={StudentViewReportByDateRange}
              ></Route>
              <Route
                path="/reports/monthly_report/"
                component={StudentViewMonthlyReport}
              ></Route>
              <Route
                path="/reports/student_reports"
                component={StudentViewReportByNameAndDateRange}
              ></Route>

            </>

          )}
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
