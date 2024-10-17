import React from 'react';
import axios from "axios";
function PostApiCall(props) {
    
    let data = { first_name: props.Name,
        last_name: props.Name,
        email : props.Email,
        password : props.Pass,
        gender : props.gender}
        console.log(data)

        fetch("http://localhost:8000/users", {
            method: "POST",
            body: JSON.stringify(data)
            
            //body: JSON.stringify({title: 'React POST Request Example' })
            
            ,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
        .then(response => response.json())
        .then(json => console.log("The JSON value is :",json))
        

    return (
        <div>
             <p> Data Submitted Successfully !!</p>
        </div>
    );
}

export default PostApiCall;