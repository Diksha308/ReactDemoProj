import React from 'react';

function UserData(props) {
    return (
        <>
        <h1>User details for ID {props.id} </h1>
        <div className='GetUser'>
        <table border={"0px"}>
            <tr> 
                <td>    NAME :</td>
                <td>{props.FName}{" "}{props.LName}</td> 
            </tr>
            <tr> 
                <td>    GENDER :</td>
                <td>{props.Gender}</td> 
            </tr>
            <tr> 
                <td>    EMAIL :</td>
                <td>{props.Email}</td> 
            </tr>
        </table> 
        </div>
        </>

    );
}

export default UserData;