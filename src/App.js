import React, { useContext } from "react";
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
import Teas from "./Pages/Teas";
import { TeaContext } from "./Context";
import Footer from "./components/Footer";
import AddToCart from "./Pages/AddToCart";
import AlertBox from "./components/AlertBox";
import LightBox from "./components/LightBox";
import Loading from "./components/Loading";
function App() {
  let { loading, lightBox } = useContext(TeaContext);
  let Box =
    lightBox !== []
      ? lightBox.map((item, index) => (
          <LightBox key={index} fields={item.fields} />
        ))
      : null;
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/charity" component={Charity} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/shop/:slug" component={Teas} />
        <Route exact path="/addtocart" component={AddToCart} />
        <Route component={Error} />
      </Switch>
      {loading ? <Loading /> : Box}
      <AlertBox />
      <Footer />
    </React.Fragment>
  );
}
export default App;
