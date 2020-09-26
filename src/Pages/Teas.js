import React, { Component } from "react";
import { TeaContext } from "../Context";
import Loading from "../components/Loading";
import Navbar from "../components/navbar";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
class Teas extends Component {
  state = {
    slug: this.props.match.params.slug
  };
  static contextType = TeaContext;
  render() {
    let {
      getTea,
      getCart,
      count,
      handleIncrement,
      handleDecrement,
      handleDelete
    } = this.context;
    let tea = getTea(this.state.slug);
    if (!tea) {
      return <Loading />;
    }
    let {
      id,
      name,
      type,
      orderImg,
      orderBgImg,
      price,
      ingredientList,
      requirementList,
      description
    } = tea;
    price = count * price;
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} />
        <div
          className="shop_bg"
          style={{ backgroundImage: `url(${orderBgImg})` }}></div>
        <div className="order_container">
          <div className="order_item1 order_item">
            <div className="order_item1_data">
              <div className="order_item1_letter">
                <h4>{type}</h4>
                <h3>{name}</h3>
                <div className="order_btn_box">
                  <div className="order_box1 order_box">
                    <h3>jar size</h3>
                    <div className="order_btns">
                      <button className="small_btn">
                        <span>small</span>
                        <span className="order_btn_hover">big</span>
                      </button>
                    </div>
                  </div>
                  <div className="order_box2 order_box">
                    <h3>Quantity</h3>
                    <div className="cart_btns">
                      <i className="icons_btn" onClick={handleIncrement}>
                        <BsFillCaretUpFill />
                      </i>
                      <span>{count}</span>
                      <i className="icons_btn" onClick={handleDecrement}>
                        <BsFillCaretDownFill />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order_addtocart">
              <div className="price_box">
                <h3>subtotal</h3>
                <p>${price}</p>
              </div>
              <button className="btn btn_black" onClick={() => getCart(id)}>
                add to cart
              </button>
            </div>
          </div>
          <div className="order_description order_item">
            <div className="description_letter">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <ul className="ingredient">
              {ingredientList.map((item, index) => (
                <li key={index}>{item.list}</li>
              ))}
            </ul>
            <ul className="requirements">
              {requirementList.map((item) => (
                <li key={item.detail}>
                  <img
                    src={item.img}
                    alt={item.detail}
                    className="requirement_icon"
                  />
                  <div>{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order_item order_img_box">
            <img src={orderImg} alt="black-tea" className="order_img" />
            <img src="/Images/cercle.svg" className="cercle" alt="cercle" />
            <div className="order_btn">
              <Link to="/artists" className="btn btn_black">
                about the artists
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Teas;
