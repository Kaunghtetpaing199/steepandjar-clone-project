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
    addTocart: [],
    subTotal: 0,
    tax: 0,
    total: 0
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
    this.setState(
      () => {
        return { addTocart: [...this.state.addTocart, teas] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  handleDelete = (id) => {
    let addTo = (this.state.addTocart || []).filter((item) => item.id !== id);
    this.setState(
      () => {
        return { addTocart: addTo };
      },
      () => {
        this.addTotals();
      }
    );
  };
  handleIncrement = (id) => {
    let tempCart = [...this.state.addTocart];
    let tempItem = tempCart.find((item) => item.id === id);
    let index = tempCart.indexOf(tempItem);
    let product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { addTocart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };
  handleDecrement = (id) => {
    let tempCart = [...this.state.addTocart];
    let tempItem = tempCart.find((item) => item.id === id);
    let index = tempCart.indexOf(tempItem);
    let product = tempCart[index];
    if (product.count > 1) {
      product.count = product.count - 1;
      product.total = product.price * product.count;
      this.setState(
        () => {
          return { addTocart: tempCart };
        },
        () => {
          this.addTotals();
        }
      );
    } else {
      this.handleDelete(id);
    }
  };
  closeAlert = (e) => {
    this.setState({ inCart: false });
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.addTocart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    let total = subTotal + tax;
    this.setState({ subTotal, total, tax });
  };
  cleanCart = () => {
    this.setState(
      () => {
        return { addTocart: [], subTotal: 0, tax: 0, total: 0 };
      },
      () => {
        this.addTotals();
      }
    );
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
            closeAlert: this.closeAlert,
            cleanCart: this.cleanCart
          }}>
          {this.props.children}
        </TeaContext.Provider>
      </React.Fragment>
    );
  }
}
let TeaConsumer = TeaContext.Consumer;
export { TeaConsumer, TeaProvider, TeaContext };
