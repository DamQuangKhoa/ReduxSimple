import React from "react";
import CartResult from "./cart_result"
import CartItem from "./cart_item"
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
              <CartItem />
             <CartResult />                
              </tbody>
            </table>
          </div>
        </section>
    );
  }
}

export default Cart;
