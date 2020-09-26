import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TeaContext } from "../Context";
class LightBox extends Component {
  static contextType = TeaContext;
  render() {
    let { handleClose, close, getCart } = this.context;
    let fields = this.props.fields;
    let img = fields.id > 5 ? fields.img : fields.bgImg;
    let url = `url(${img})`;
    return (
      <React.Fragment>
        <div
          className={close ? "lightBox_container close" : "lightBox_container"}>
          <div className="lightBox">
            <div
              className="box_bg"
              style={{
                backgroundImage: url
              }}></div>
            <ul>
              <li>{fields.name}</li>
              <li>
                <button
                  onClick={() => getCart(fields.id)}
                  className="btn btn_black">
                  add to cart
                </button>
                <button className="btn btn_aqua" onClick={handleClose}>
                  close
                </button>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LightBox;
