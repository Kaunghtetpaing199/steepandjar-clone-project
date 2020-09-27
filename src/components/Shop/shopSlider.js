import React, { Component } from "react";
import { TeaContext } from "../../Context";
class ShopSlider extends Component {
  static contextType = TeaContext;
  render() {
    let fields = this.props.fields;
    let { getCart, handleArtists } = this.context;
    return (
      <React.Fragment>
        <div className="refil_item refil_item1">
          <img
            src={fields.img}
            alt="tea1_circle"
            className="circle_img"
            id={fields.id}
            onClick={handleArtists}
          />
          <div className=" global_letter_box">
            <p>{fields.type}</p>
            <h3>{fields.name} </h3>
            <button
              className="btn btn_black"
              onClick={() => getCart(fields.id)}>
              add to cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ShopSlider;
