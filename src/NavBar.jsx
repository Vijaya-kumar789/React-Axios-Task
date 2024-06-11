import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { BsDatabaseFillAdd } from "react-icons/bs";
function NavBar() {
    const [isToggler, setIsToggler] = useState(false);
    const openToggler = () => {
        setIsToggler(!isToggler);
      };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3 mb-3 nav">
  <div className="container-fluid">
    <h3 className="navbar-brand mx-4 my-2">Axios Task</h3>
    <button
            onClick={openToggler}
            className={`navbar-toggler ${isToggler ? "collapsed" : ""} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={`${isToggler ? "false" : "true"}`}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isToggler ? "show" : ""
            } justify-content-between`}
            id="navbarSupportedContent"
          >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 icon">
        <li className="nav-item ">
          <Link to="/" className="nav-link active home" ><IoHome /></Link>
        </li>
        <li className="nav-item">
          <Link to="/UserData" className="nav-link active lastpage"><BsDatabaseFillAdd /></Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar