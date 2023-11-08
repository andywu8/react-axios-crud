import React from "react";
import UserDataService from "../services/user.service";
import { useState, } from "react";
import { useForm } from "react-hook-form";

export default function Create() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => console.log(data, e)
    const onError = (errors, e) => console.log(errors, e)

    function saveUser() {
        UserDataService.create()
    }


    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={(onSubmit, onError)}>
                <label>First Name</label>
                <input {...register("firstName")} />
      
                <label>Last Name</label>
                <input {...register("lastName")} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}