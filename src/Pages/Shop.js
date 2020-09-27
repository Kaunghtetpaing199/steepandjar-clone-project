import React, { Component } from "react";
import Navbar from "../components/navbar";
import { TeaContext } from "../Context";
import Shopping from "../components/Shop/Shopping";
import Loading from "../components/Loading";
import ShopSlider from "../components/Shop/shopSlider";
import Gif from "../components/Shop/gif";
import Art from "../components/Art";
class Shop extends Component {
  static contextType = TeaContext;
  render() {
    let { loading, teas } = this.context;
    let teaShop = teas.filter((item) => item.fields.type);
    let gif = teas.filter((item) => item.fields.gif);
    let shopTeas = teaShop.map((item, index) => (
      <Shopping key={index} fields={item.fields} />
    ));
    let circleTeas = teaShop.map((item, index) => (
      <ShopSlider key={index} fields={item.fields} />
    ));
    let gifItem = gif.map((item, index) => (
      <Gif key={index} fields={item.fields} />
    ));
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} scrollEnd={3000} />
        <div className="shop_header">
          <h3>Our Organic Teas</h3>
        </div>
        {loading ? <Loading /> : shopTeas}
        <div className="refil_container">
          <div className="shopping_global_title">
            <h3>Need a refill?</h3>
            <p>
              Running low but already have a jar? No problem, order 100g of your
              favourite blends and continue sipping.
            </p>
            <h4>Price</h4>
            <span>$17.00</span>
          </div>
          <div className="refil_shop">{loading ? <Loading /> : circleTeas}</div>
        </div>

        <div className="git">
          <div className="git_title">
            <h3>Gifts & Accessories</h3>
          </div>
          <div className="git_container">{loading ? <Loading /> : gifItem}</div>
        </div>

        <div className="shopping_global_title print_title">
          <h3>Limited Edition Prints</h3>
          <p>
            Want more from artist, Robert John Paterson? Order a limited edition
            6″ x 20″ print or collect all 5!
          </p>
          <span className="button">$8.00</span>
        </div>
        <Art />
      </React.Fragment>
    );
  }
}
export default Shop;
