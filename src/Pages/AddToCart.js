import React, { Component } from "react";
import Navbar from "../components/navbar";
import { TeaContext } from "../Context";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
class AddToCart extends Component {
  static contextType = TeaContext;
  render() {
    let {
      addTocart,
      count,
      handleIncrement,
      handleDecrement,
      handleDelete
    } = this.context;

    return (
      <React.Fragment>
        <Navbar scrollStart={-1} />
        <div className="addtocart_container">
          <div className="addCart_header">
            <h3>My Cart</h3>
          </div>
          <div className="cart_container">
            {addTocart.map((item, index) => (
              <div className="cart_child" key={index}>
                <div className="addCard_box">
                  <img src={item.img} alt="cart_img" className="circle_img" />
                  <div className="order_box2 order_box">
                    <h1>{item.name}</h1>
                    <h3>
                      price <span>${item.price}</span>{" "}
                    </h3>
                    <div className="cart_btns">
                      <i className="icons_btn" onClick={handleIncrement}>
                        <BsFillCaretUpFill />
                      </i>
                      <span>{item.count}</span>
                      <i className="icons_btn" onClick={handleDecrement}>
                        <BsFillCaretDownFill />
                      </i>
                    </div>
                  </div>
                </div>
                <div className="delete_icon">
                  <i onClick={() => handleDelete(item.id)}>
                    <ImCross />
                  </i>
                </div>
              </div>
            ))}
          </div>
          <div className="prceed_container">
            <h1>Order Total</h1>
            <h3>
              Total <span>$53.11</span>
            </h3>
            <p>
              Note: Shipping and taxes are estimated and will be updated during
              checkout based on your billing and shipping information.
            </p>
            <div>
              <Link to="/shop" className="btn btn_aqua_white">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddToCart;
