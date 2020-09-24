import React, { Component } from "react";
import { Link } from "react-router-dom";
class Feature extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="artist_container">
          <div className="artist_child1">
            <div className="artist_child_letter global_letter_box">
              <p>Featured artist</p>
              <h3>Robert John Paterson</h3>
              <Link to="/shop" className="btn btn_aqua btn_flex">
                About the artist
              </Link>
            </div>
          </div>
          <div className="artist_child2"></div>
        </div>
        <div className="child_support">
          <div className="child_img">
            <img src="/Images/kids1.png" alt="child" />
          </div>
          <div className=" global_letter_box">
            <p>WHO YOU'RE HELPING</p>
            <h3>
              This season every jar sold helps to give art supplies to SOS
              Children’s Village, British Columbia
            </h3>
            <Link to="/shop" className="btn btn_black btn_flex">
              learn more
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
