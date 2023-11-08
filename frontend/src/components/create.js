import React from "react";
import UserDataService from "../services/user.service";
import { useState, } from "react";
import { useForm } from "react-hook-form";

export default function Create() {
    const { register, handleSubmit, reset } = useForm()
    const onError = (errors, e) => console.log(errors, e)

    function onSubmit(data, e){
        console.log(data, e)
        saveUser(data);
        reset();
    }

    function saveUser(data) {
        UserDataService.create(data);
    }



    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Last Name</label>
                <input {...register("lastName")} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}