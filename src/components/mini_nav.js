import React, { Component } from "react";
class Nav extends Component {
  state = {
    isScolled: false
  };
  scolling = () => {
    let isTop = window.scrollY < 580;
    isTop !== true
      ? this.setState({ isScolled: true })
      : this.setState({ isScolled: false });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scolling);
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.state.isScolled ? "Header_name scrolledNone" : "Header_name"
          }>
          <img src="/Images/logo.png" alt="logo" />
          <p>Free Shipping In Canada Over $50 </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
