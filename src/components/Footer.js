import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="footer_container">
            <div className="footer_item1">
              <ul>
                <li>
                  <Link to="/">
                    <img
                      src="/Images/logo-nav.png"
                      alt="logo"
                      className="logo-img"
                    />
                  </Link>
                </li>
                <li className="icons">
                  <a href="https://instagram.com">
                    <AiFillInstagram />
                  </a>
                  <a href="https://facebook.com">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com">
                    <AiOutlineTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_item2">
              <ul>
                <li className="footer_header">
                  <span>Help</span>
                </li>
                <li>
                  <Link to="/faq">faq</Link>
                </li>
                <li>
                  <Link to="/faq">Shipping and delivery</Link>
                </li>
                <li>
                  <Link to="/faq">Item care</Link>
                </li>
                <li>
                  <Link to="/faq">Terms & conditions</Link>
                </li>
                <li>
                  <Link to="/faq">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer_item3">
              <ul>
                <li className="footer_header">
                  <span>Contact</span>
                </li>
                <li>
                  <a href="mailto:info@steepandjar.com">info@steepandjar.com</a>
                </li>
                <li className="footer_header">
                  <span>press</span>
                </li>
                <li>
                  <a href="mailto:press@steepandjar.com">
                    press@steepandjar.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="baby_footer">
            Toronto, Canada <img src="/Images/logo.png" alt="logo" /> © Steep &
            Jar, 2020
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
