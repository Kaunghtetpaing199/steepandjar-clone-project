import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="banner1">
            <div className="banner1_letter">
              <h3>Steep & Jar Promo</h3>
              <p>
                Get a set of five 3″x 5″ blank cards designed by Robert John
                Paterson for FREE when you spend $75 or more! All you have to do
                is add the blank cards to your cart and copy the code below in
                the checkout section.
              </p>
              <Link to="/shop" className="btn btn_aqua_black">
                expore out teams
              </Link>
            </div>
          </div>
          <div className="banner2">
            <div className="banner2_letter global_letter_box">
              <p>Organic loose leaf tea</p>
              <h3>Need a refill?</h3>
              <Link to="/shop" className="btn btn_aqua">
                Order now
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
