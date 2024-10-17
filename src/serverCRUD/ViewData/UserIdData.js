import React from 'react';
import {useEffect,useState} from 'react'
import UserData from './UserData';
import "../Crud.css"

function UserIdData(props) {
    let [userData, DataFunc] = useState("")
    

    let api = " "
    if(props.id)
        api= "http://localhost:8000/users/" + props.id + " "
   
    useEffect(() => {
        console.log(api)
       
            fetch(api)
        .then(response => response.json())
        .then(data => DataFunc(data))
        .then(console.log(userData))       
    },[api]);

    if(userData!== " " && userData!=="")
    {
        return (<>
                        <UserData 
                            id={userData.id} 
                            FName={userData.first_name} 
                            LName={userData.last_name} 
                            Gender={userData.gender} 
                            Email={userData.email}>
                        </UserData>
                </>)
    }
    else if(userData===" ")
    {
       return(<><h1>No data found</h1></>)
    }
    else{
        return(<></>)
    }

}

export default UserIdData;