
import React, { useState } from 'react';
import NavBar from '../AllPages/NavBar';
import dice3 from './Images/Dice3.png'
import RandomDices from './RandomDices';
import "./RollDice.css"
function RollDice(props) {
    const[dice1Img,updatedice1Imag] = useState(dice3)
    const[dice2Img,updatedice2Imag] = useState(dice3)

    function rollingDice() {
        console.log("Dice1 "+ RandomDices()[0]+ "\nDice2 " + RandomDices()[1]);
        updatedice1Imag(RandomDices()[0])
        updatedice2Imag(RandomDices()[1])
    }
    return (
        <>
            <NavBar pageVal="Counter"></NavBar>
          
            <div className='DiceBox'>
            <br/>
            <br/>
            <div className='ImgBox'>
            <div className='FirstDice'>
            <img src={dice1Img} alt=''/>
            </div>
            <div className='SecondDice'>
            <img src={dice2Img} alt=''/>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='RollButtonDiv'> 
            <button className='RollButton' onClick={rollingDice}>Roll Dice</button>
            </div>
            </div>
        </>
    );
}

export default RollDice;