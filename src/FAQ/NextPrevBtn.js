import React, { Component } from "react";


class NextPrevBtn extends Component {
  constructor(props) {
    super();
    this.state = {
      page: 0,
    };
  }
  nextPageVal() {
    this.setState(
      {
        page: this.state.page + 4,
      },
      () => {
       // console.log(this.state.page);
      }
    );
    // console.log(this.state.page);
  }
  prevPageVal() {
    this.setState(
      {
        page: this.state.page - 4,
      },
      () => {
        // console.log(this.state.page);
      }
    );
    //console.log(this.state.page);
  }
 
  render() {
    return (
      <div>
        <input
          type="button"
          value="Next Page"
          onClick={() => this.nextPageVal()}
        />
        <input
          type="button"
          value="Prev Page"
          onClick={() => this.prevPageVal()}
        />
        <h3 id='pageValue'>{this.state.page}</h3>
      </div>
    );
  }
}

export default NextPrevBtn;
