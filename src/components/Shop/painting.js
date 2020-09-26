import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TeaContext } from "../../Context";

class Painting extends Component {
  static contextType = TeaContext;
  render() {
    let { handleArtists, getCart } = this.context;
    let fields = this.props.fields;
    let url = `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(${fields.img})`;
    return (
      <React.Fragment>
        <div className="print_item">
          <div
            className=" global_letter_box"
            id={fields.id}
            onClick={handleArtists}
            style={{
              backgroundImage: url
            }}>
            <p>PRODUCT</p>
            <h3>{fields.name}</h3>
            <button
              onClick={() => getCart(fields.id)}
              className="btn btn_black_white">
              add to cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Painting;
