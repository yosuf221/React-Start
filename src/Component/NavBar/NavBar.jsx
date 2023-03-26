import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand fw-bolder fs-3" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="home" className="nav-link active fw-bold fs-5">HOME</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="porfolio" className="nav-link active fw-bold fs-5">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="about" className="nav-link active fw-bold fs-5">ABOUT</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to="contact" className="nav-link active fw-bold fs-5">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
