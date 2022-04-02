import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Feature() {
  return (
    <div className='featured'>
        <div className="featured_item">
            <span className="featured_title">Salse</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">Rs. 12500</span>
                <span className="featureMoneyRate">-120
                <FontAwesomeIcon className='featured_icon' icon="fa-solid fa-arrow-up" />
                </span>
            </div>
            <span className="sub_featured">Compared to the last month</span>
        </div>
        <div className="featured_item">
            <span className="featured_title">Revanu</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">Rs. 1200</span>
                <span className="featureMoneyRate">-10
                <FontAwesomeIcon className='featured_icon negative' icon="fa-solid fa-arrow-down" />
                </span>
            </div>
            <span className="sub_featured">Compared to the last month</span>
        </div>
        <div className="featured_item">
            <span className="featured_title">Cost</span>
            <div className="FeaturedMoneyContainer">
                <span className="featureMoney">Rs. 22500</span>
                <span className="featureMoneyRate">-1120
                <FontAwesomeIcon className='featured_icon negative' icon="fa-solid fa-arrow-down" />
                </span>
            </div>
            <span className="sub_featured">Compared to the last month</span>
        </div>
    </div>
  )
}
