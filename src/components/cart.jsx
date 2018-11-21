import React from "react";
import CartResult from "./cart_result"
import CartItem from "./cart_item"
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
showProduct = (carts) =>{
    var result = null;
    result = carts.map((p, i) => {
        return <CartItem key = {i} cart = {p} />
    })
    return result;
};
  render() {
      var {carts} = this.props;
    return (
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th />
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                  {this.showProduct(carts)}
             <CartResult />                
              </tbody>
            </table>
          </div>
        </section>
    );
  }
}

export default Cart;
