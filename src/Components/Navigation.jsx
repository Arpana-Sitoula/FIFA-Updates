import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center bg-success" style={{height: "100px"}}>
  <li className="nav-item">
    <a className="nav-link text-light mt-4"  href="/">NEWS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light mt-4" href="/">SCORE</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light mt-4" href="/">FIXTURE</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light mt-4">HIGHLIGHTS</a>
  </li>
</ul>
      </div>
    )
  }
}
