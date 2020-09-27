import React, { Component } from "react";
import { TeaContext } from "../../Context";
class Gifs extends Component {
  static contextType = TeaContext;
  render() {
    let { getCart } = this.context;
    let fields = this.props.fields;
    let img = `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .6)), url(${fields.img})`;
    return (
      <React.Fragment>
        <div className="git_item git_item1" style={{ backgroundImage: img }}>
          <div className=" global_letter_box">
            <p>Product</p>
            <h3>{fields.name}</h3>
            <span className="button">${fields.price}.00</span>
            <article>{fields.description}</article>
            <button
              onClick={() => getCart(fields.id)}
              className="btn btn_black">
              add to cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gifs;
