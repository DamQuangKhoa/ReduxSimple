import React from "react";
class CartResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showTotal = (carts) =>{
      var total = 0;
      carts.forEach(c => {
          total += (c.amount*c.price);
      });
      return total;
  }
  render() {
      var {carts} = this.props;
    return (
      <tr>
        <td colSpan="3" />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotal(carts)}</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
