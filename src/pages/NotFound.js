import React from 'react'
import { Link } from 'react-router-dom';
import '.././App.css'

export default function NotFound() {
  return (
    <div className="App">
      <h1> 404 page not found</h1>
      <Link to="/signin"> back to sign in</Link>
    </div>
  );
}
