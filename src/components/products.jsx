import React from "react";
import Product from "./product"
import Message from "./message"
import Cart from "./cart"
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* <!-- Products --> */}
         <Product /> 
          {/* <!-- Message --> */}
         <Message /> 
          {/* <!-- Cart --> */}
         <Cart /> 
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
