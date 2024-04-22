import React, {useState} from 'react';
import UserContext from './userContext';

const UserState = (props) => {
    const host = "http://localhost:8000";

    //Delete User--
    const deleteUser = async(id) => {
        const response = await fetch(`${host}/api/auth/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-Token": loaclStorage.getItem("token")
            },
        })
        const json = response.json();
        console.log(json);
        console.log("I am Deleting my Account" + id);
    }

    return (
        <UserContext.Provider value={{ deleteUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;