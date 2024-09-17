import React from "react";
import { Link } from "react-router-dom";
import "../StylePages/All_RJS_Projects.css";

const navBar = (props) => {
  var LinkVal= "/"+ props.pageVal;
  return (
    <div className="headerPart">
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">
              <input type="button" value="React Projects" className="navBTN" />
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to={LinkVal}>
              <input type="button" value={props.pageVal}  className='active-page' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
