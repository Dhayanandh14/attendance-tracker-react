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
import Profile from "./pages/Profile";
import Monthlyreport from "./pages/MonthlyReport";
import ReportByNameAndDateRange from "./pages/ReportByNameAndDateRange";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  console.log("render test");
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
          {(localStorage.getItem("role") == "admin" ||
            localStorage.getItem("role") == "student") && (
            <>
              <Route path="/" exact>
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/signup" exact>
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/signin" exact>
                <Redirect to="/dashboard" />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>

              <Route path="/students" exact>
                <Students />
              </Route>
              <Route path="/coaches" exact>
                <Coaches />
              </Route>
              <Route path="/students/:id" exact>
                <StudentInfo />
              </Route>
              <Route path="/coaches/:id" exact component={CoachInfo}></Route>
              <Route path="/attendance" exact component={Attendance}></Route>
              <Route path="/reports" exact component={Reports} exact></Route>

              <Route
                path="/reports/report_by_date/"
                exact
                component={ReportByDateRange}
              ></Route>
              <Route
                path="/reports/monthly_report/"
                exact
                component={Monthlyreport}
              ></Route>
              <Route
                path="/reports/student_reports"
                exact
                component={ReportByNameAndDateRange}
              ></Route>
            </>
          )}
          <Route path="/" exact>
            <Redirect to="/signin" />
          </Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>

          <Route path="*">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
