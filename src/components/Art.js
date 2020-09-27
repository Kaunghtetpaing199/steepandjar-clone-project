import React, { Component } from "react";
import { TeaContext } from "../Context";
import Painting from "./Shop/painting";
import Loading from "./Loading";
class Art extends Component {
  static contextType = TeaContext;
  render() {
    let { loading, teas } = this.context;
    let artShop = teas.filter((item) => item.fields.species);
    let artist = artShop.map((item, index) => (
      <Painting key={index} fields={item.fields} />
    ));
    return (
      <React.Fragment>
        <div className="artist_prints">
          <div className="print_container">
            {loading ? <Loading /> : artist}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Art;
