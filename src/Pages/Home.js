import React, { Component } from "react";
import Hero from "../components/Home-components/Hero";
import Article from "../components/Home-components/Article";
import Banner from "../components/Home-components/Banner";
import Feature from "../components/Home-components/Feature";
import Navbar from "../components/navbar";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Article />
        <Banner />
        <Feature />
      </React.Fragment>
    );
  }
}
export default Home;
