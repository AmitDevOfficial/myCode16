import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
    const host = "http://localhost:8000";

  const userInitial = []

  const [user, setUser] = useState(userInitial)
  const [isLoading, setIsLoading] = useState([]);

  //Get user
  const getUser = async (name, email, password, image) => {
    setIsLoading(true);
    //API Call--
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    });
    if(response.ok){
      const json = await response.json()
    console.log(json)
    setUser(json);
    setIsLoading(false);
    }else{
      console.log("Error Featching user Data");
      setIsLoading(false);
    }
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
       <UserContext.Provider value={{user, getUser, deleteUser, isLoading}}>
        {props.children}
       </UserContext.Provider>
    )
}
export default UserState