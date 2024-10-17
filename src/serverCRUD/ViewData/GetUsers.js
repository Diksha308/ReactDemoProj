import React from 'react';
import {useEffect,useState} from 'react'
import "../Crud.css"

function GetUsers() {

    let [userData, DataFunc] = useState([])

   
    useEffect(() => {
      fetch("http://localhost:8000/users")
      .then(response => response.json())
      .then(data => DataFunc(data))
      .then(console.log(userData))
    },[]);

    let allNames= userData.map((comltData) => 
    <tr  id={comltData.id}> 
        <td>{comltData.first_name}{" "}{comltData.last_name}</td> 
        <td>{comltData.email}</td> 
        <td>{comltData.gender}</td> 
    </tr>)
    return (
        <>
        <h1>User details: </h1>
        <div className='GetUser'>
        <table border={"2px"}>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            {allNames}
        </table> 
        </div>
        </>
    );
}

export default GetUsers;