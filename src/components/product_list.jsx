import React from "react";
import Product from "./product";
class ProductList extends React.Component {
    /* jshint expr: true */
  constructor(props) {
    super(props);
    this.state = {};
  }
showProduct = (products) =>{
    var result = null;
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
export default ProductList;
