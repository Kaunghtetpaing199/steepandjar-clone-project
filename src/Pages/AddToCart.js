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
      handleIncrement,
      handleDecrement,
      handleDelete,
      subTotal,
      tax,
      total,
      cleanCart
    } = this.context;
    // let subtotal = addTocart.map((item) => item.price);
    // subtotal = subtotal.length === 0 ? 0 : subtotal.reduce((a, b) => a + b);
    // let txt = parseFloat(subtotal * 0.1).toFixed(2);
    // let total = subtotal + txt;
    return (
      <React.Fragment>
        <Navbar scrollStart={-1} />
        {addTocart.length === 0 ? (
          <div className="addtocart_container">
            <div className="empty_cart">
              <h3>Your cart is empty</h3>
              <Link className="btn btn_aqua_white" to="/shop">
                return to shop
              </Link>
            </div>
          </div>
        ) : (
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
                        <i
                          className="icons_btn"
                          onClick={() => handleIncrement(item.id)}>
                          <BsFillCaretUpFill />
                        </i>
                        <span>{item.count}</span>
                        <i
                          className="icons_btn"
                          onClick={() => handleDecrement(item.id)}>
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
                SUBTOTAL <span>${subTotal}</span>
              </h3>
              <h3>
                TAX <span>${tax}</span>
              </h3>
              <h3>
                TOTAL <span>${total}</span>
              </h3>
              <p>
                Note: Shipping and taxes are estimated and will be updated
                during checkout based on your billing and shipping information.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="btn btn_aqua_white"
                  onClick={cleanCart}>
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default AddToCart;
