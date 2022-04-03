import React from 'react';
import Feature from "./Feature";
import Chart from "./Chart";
import { userData } from '../dummuData';
import Subscription from "../subscriptions.json";
import UserTable from './UserTable';


export default function home() {
  return (
    <div className="Home_main">
      <Feature />
      <Chart data={userData} title='Dummy Data Analytics' grid dataKey="Active User" />
      <Chart data={Subscription} title='Subscriber Plan Analytics' grid dataKey="package" />
      <UserTable />
    </div>
  )
}
