import React from 'react';
import Feature from "./Feature";
import Chart from "./Chart";
import WidgetLg from "./WidgetLg";
import Widget from "./Widget";
import { userData } from '../dummuData';
import Subscription from "../subscriptions.json";
import UserTable from './UserTable';


export default function home() {
  return (
    <div className="Home_main">
      <Feature />
      <Chart data={userData} title='User Analytics' grid dataKey="Active User" />
      <Chart data={Subscription} title='Subscriber Analytics' grid dataKey="package" />
      <div className="homeWidget">
        <Widget />
        <WidgetLg />
      </div>
      <UserTable />
      <useAxios />
    </div>
  )
}
