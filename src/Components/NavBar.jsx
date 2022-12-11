import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="/navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand text-success" to="/">FIFA</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">NEWS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="scores/">SCORES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="fixtures/">FIXTURES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="highlights/">HIGHLIGHTS</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          LANG
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" href="/">AR</Link>
          <Link className="dropdown-item" href="/">DE</Link>
          <Link className="dropdown-item" href="/">ENG</Link>
          <Link className="dropdown-item" href="/">ES</Link>
          <Link className="dropdown-item" href="/">FR</Link>
          <Link className="dropdown-item" href="/">HE</Link>
          <Link className="dropdown-item" href="/">IT</Link>
          <Link className="dropdown-item" href="/">NL</Link>
          <Link className="dropdown-item" href="/">NO</Link>
          <Link className="dropdown-item" href="/">PT</Link>
          <Link className="dropdown-item" href="/">RU</Link>
          <Link className="dropdown-item" href="/">SV</Link>
          <Link className="dropdown-item" href="/">UD</Link>
          <Link className="dropdown-item" href="/">ZH</Link>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      </ul>
      <form className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-warning"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
