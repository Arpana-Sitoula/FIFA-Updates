import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">FIFA</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">NEWS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">SCORES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">FIXTURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">HIGHLIGHTS</a>
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
          className="btn btn-danger"
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
