import { Outlet, Link } from "react-router-dom";
import React from "react";
import reactPic from "../Images/reactgif.gif";
import "../StylePages/All_RJS_Projects.css";


//import NoPage from "./NoPage";

const allPages = () => {
  return (
    <>
    
      <div>
        <div className="headerPart">
          <p className="heading">
            React JS Projects
            <img src={reactPic} alt="" srcset="" />
          </p>
        </div>
        <div className="aa">
          <ul>
          <li>
              <Link to="/serverCRUD">
                <input type="button" value="Server CRUD" className="projectsBTN" />
              </Link>
            </li> 
            <li>
              <Link to="/ValidatorApp">
                <input type="button" value="Validator" className="projectsBTN" />
              </Link>
            </li> 
            <li>
              <Link to="/CrudApp">
                <input type="button" value="CRUD" className="projectsBTN" />
              </Link>
            </li> 
          <li>
              <Link to="/RollDiceApp">
                <input type="button" value="Roll Dice" className="projectsBTN" />
              </Link>
            </li> 
          <li>
              <Link to="/Carousel">
                <input type="button" value="Carousel" className="projectsBTN" />
              </Link>
            </li>
            <li>
              <Link to="/FAQ">
                <input type="button" value="FAQ" className="projectsBTN" />
              </Link>
            </li>
            <li>
              <Link to="/Counter">
                <input type="button" value="Counter" className="projectsBTN" />
              </Link>
            </li>
            <li>
              <Link to="/ColorFipper">
                <input type="button" value="ColorFipper" className="projectsBTN" />
              </Link>
            </li>
            
           
          </ul>
        </div>
      </div>
      <Outlet />
    
    </>
  );
};

export default allPages;
