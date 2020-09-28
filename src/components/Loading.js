import React, { Component } from "react";

class Loading extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </React.Fragment>
    );
  }
}

export default Loading;
