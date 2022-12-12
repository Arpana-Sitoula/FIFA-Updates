import React, { Component } from 'react';
import Logo from './Logo';


export default class Card extends Component {
  render() {
    return (
     <div>
      <div className='bg-info' style={{height :"140px", width: "100%"}}>
      <div className=' d-flex align-items-center justify-content-center p-5'> <Logo/></div>
      </div>
     </div>
    )
  }
}
