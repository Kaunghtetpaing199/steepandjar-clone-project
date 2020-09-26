import React, { Component } from "react";
import { ImCross } from "react-icons/im";
import { TeaContext } from "../Context";
class AlertBox extends Component {
  static contextType = TeaContext;
  render() {
    let { inCart, closeAlert } = this.context;
    return (
      <React.Fragment>
        <div
          className={
            inCart ? "alertBox_container alert_open" : "alertBox_container"
          }>
          <div className="alert_box">
            <i>
              <ImCross />
            </i>
            <h3>This item is allready exits in the cart.</h3>
            <p>Please check up!</p>
            <button onClick={closeAlert} className="btn btn_aqua_black">
              OK
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlertBox;
