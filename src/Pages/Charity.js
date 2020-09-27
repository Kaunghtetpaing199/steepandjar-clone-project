import React, { Component } from "react";
import Navbar from "../components/navbar";

class Charity extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} />{" "}
        <div
          className="global_bg"
          style={{ backgroundImage: `url('/Images/child.jpg')` }}></div>
        <div className="child_container">
          <div className="child_info">
            <img src="/Images/SOS_BC.svg" alt="sos" />
            <a href="www.sosbc.org" className="btn btn_black">
              WEBSITE
            </a>
          </div>
          <div className="child_bio">
            <h3>SOS Children’s Village</h3>
            <p>
              SOS Children’s Village is the world’s largest privately funded
              non-governmental, non-denominational organization caring for
              fostered and abandoned children. It has existed for over 65 years
              with a presence in 134 countries and over 560 Villages. BC is home
              to the only SOS Children’s Village in Canada.
            </p>
            <p>
              SOS Children’s Village BC provides a community-based family care
              service to improve and sustain the quality of life for foster
              children and foster families. Foster children are frequently at
              risk of emotional disturbances, delayed social development and
              poor educational performance. Foster parents who raise these
              children require ongoing special resources and support. SOS BC
              enhances the development and healing of foster children by
              addressing their physical, social, emotional and spiritual needs.
              We actively create opportunities, programs and services for
              children to become balanced, responsible, contributing members of
              society. We seek long term stability for the foster children and
              families in our village including a strong focus on transition to
              adulthood and family reunification programming.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Charity;
