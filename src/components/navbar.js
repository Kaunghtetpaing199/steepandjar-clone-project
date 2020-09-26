import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { TeaContext } from "../Context";

class Navbar extends Component {
  state = {
    isToggle: false,
    scrolled: false
  };
  static contextType = TeaContext;
  handleToggle = () => {
    this.setState({ isToggle: !this.state.isToggle });
  };

  scolling = () => {
    if (
      window.scrollY > this.props.scrollStart &&
      window.scrollY < this.props.scrollEnd
    ) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scolling);
  }
  render() {
    let { addTocart } = this.context;
    return (
      <React.Fragment>
        <div
          className={
            this.state.scrolled ? "container show_container " : "container"
          }>
          <div
            className={this.state.isToggle ? "navbar show_navbar" : "navbar"}>
            <nav className="nav">
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
                <li
                  className={
                    this.state.isToggle
                      ? "bamburger_menu toggle"
                      : "bamburger_menu"
                  }
                  onClick={this.handleToggle}>
                  <span></span>
                  {this.state.isToggle ? "Close" : "Menu"}
                </li>
                <Link to="/addtocart">
                  <li className="cart_box">
                    <span> CART</span>{" "}
                    <span className="cart_number">{addTocart.length}</span>
                  </li>
                </Link>
              </ul>
            </nav>
            <div
              className={
                this.state.isToggle ? "nav_grid transform" : "nav_grid"
              }>
              <div className="nav1 navigation">
                <div className="nav_child">
                  <ul>
                    <li className="main_nav">
                      <Link to="/shop" className="link_nav">
                        shop
                      </Link>
                    </li>
                    <li className="hide">
                      <Link to="/shop" className="link_nav">
                        tea
                      </Link>
                    </li>
                    <li className="hide">
                      <Link to="/shop" className="link_nav">
                        refil
                      </Link>
                    </li>
                    <li className="hide">
                      <Link to="/shop" className="link_nav">
                        gif & <br /> Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav2 navigation">
                <div className="nav_child right">
                  <ul>
                    <li className="main_nav">
                      <Link to="/artists" className="link_nav">
                        artists
                      </Link>
                    </li>
                    <li className="hide main_nav">
                      <Link to="/about" className="link_nav">
                        about
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav2 navigation nav_hide">
                <div className="nav_child">
                  <ul>
                    <li>
                      <Link to="/about">about</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav3 navigation">
                <div className="nav_child right">
                  <ul>
                    <li className="main_nav">
                      <Link to="/charity" className="link_nav">
                        charity
                      </Link>
                    </li>
                    <li className="hide main_nav">
                      <Link to="/faq" className="link_nav">
                        faq
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav3 navigation nav_hide">
                <div className="nav_child">
                  <ul className="bordernone">
                    <li>
                      <Link to="/faq" className="link_nav">
                        faq
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav4 navigation">
                <div className="nav_child right">
                  <ul className="bordernone">
                    <li className="hide icons">
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
                    <li className="main_nav">
                      <Link to="/contact" className="link_nav">
                        contact
                      </Link>
                    </li>
                    <li className="hide main_nav">
                      <Link to="/contact" className="link_nav">
                        Press
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Navbar.defaultProps = {
  scrollStart: 550,
  scrollEnd: 1700
};

export default Navbar;
