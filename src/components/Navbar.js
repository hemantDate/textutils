import React from 'react'
// react ka fn based component : rfc
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   NavLink,
//   Link
// } from 'react-router-dom';

export default function Navbar(procs) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${procs.mode} bg-${procs.mode}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/">{procs.title}</a>
        {/* <Link className="navbar-brand" to="/">{procs.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
              {/* <Link to="/" className="nav-link active">Home</Link> */}
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-link active" >About {/*{procs.title}</Link>
            </li> */}
            <li className="nav-item">
              <a href="/form" className="nav-link active" >Form {/*{procs.title}*/}</a>
              {/* <Link to="/form" className="nav-link active" >Form {procs.title}</Link> */}
            </li>
          </ul>
          <div className={`form-check form-switch text-${procs.text}`}>
            <input className="form-check-input" onClick={procs.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{procs.text}Mode</label>
          </div>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
        </div>
      </div>
    </nav>
  )
}

/*
prop object cha components la specift kel and default values set kel

Navbar.prototype={
    key : PropTypes.string.isRequired,    ptrs
    key2 : PropTypes.string               pts
}

Navbar.defaultprops={
  title : PropTypes.string.isRequired,    
  // key2 : PropTypes.string               
}
```*/