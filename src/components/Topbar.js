import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Topbar() {
  return (
    <div className='topnav'>
      <div className="topnav_wrapper">
        <div className="navLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="navRight">
          <span className="topnav_icon">
            <div className="icon_container">
              <FontAwesomeIcon className='icon' icon="fa-solid fa-envelope" />
              <span className="topbadge">2</span>
            </div>
            <div className="icon_container">
              <FontAwesomeIcon className='icon' icon="fa-solid fa-bell" />
              <span className="topbadge">5</span>
            </div>
             <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className='topAvatar' alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}
