import React, { Component } from "react";
import tea_item from "./tea_data";
let TeaContext = React.createContext();

class TeaProvider extends Component {
  state = {
    teas: [],
    lightBox: [],
    loading: true,
    close: false,
    inCart: false,
    count: 1,
    addTocart: []
  };
  componentDidMount() {
    let teas = tea_item;
    this.setState({ teas, loading: false });
  }
  handleClose = () => {
    this.setState({ close: !this.state.close });
  };
  handleArtists = (e) => {
    let id = parseInt(e.target.id);
    let lightBox = this.state.teas.filter((item) => item.fields.id === id);
    this.setState({ lightBox, close: !this.state.close });
  };
  getTea = (slug) => {
    let teas = [...this.state.teas];
    teas = teas.map((item) => item.fields);
    let tea = teas.find((item) => item.slug === slug);
    return tea;
  };
  getCart = (id) => {
    let teas = [...this.state.teas]
      .map((item) => item.fields)
      .find((item) => item.id === id);
    let isCart = this.state.addTocart.find((item) => item.id === teas.id);
    if (isCart) {
      this.setState({ inCart: true });
      return null;
    }
    this.setState({ addTocart: [...this.state.addTocart, teas] });
  };
  handleDelete = (id) => {
    let addTo = (this.state.addTocart || []).filter((item) => item.id !== id);
    this.setState({ addTocart: addTo });
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    let count = this.state.count > 1 ? this.state.count - 1 : 1;
    this.setState({ count });
  };
  closeAlert = (e) => {
    this.setState({ inCart: false });
  };
  render() {
    return (
      <React.Fragment>
        <TeaContext.Provider
          value={{
            ...this.state,
            handleClose: this.handleClose,
            handleArtists: this.handleArtists,
            getTea: this.getTea,
            handleIncrement: this.handleIncrement,
            handleDecrement: this.handleDecrement,
            handleDelete: this.handleDelete,
            getCart: this.getCart,
            closeAlert: this.closeAlert
          }}>
          {this.props.children}
        </TeaContext.Provider>
      </React.Fragment>
    );
  }
}
let TeaConsumer = TeaContext.Consumer;
export { TeaConsumer, TeaProvider, TeaContext };
