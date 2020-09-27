import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
class Error extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} scrollEnd={2000} />
        <Link to="/">
          <div className="error"></div>
        </Link>
      </React.Fragment>
    );
  }
}
export default Error;
