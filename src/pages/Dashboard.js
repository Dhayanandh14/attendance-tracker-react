import React from 'react'
export default function Dashboard() {
  const logout=()=>{
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload()
  }
  return (
    <div className="App">
      <h1>Welcome to dashboard</h1>
      <button className="btn btn-danger" onClick={logout}>log out</button>
    </div>
  )
}
