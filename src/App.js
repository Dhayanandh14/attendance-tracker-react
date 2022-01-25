import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import Coaches from "./pages/Coaches";
import Studentinfo from "./pages/StudentInfo";
import Coachinfo from "./pages/CoachInfo";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import Reportbyname from "./pages/ReportByName";
import Reportbydaterange from "./pages/ReportByDateRange";
import SignInComponent from "./pages/SignInComponent";
import SignUpComponent from "./pages/SignUpComponent";

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
          <Route path="/signup" component={SignUpComponent}></Route>
          <Route path="/signin" component={SignInComponent}></Route>
          <Route path="/students/student_info/:id">
            <Studentinfo />
          </Route>
          <Route path="/coaches/coach_info/:id" component={Coachinfo}></Route>
          <Route path="/attendance" component={Attendance}></Route>
          <Route path="/reports" component={Reports} exact></Route>
          <Route
            path="/reports/report_By_name/"
            component={Reportbyname}
          ></Route>
          <Route
            path="/reports/report_by_date/"
            component={Reportbydaterange}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
