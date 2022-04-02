import React from 'react';
import Subscription from "../subscriptions.json";

export default function WidgetLg() {
  return (
    <div className='Subscriber'>
      <h3 className='SubscriberTitle'>Latest Transiction</h3>
      <table className='SubscriberTable'>
        <thead>
          <tr className='SubscriberTr'>
            <th className="Subscriberth">ID</th>
            <th className="Subscriberth">User ID</th> 
            <th className="Subscriberth">Package</th>
            <th className="Subscriberth">Expier Date</th>
          </tr>
        </thead>
        {Subscription.map(subscriber => {
          return (
            <tbody key={subscriber.id}>
              <tr className="SubscriberTr">
                <td className="SubscriberTd">{subscriber.id}</td>
                <td className="SubscriberTd" id='U_ID'>{subscriber.user_id}</td>
                <td className="SubscriberTd">{subscriber.package}</td>
                <td className="SubscriberTd">{subscriber.expires_on}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
   
    </div>
  )
}
