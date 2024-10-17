import React from 'react';
import GetUsers from './ViewData/GetUsers';
import GetUserId from './ViewData/GetUserId';
import AddUsers from './AddData/AddUser'
import UpdateUsers from './UpdateUsers'
import DeleteUsers from './DeleteUsers'

function DisplayCrud(props) {
    if (props.page==="Get User") {
        return (
           <GetUsers></GetUsers>
        );
    }
    else if (props.page==="Search User") {
        return (
           <GetUserId></GetUserId>
        );
    }
    else if (props.page==="Add User") {
        return (
           <AddUsers></AddUsers>
        );
    }
    else if (props.page==="Update User") {
        return (
           <UpdateUsers></UpdateUsers>
        );
    }
    else if (props.page==="Delete User") {
        return (
           <DeleteUsers></DeleteUsers>
        );
    }
    else
    <></>
}

export default DisplayCrud;