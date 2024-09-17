import React, { useState } from "react";
import NavBar from "../AllPages/NavBar";
//import { useSelector } from "react-redux";
import {userList} from "./userData"
import NewEntry from "./NewEntry";

const CrudApp = () => {

    const [addEntryblock,updateAddEntryblock] = useState(false);

   const userData = {userList}
   const userDataList = userData.userList.map((Data) => (<tr key={Data.id}><td>{Data.id}</td><td>{Data.name}</td><td>{Data.email}</td></tr>))


   function addEntry(){
    console.log("I am clicked");
    updateAddEntryblock(true)
    console.log("CRUD "+ addEntryblock);
   }

   function entryblock(name,email){
    console.log(userData)
    const lastRow = userData.userList
    const idVal = lastRow[lastRow.length-1].id +1
    const nameVal = name
    const emailVal =email
    console.log(idVal,nameVal,emailVal)

    userList.push({
        
        name: nameVal,
        email: emailVal,
        id: idVal
    })

   }
return(
<div>
    <NavBar pageVal="Counter"></NavBar>
    <div className = 'container'> 
        <h2>Crud App with JSON</h2> 
        <button onClick={addEntry}> CREATE ENTRY</button> 
        <br/>
            <NewEntry addEntryblock={addEntryblock} entryblock={entryblock}></NewEntry>
        <br/>
        <table className="table" border={"solid"} > 
            <thead width={"10px"} height ={"30 px"}> 
                <tr>
                    <th>ID</th> 
                    <th>Name</th> 
                    <th>Email</th> 
                    <th>Action</th>
                </tr>
            </thead>
            <tbody width={"10px"} height ={"30 px"}>
                {userDataList}
            </tbody>
        </table>
    </div>
</div>
);
}

export default CrudApp;