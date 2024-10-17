import React from 'react';
import { useState} from "react";
import validator from 'validator';
import SubmitData from './SubmitData';
import "../Crud.css"

function AddUser(props) {

    const[Name,updName] = useState("");
    const[Gender,updGender] = useState("");
    const[Email,updEmail] = useState("");
    const[Pass,updPass] = useState("");

    const[NameValid,updNameValid] = useState("none");
    const[EmailValid,updEmailValid] = useState("none");
    const[PassValid,updPassValid] = useState("none");
    const[allOK,upallOK] = useState(false)

    function UserInfo(e){
        e.preventDefault()
        console.log(Name +" "+Gender +" "+Email+" "+Pass);
        (!validator.isEmpty(Name)) ? updNameValid("none") : updNameValid("block")
        validator.isStrongPassword(Pass) ? updPassValid("none"): updPassValid("block")
        validator.isEmail(Email) ? updEmailValid("none") : updEmailValid("block")
        upallOK(true)
    }

    return (
        <div  className='GetUser'>
        <form className='FormDiv'onSubmit={UserInfo}>
            <table style={{textAlign:'left'}}>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type='text' value={Name} placeholder='Enter Name' onChange={(e) => updName(e.target.value)}/></td>
                    <td><p style={{display:NameValid, color:"red"}}>Name is required{NameValid}</p></td>
                </tr>
                <tr>
                    <td><label>Gender</label></td>
                    <td><label>Male</label><input type='radio' name="gender" value="Male" defaultChecked onChange={(e) => updGender(e.target.value)}/>
                    <label>Female</label><input type='radio' name="gender" value="Female" onChange={(e) => updGender(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td><input type='text' value={Email} placeholder='Enter Email'onChange={(e) => updEmail(e.target.value)}/></td>
                    <td><p style={{display:EmailValid, color:"red"}}>Email is not valid{EmailValid}</p></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type='password' value={Pass} placeholder='Enter Password'onChange={(e) => updPass(e.target.value)}/></td>
                    <td><p style={{display:PassValid, color:"red"}}>Password is not valid {PassValid} <br/>( min length: 8, 1 Lowercase, 1 Uppercase, 1 Numbers, 1 Symbols required){NameValid}</p></td>
                </tr>
            </table>
            <button className="Userbtn">SUBMIT</button>
        </form>
        <SubmitData NameValid={NameValid} EmailValid={EmailValid} PassValid={PassValid} allOK={allOK} Name={Name} Email={Email} Gender={Gender} Pass={Pass}></SubmitData>
        </div>
    );
}

export default AddUser;