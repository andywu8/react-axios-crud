import React from 'react';
import UserDataService from '../services/user.service';
import axios from 'axios';
import { useState } from 'react';

export default function List() {
    const [users, setUsers] = React.useState([]);

    function retrieveUsers(){
        UserDataService.getAll()
        .then((response) => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    }
    return (
        <>
            <div>
                <h1>List</h1>
                {users.map((user) => (<li>{user}</li>))}
            </div>
        </>
    )
}