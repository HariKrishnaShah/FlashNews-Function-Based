import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ()=>
{
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand m-2">Flash News</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav" >
        <li className="nav-item"><Link to="/entertainment" className="nav-link" aria-current="page">Entertainment</Link></li>
        <li className="nav-item"><Link to="/health" className="nav-link" aria-current="page">Health</Link></li>
        <li className="nav-item"><Link to="/science" className="nav-link" aria-current="page">Science</Link></li>
        <li className="nav-item"><Link to="/sports" className="nav-link" aria-current="page">Sports</Link></li>
        <li className="nav-item"><Link to="/technology" className="nav-link" aria-current="page">Technology</Link></li>
        </ul>
      </div>
    </div>
    </nav>

    </>
    )
  
}

export default NavBar;
