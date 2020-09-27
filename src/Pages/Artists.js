import React, { Component } from "react";
import Art from "../components/Art";
import Navbar from "../components/navbar";

class Artists extends Component {
  state = {
    style: {
      backgroundImage: `url('/Images/art-1.jpg')`,
      height: 500
    }
  };
  render() {
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} scrollEnd={1500} />
        <div className="global_bg" style={this.state.style}></div>
        <div className="about_artist">
          <div className="artist_info">
            <img src="/Images/artist.jpg" alt="artist" />
            <h3>Robert John Paterson</h3>
            <button className="btn btn_black">WEBSITE</button>
          </div>
          <div className="artist_bio">
            <h3>BIO</h3>
            <p>
              Illustrator, design, print marker, proudly Canadian. The basic
              concept for this series of Illustrations is places and (more
              specifically) times to relax and reflect. That last deep breath
              before a big day, the moment you can finally get off your feet,
              those years we look back on with a smile. I wanted to create
              scenes with so many little things happening you couldn’t help but
              be slightly overwhelmed, slightly awestruck, maybe a bit nostalgic
              – but all the while comforted. I wanted to tap into that feeling
              of tired. Not exhausted, not defeated. That ‘you deserve’ it
              tired. The lean back and look at everything you’ve accomplished
              tired.{" "}
            </p>
            <p>
              I recently graduated from OCADU’s prestigious Illustration
              program, and have been working on short contracts and freelance
              projects from my studio in Kensington Market Toronto. Prints
              available online, and project ideas and collaborations are always
              welcome.
            </p>
          </div>
        </div>
        <Art />
      </React.Fragment>
    );
  }
}

export default Artists;
