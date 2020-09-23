import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import MiniNav from "../components/mini_nav";
import Hero from "../components/Home-components/Hero";
import Article from "../components/Home-components/Article";
import Banner from "../components/Home-components/Banner";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Article />
        <Banner />
      </React.Fragment>
    );
  }
}
export default Home;
