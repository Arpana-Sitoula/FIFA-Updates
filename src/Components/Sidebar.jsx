import React ,{useState} from 'react';
import './Sidebar.css'

export default function Sidebar() {
 
  return (
<div>
  <div className='sidebar'>
    Sort By
    <hr></hr>
    <div className='sortedList'>
      <div className='Opt' >Latest</div>
      <div className='Opt'>Popular</div>
    </div>
  </div>
</div>
  )
}
