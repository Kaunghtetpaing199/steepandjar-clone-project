import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniNav from "../mini_nav";

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <MiniNav />{" "}
          <div className="logo_white_letter">
            <img
              src="/Images/logo-white.png"
              alt="logo-white"
              className="logo_white"
            />
            <h3>Tea infused with art.</h3>
            <p>
              Each season, you can support a new local artist and <br /> help us
              provide art supplies for those in need.
            </p>
            <p>Season Extended!</p>
            <Link className="btn btn_black" to="/shop">
              expore our Teas
            </Link>
            <img src="/Images/heart-white.png" />
            <p>
              This season we will provide art supplies to SOS <br /> Children's
              Village, British Columbia
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
