import React, { Component } from "react";
import { Link } from "react-router-dom";
class Shopping extends Component {
  render() {
    let fields = this.props.fields;
    return (
      <React.Fragment>
        <div className="shopping_cards">
          <div
            className={fields.id % 2 === 0 ? "card1 card odd" : "card1 card"}>
            <div className="card_child1 card1_child1">
              <div className=" global_letter_box">
                <p>{fields.type}</p>
                <h3>{fields.name}</h3>
                <Link to={`/shop/${fields.slug}`} className="btn btn_black">
                  buy now
                </Link>
              </div>
            </div>
            <div
              className="card_child2 card1_child2"
              style={{ backgroundImage: `url(${fields.bgImg})` }}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shopping;
