import React from "react";
import { connect } from "react-redux";
import  ProductList  from "../components/product_list";
import PropTypes from 'prop-types';
class ProductContainer extends React.Component {
  /* jshint expr: true */
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { products } = this.props;
    return (
     <ProductList products={products}  /> 
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
ProductContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,

    })
  ).isRequired
}
export default connect(
  mapStateToProps,
  null
)(ProductContainer);
