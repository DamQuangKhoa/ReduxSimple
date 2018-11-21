import React from "react";
import Product from "./product";
import Message from "./message";
import Cart from "./cart";
import { connect } from "react-redux";  
class Products extends React.Component {
    /* jshint expr: true */
  constructor(props) {
    super(props);
    this.state = {};
  }
showProduct = (products) =>{
    var result = null;
        console.log('abc')
    result = products.map((p, i) => {
        return <Product key = {i} product = {p} />
    })
    return result;
};
  render() {
    var { products } = this.props;
    return (
           <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
           {this.showProduct(products)} 
            </div>
        </section>
          
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(Products);
