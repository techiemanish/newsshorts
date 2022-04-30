import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-primary text-light">
            <div className="container-fluid ">
              <Link className="navbar-brand text-light" to="/">NewsShorts</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/india">India</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="/usa">US</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="australia">Australia</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="russia">Russia</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="china">China</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-light" to="search">Search news</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}

export default NavBar