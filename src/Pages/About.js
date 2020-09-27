import React, { Component } from "react";
import Navbar from "../components/navbar";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} scrollEnd={1500} />
        <div
          className="global_bg"
          style={{ backgroundImage: `url('/Images/bg4.jpg')` }}></div>
        <div className="about_founder">
          <div className="about_letter">
            <img src="/Images/founder.jpg" alt="founder" />
            <h3>Bridget Sarpong</h3>
            <p>Founder</p>
          </div>
        </div>
        <div className="about_cup">
          <div className="about_cup_letter">
            <h3>Brewing the Perfect Cup</h3>
            <p>
              We sell organic loose leaf teas in jars beautifully designed by
              local Canadian artists. Thanks to this, we are able to give
              children in orphanages art supplies to express their creativity.
            </p>
          </div>
          <div className="about_cup_img">
            <img src="/Images/jars.png" alt="jars" className="jar" />
            <img src="/Images/cercle.svg" alt="cercle" className="circle" />
          </div>
        </div>
        <div className="about_process">
          <div className="process_bg"></div>
          <div className="process_letter">
            <h3>The Blending Process</h3>
            <p>
              The seed of Steep and Jar came about on a community volunteer
              mission to Bolivia. Founder, Bridget Sarpong, was impassioned by
              the impact of art as a creative outlet for the children she
              visited. She was inspired to build a business model that hinges on
              giving back to the local and international art community.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
