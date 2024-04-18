import React, { useState, useEffect } from 'react'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserDashboard() {

  const host = "http://localhost:8000"
  const userInitial = []

  const [user, setUser] = useState(userInitial)

  //Get all note
  const getUser = async (name, email, password) => {

    //API Call--
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = await response.json()
    console.log(json)
    setUser(json);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser()
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container dashboard">
      <h1 className='dash-heading'>Welcome To Your Dashboard - {user.name}</h1>
      <div className='dash-border'>
        <div className="one">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Registration Date: {user.date}</p>
        </div>
        <div className="two" style={{justifyContent:"center"}}>
          <EditCalendarIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
