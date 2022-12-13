import React  from 'react';
import Load from './loading.gif'

const Loading = () => {

    return (
      <div className='text-center'>
        <img src={Load} style={{height:"100px", width:"177px"}} alt="spinner"/>
      </div>
    )
  }
export default Loading;
