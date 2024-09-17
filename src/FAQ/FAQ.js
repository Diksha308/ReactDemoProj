import React, { Component } from "react";
import NavBar from "../AllPages/NavBar";
import Checkbox from "./Checkbox";
import NextPrevBtn from "./NextPrevBtn";
import "./FAQ.css";

//var page = 0;
class FAQ extends Component {
  constructor() {
    super()
    this.state = {
      page: 0,
    }; 
    if (this.state.page !== 0){
      this.setState(
        {
          page: document.getElementById("pageValue").innerHTML,
        },
        () => {
          console.log(this.state.page);
        }
      );
    console.log(this.state.page);
  }
  else {
    this.setState(
      {
        page: 1,
      },
    );
  } 
}

 
  render() {
    return (
      <div>
        <NavBar pageVal="FAQ"></NavBar>
        <div className="FAQbox">
          <div className="FAQdivision">
            <div className="FAQheading">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="FAQContent">
              <Checkbox id={0+this.state.page}></Checkbox>
              <Checkbox id={1+this.state.page}></Checkbox>
              <Checkbox id={2+this.state.page}></Checkbox>
              <Checkbox id={3+this.state.page}></Checkbox>
              <NextPrevBtn></NextPrevBtn>

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
