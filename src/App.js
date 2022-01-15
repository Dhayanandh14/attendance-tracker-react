import './App.css';
import { BrowserRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import SignUpComponent from './components/SignUpComponent';
import Home from './pages/NotFound';
import SignInComponent from './components/SignInComponent';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import { useState } from 'react';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import Coaches from './pages/Coaches';
import Studentinfo from './pages/StudentInfo';
import Coachinfo from './pages/CoachInfo';
import Attendance from './pages/Attendance';
import Reports from './pages/Reports';



function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false)
//   let isLoggedIn = false;
//  function readCookie(user) {
//   var nameEQ = user + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0;i < ca.length;i++) {
//       var c = ca[i];
//       while (c.charAt(0)===' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }
// let cookie = readCookie("user")
// let cookieValue=`naHQH1tyeG%252ByD%252B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%252BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%252Bo43uMjp%252BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%252Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%252BVomMrt6Dn1lxIZG7uM1Jj%252Bn0IQNIWDnf77HD2tzr52%252BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%252Fqb2TuTB95II%252FrZdcrV50WqZNmBsrOw0SQs6k8%253D--LKLs3rXIB7WKY4%252Bu--hkP9prmzWQcxeEovm%252BElyw%253D%253D`

// // useEffect(() => {
// //   if(cookie === cookieValue){
// //   setisLoggedIn(true);

// //  }
// //  else{
// //   setisLoggedIn(false);
// //  }
// // }, [isLoggedIn])


// // let cookie = localStorage.getItem("token")
// // let cookieValue = `naHQH1tyeG%2ByD%2B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%2BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%2Bo43uMjp%2BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%2Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%2BVomMrt6Dn1lxIZG7uM1Jj%2Bn0IQNIWDnf77HD2tzr52%2BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%2Fqb2TuTB95II%2FrZdcrV50WqZNmBsrOw0SQs6k8%3D--LKLs3rXIB7WKY4%2Bu--hkP9prmzWQcxeEovm%2BElyw%3D%3D`
// if(cookie === cookieValue) {
//   isLoggedIn=true
// }else{
//   isLoggedIn=false
// }

  return (
    <div>

      <Router>
        <Switch>

          {< Route path="/dashboard">
            <Dashboard />
          </Route>}


          {<Route path="/students">
            <Students />
          </Route>}
          {  <Route path="/coaches">
            <Coaches/>
          </Route>}


        // (<Route exact path="/"> <Redirect to="/signin" /> </Route>



        //  <Route  path="/" exact  component={Home}></Route>
        { <Route path="/signup" component={SignUpComponent}></Route>}
      {  <Route path="/signin" component={SignInComponent}></Route>}
      {<Route path="/student_info" component={Studentinfo}></Route>}
      {<Route path="/coach_info" component={Coachinfo}></Route>}
      {<Route path="/attendance" component={Attendance}></Route>}
      {<Route path="/reports" component={Reports}></Route>}

      // <Route path="*">
      //     <Redirect to="/notfound" />
      //     <Route path="/notfound" component={NotFound}></Route>
      //   </Route>
        </Switch>
      </Router>
    </div>
    );
  }

export default App;
// (<Route path="/signup" component={SignUpComponent}></Route>)
