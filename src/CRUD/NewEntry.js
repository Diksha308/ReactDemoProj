import React, { useState } from 'react';

function NewEntry(props) {

    const[name,updateName] = useState();
    const[email,updateEmail] = useState();

    function ValueSubmitted(e){
        e.preventDefault();
        console.log("Name is " + name + " Email id : " + email + props.addEntryblock);
        props.entryblock(name,email)
        
    }

    function NameFun(e){
        updateName(e.target.value)
    }
    
    function EmailFun(e){
        updateEmail(e.target.value)
    }
    if(props.addEntryblock){
    return (
        <div>
        <br/>
        <form onSubmit={ValueSubmitted}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>Name: </label>
                    </td>
                    <td>
                        <input type="text" placeholder="Enter your Name" value={name} onChange={NameFun}/>  
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Email ID: </label>
                    </td>
                    <td>
                        <input type="text" placeholder="Enter your Email address" value={email} onChange={EmailFun}/> 
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='submit'/>
                    </td>
                </tr>
                </tbody>
            </table>
            </form>
        </div>
    );
}
else {
    <></>
}
}

export default NewEntry;