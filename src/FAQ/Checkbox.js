import React, { Component } from "react";
import MoreImg from "./Images/More.jpeg";
import Content from "./Content";
import "./FAQ.css";

class Checkbox extends Component {
  constructor(props) {
    super(); 
  }
  moreData = () => {
    console.log("I am clicked bitches")
  }
  render() {
    return (
      <div className="CheckboxDiv">
        <ul>
          <li>{Content[this.props.id].data}</li>
          <li style={{ float: "right" }}>
            <img src={MoreImg} alt="" onClick={this.moreData}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Checkbox;
