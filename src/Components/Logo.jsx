import React, { Component } from 'react';
import LogoFIFA from './fifa.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LogoFIFA} style={{height:"100px", width:"177px"}} alt="fifa logo"/>
      </div>
    )
  }
}
