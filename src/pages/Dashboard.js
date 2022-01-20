import { useEffect } from 'react';
import {Link, NavLink } from 'react-router-dom';
 import 'boxicons';
import SideBarComponent from '../components/SidebarComponent';
export default function Dashboard() {
    const logoutHandler = () => {
     document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     window.location.replace("/")
    };

    // localStorage.removeItem("user_cookie")
  return (
    <div className="App">
      <SideBarComponent/>
        <h1>Dashboard</h1>
    </div>
  )
}
