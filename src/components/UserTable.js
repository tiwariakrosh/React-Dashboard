import React, { useState } from 'react';
import Users from "../users.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserTable() {
  const [searchTerm, setsearchTterm] = useState("");
  const [data, setdata] = useState(Users);
  const [order, setorder] = useState("ASC")
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
      setdata(sorted);
      setorder("ASC");
      <FontAwesomeIcon className='icon' icon="fa-solid fa-bell" />
    }
  }


  return (
    <div className='User_Table'>
      <h2 className='subscriptionTitle'>Subscription Table</h2>
      <div className="searchBox">
      <FontAwesomeIcon className="lens" icon="fa-solid fa-magnifying-glass" />
      <input type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setsearchTterm(e.target.value)} />
      </div>
      <table className='UserTable'>
        <thead>
          <tr className='UserTr'>
            <th className="Userth">ID</th>
            <th onClick={() => sorting("first_name")} className="Userth"><span>First Name 
                <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span>
            </th>
            <th className="Userth">Middle Name</th>
            <th onClick={() => sorting("last_name")} className="Userth">
              <span>Last Name <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span></th>
            <th onClick={() => sorting("username")} className="Userth">Username</th>
            <th onClick={() => sorting("email")} className="Userth"><span>Email
                <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span></th>
            <th className="Userth">Password</th>
            <th className="Userth">Active</th>
            <th onClick={() => sorting("address")} className="Userth"><span>Address
                <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span></th>
            <th onClick={() => sorting("country")} className="Userth"><span>Country 
                <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span></th>
            <th onClick={() => sorting("join_date")} className='Userth'><span>Join Date
                <FontAwesomeIcon className='icon' icon="fa-solid fa-arrow-up" /></span></th>
          </tr>
        </thead>
        {data.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.join_date.toLowerCase().includes(searchTerm.toLowerCase())

          ) {
            return val;
          }
        }).map(User => {
          return (
            <tbody key={User.id}>
              <tr className="UserTr">
                <td className="UserTd">{User.id}</td>
                <td className="UserTd">{User.first_name}</td>
                <td className="UserTd">{User.middle_name}</td>
                <td className="UserTd">{User.last_name}</td>
                <td className="UserTd">{User.username}</td>
                <td className="UserTd">{User.email}</td>
                <td className="UserTd">{User.password}</td>
                <td className="UserTd">{User.active}</td>
                <td className="UserTd">{User.address}</td>
                <td className="UserTd">{User.country}</td>
                <td className="UserTd">{User.join_date}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}
