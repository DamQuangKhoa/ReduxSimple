
import React from "react";
import { connect } from "react-redux";
import  Cart  from "../components/cart";
import  CartItem  from "../components/cart_item";
import  CartResult  from "../components/cart_result";
import PropTypes from 'prop-types';
class CartsContainer extends React.Component {
  /* jshint expr: true */
  constructor(props) {
    super(props);
    this.state = {};
  }
showTotal = (carts) =>{
  var result = 0;
  if (carts.length >0) {
    result = <CartResult carts ={carts} />
  }
  return result;
}  
showProduct = (carts) =>{
    var result = null;
    result = carts.map((p, i) => {
        return <CartItem key = {i} cart = {p} />
    })
    return result;
};
  render() {
    var { carts } = this.props;
    return (
      <Cart>
        {this.showProduct(carts)}
        {this.showTotal(carts)}
      </Cart>
    );
  }
}

const mapStateToProps = state => {
  return {
    carts: state.carts
  };
};
CartsContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,

    })
  ).isRequired
}
export default connect(
  mapStateToProps,
  null
)(CartsContainer);
