import React, { Component } from "react";
import Navbar from "../components/navbar";

class Shop extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar scrollStart={0} />
        <h1>Welcome from Shop Page</h1>
      </React.Fragment>
    );
  }
}

export default Shop;
