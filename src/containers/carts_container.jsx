
import React from "react";
import { connect } from "react-redux";
import  Cart  from "../components/cart";
import PropTypes from 'prop-types';
class CartsContainer extends React.Component {
  /* jshint expr: true */
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { carts } = this.props;
    return (
     <Cart carts={carts}  /> 
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
