import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Artists from "./Pages/Artists";
import Charity from "./Pages/Charity";
import FAQ from "./Pages/FAQ";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/charity" component={Charity} />
        <Route exact path="/faq" component={FAQ} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
export default App;
