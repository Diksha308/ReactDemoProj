import React from "react";
import AllPagesData from "./AllPagesCopy";
import Counter from "../Counter/Counter";

function PageRender() {

    var TabValue;
        function getData(data){
          console.log(data);
          TabValue = data;
          }
        

          switch (TabValue) {
            case Counter:
                return( <Counter dataFunction={getData}></Counter>)          
            default:
                return( <AllPagesData dataFunction={getData}></AllPagesData>)
          }
   
    
}

export default PageRender;