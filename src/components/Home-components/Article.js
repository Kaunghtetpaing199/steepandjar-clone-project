import React, { Component } from "react";
import { Link } from "react-router-dom";

class Article extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="article_container">
          <div className="article_box1">
            <div className="article_letter">
              <p>
                Each tea purchase comes with organically and ethically grown
                loose leaf tea, carefully blended to create the perfect cup.
                <br />
              </p>
              <p>
                Choose from our large jar, which makes approximately 80 cups, or
                our small jar, which makes approximately 30 cups. Each tea blend
                comes with its own jar designed with unique art.
              </p>
              <Link to="/about" className="btn btn_black">
                Learn more
              </Link>
            </div>
            <img src="/Images/jars.png" alt="jar" className="jars" />
          </div>
          <div className="article_box2">
            <h3>Our Organic Teas</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Article;
