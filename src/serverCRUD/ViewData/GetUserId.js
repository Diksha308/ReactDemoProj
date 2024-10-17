import React from 'react';
import {useState} from 'react';
import UserIdData from "./UserIdData";
import "../Crud.css"
 
 function GetUserId(props) {

    const[idVal,updIdVal] = useState("")
    const[idFinalValue,upIdFinalValue] = useState("")

    function idFun(e) {
        e.preventDefault()
        //console.log(idVal); 
        upIdFinalValue(idVal)
        console.log(idFinalValue); 
    }

    return (
        <div  className='GetUser'>
        <form className='FormDiv'onSubmit={idFun}>
            <label> User ID </label>
            <input type='text' value={idVal} placeholder='Enter Your ID Here' onChange={(e) => updIdVal(e.target.value)}/>
            <br></br>
            <button className="Userbtn">SUBMIT</button>
        </form>
        <UserIdData id={idFinalValue} ></UserIdData>
        </div>
    );
 }
 
 export default GetUserId;