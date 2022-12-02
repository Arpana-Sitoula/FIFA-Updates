import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>FIFA Update</h2>
      <p className="pr-5 text-white-50">Get exclusive contents by subscribing us through our email and get daily updates about the football.</p>
      <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Links</h4>
        <ul className="m-0 p-0">
          <li>- <a href="#">Advertise</a></li>
          <li>- <a href="#">Terms of service</a></li>
          <li>- <a href="#">Privacy Policy</a></li>
          <li>- <a href="#">Manage Cookies</a></li>
          <li>- <a href="#">Partners</a></li>
          <li>- <a href="#">Contributer</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>FIFA-Strasse 20, Zürich, Switzerland</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i className="fa fa-envelope-o mr-3"></i>arp2ctaula@gmail.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2022. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
      </div>
    )
  }
}
