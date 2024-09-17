import React, { useState } from "react";
import NavBar from "../AllPages/NavBar";

const Counter = () => {

    let[count,setCount] = useState(0);
   const Increment = ()=> {
    setCount(prevCount => prevCount+1)
   }
   const Decrement = ()=> {
    setCount(prevCount => prevCount-1)
   }


return(
<div>
    <NavBar pageVal="Counter"></NavBar>
        <div>
            <h1>Hello I am counter Value {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
</div>
);
}

export default Counter;