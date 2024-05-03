import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
    const host = "http://localhost:8000";

  const userInitial = []

  const [user, setUser] = useState(userInitial)

  //Get user
  const getUser = async (name, email, password, image) => {

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

 
   //Delete User--
   const deleteUser = async(id) => {
    const response = await fetch(`${host}/api/auth/deleteuser/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-Token": localStorage.getItem("token")
        },
    })
    
    const json = response.json();
    console.log(json);
    console.log("I am Deleting my Account" + id);
}

    return (
       <UserContext.Provider value={{user, getUser, deleteUser}}>
        {props.children}
       </UserContext.Provider>
    )
}
export default UserState