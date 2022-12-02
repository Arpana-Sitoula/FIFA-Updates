import React, { Component } from 'react';
import Load from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Load} style={{height:"100px", width:"177px"}}/>
      </div>
    )
  }
}
