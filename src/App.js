import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
// import NotFound from "./pages/NotFound";
import Coaches from "./pages/Coaches";
import StudentInfo from "./pages/StudentInfo";
import CoachInfo from "./pages/CoachInfo";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import ReportByName from "./pages/ReportByName";
import ReportByDateRange from "./pages/ReportByDateRange";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/students" exact>
            <Students />
          </Route>
          <Route path="/coaches" exact>
            <Coaches />
          </Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/students/student_info/:id">
            <StudentInfo />
          </Route>
          <Route path="/coaches/coach_info/:id" component={CoachInfo}></Route>
          <Route path="/attendance" component={Attendance}></Route>
          <Route path="/reports" component={Reports} exact></Route>
          <Route
            path="/reports/report_By_name/"
            component={ReportByName}
          ></Route>
          <Route
            path="/reports/report_by_date/"
            component={ReportByDateRange}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
