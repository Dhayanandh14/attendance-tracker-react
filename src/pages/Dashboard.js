import { Link } from 'react-router-dom';
export default function Dashboard() {
    const logoutHandler = () => {
     document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     window.location.replace("/")
    };


    // localStorage.removeItem("user_cookie")
  return (
    <div className="App">
      <h1>Welcome to dashboard</h1>
      <Link to="/students">Students</Link>
      <br/>
      <Link to="/coaches">Coaches</Link>
      <br/>
      <Link to="/attendance">Attendance</Link>
      <br/>
      <Link to="/reports">Reports</Link>

      <br />
      <button className="btn btn-danger" onClick={logoutHandler}>log out</button>
    </div>
  )
}
