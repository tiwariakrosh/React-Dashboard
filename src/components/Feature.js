import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Feature() {
  return (
    <div className='featured'>
        <div className="featured_item">
            <span className="featured_title">Total User</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">12460</span>
                <FontAwesomeIcon className='featured_icon' icon="fa-solid fa-users" />
            </div>
        </div>
        <div className="featured_item">
            <span className="featured_title">Active Users</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">8920</span>
                <FontAwesomeIcon className='featured_icon' icon="fa-solid fa-user-check" />
            </div>
           
        </div>
        <div className="featured_item">
            <span className="featured_title">Inactive Users</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">3540</span>
                <FontAwesomeIcon className='featured_icon' icon="fa-solid fa-user-slash" />
            </div>
           
        </div>
    </div>
  )
}
