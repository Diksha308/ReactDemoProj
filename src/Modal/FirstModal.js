import React from 'react';
import '../StylePages/All_RJS_Projects.css'
import { useState } from 'react';

function FirstModal(props) {

    const [userName,userNameFunc] = useState('');
    function UserName(e){
       
        e.preventDefault();
        console.log(userName);
    }
   function updateUsername(e){
    userNameFunc(e.target.value)
    }

    return (
        <div className='portal'>
            <form onSubmit={UserName}>
          <label className='UserName'> UserName </label>
          <br></br>
          <input className='UserName' type='text' placeholder='Enter your Name' value={userName} onChange={updateUsername}/>
          <br></br>
          <input className='UserNameSubmit' type='submit' value='Submit'/>
          </form>
        </div>
    );
}

export default FirstModal;