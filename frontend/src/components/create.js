import React from "react";
import UserDataService from "../services/user.service";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
export default function Create() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        // axios.post("http://localhost:8080/api/users", data, {
        //     headers: headers
        //   }).catch((err) => {
        //     console.log("error message for getting: " + err.message);
        // });
        saveUser();
        resetValues();
    }
    function resetValues(){
        setFirstName("");
        setLastName("");
    }

    function saveUser() {
        console.log(firstName);
        console.log(lastName);
        axios.post(`http://localhost:8080/api/users`, 
        {
            firstName: firstName,
            lastName: lastName
        })
    }
    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <label>Last Name</label>
                <input value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}