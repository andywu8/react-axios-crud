import React from "react";
import UserDataService from "../services/user.service";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Create() {
    const { register, handleSubmit, reset } = useForm()
    const onError = (errors, e) => console.log(errors, e)

    function onSubmit(data, e){
        console.log(data, e)
        saveUser(data);
        reset();
    }


    function saveUser(data) {
        // console.log("data", data);
        axios({
            method: "post",
            url: "http://localhost:8080/api/users",
            data: data,
            headers: { "Content-Type": "application/json" },
          })
        //     .then(({ data }) => {
        //         console.log("axios check here");
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //       console.error(err.toJSON());
        //     })
        // UserDataService.create(data)
        // .then((response) => {
        //   console.log(response.data);
        // })
        // .catch((e) => {
        //   console.log(e);
        // });
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