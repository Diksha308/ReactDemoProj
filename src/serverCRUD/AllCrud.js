import React, { useState } from 'react';
import NavBar from '../AllPages/NavBar';
import DisplayCrud from './DisplayCrud';
import "./Crud.css"


function AllCrud(props) {

    const [BtnVal,updBtn] = useState("");

    function displayData(e){
        updBtn(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <NavBar pageVal="serverCrud"></NavBar>
             <input
                type="button"
                value="Get User"
                className="Userbtn"
                onClick={(e) => displayData(e)}
              />
              <input
                type="button"
                value="Search User"
                className="Userbtn"
                onClick={(e) => displayData(e)}
              />
               <input
                type="button"
                value="Add User"
                className="Userbtn"
                onClick={(e) => displayData(e)}
              />
              
              {/* <input
                type="button"
                value="Update User"
                className="Userbtn"
                onClick={(e) => displayData(e)}
              />
               <input
                type="button"
                value="Delete User"
                className="Userbtn"
                onClick={(e) => displayData(e)}
              />  */}
              <div>
               <DisplayCrud page={BtnVal}></DisplayCrud>
                   
              </div>
        </div>
    );
}

export default AllCrud;