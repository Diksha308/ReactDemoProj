import React, { Component } from "react";
import NavBar from "../AllPages/NavBar";
import ImagesList from "./ImagesList";
import "./Carousel.css";

class Carousel extends Component {
  constructor() {
    super();
    var Images = ImagesList("First");
    this.state = {
      ImageFinalVal: Images,
    };
  }

  Img(value) {
    this.setState({ ImageFinalVal: ImagesList(value) }, () => {
    });
  }

  render() {
    return (
      <div>
        <NavBar pageVal="Carousel" />
        <div className="carouselBox">
          <div className="crouselDiv">
            <img src={this.state.ImageFinalVal} id="imgDisp" alt="" />
          </div>
          <div className="crouselArrowDiv">
            <div>
              <input
                type="button"
                value="<"
                className="crouselArrow"
                onClick={() => this.Img("false")}
              />
              <input
                type="button"
                value="RESET"
                className="crouselReset"
                onClick={() => this.Img("reset")}
              />
              <input
                type="button"
                value=">"
                className="crouselArrow"
                onClick={() => this.Img("true")}
              />
            </div>
          </div>
          <div className="crouselResetDiv"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
