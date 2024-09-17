import React, { useState } from 'react';
import validator from 'validator';
function ValidatedForm(props) {

    const [nameVal,updName] = useState('')
    const [passVal,updPassVal] = useState('')
    const [emailVal,updEmailVal] = useState('') 

    function FormSubmitted(e) {
        e.preventDefault();
        const nameValid = validator.isEmpty(nameVal);
        const passValid = validator.isStrongPassword(passVal);
        const emailValid = validator.isEmail(emailVal);
        console.log("nameValid "+ nameValid + " passValid " + passValid + " emailValid "+ emailValid);
        alert("Name provided is " + nameVal + "\nPassword provided is " + passVal+ "\nEmail provided is " + emailVal)
        
    }
    return (
        <div style={{marginLeft:"20px"}}> 
            <h1> Validated Form</h1>
            <form onSubmit={FormSubmitted}>
                <input type='text' placeholder='Enter Name' value={nameVal} onChange={(e) => updName(e.target.value)}/> <br/>
                <input type='password' placeholder='Enter Password' value={passVal} onChange={(e) => updPassVal(e.target.value)}/> <br/>
                <input type='text' placeholder='Enter Email' value={emailVal} onChange={(e) => updEmailVal(e.target.value)}/> <br/>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default ValidatedForm;