import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem active">
                        <a href="/">
                            <FontAwesomeIcon className='sidebar_icon' icon="fa-solid fa-house" />
                         Home</a>
                        </li>
                        <li className="sidebarItem">
                        <a href="/users">
                            <FontAwesomeIcon className='sidebar_icon' icon="fa-solid fa-list-alt" />
                          User List</a>
                        </li>
                        <li className="sidebarItem">
                        <FontAwesomeIcon className='sidebar_icon' icon="fa-solid fa-arrow-trend-up" />
                            Analytics
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
