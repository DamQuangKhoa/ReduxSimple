import React from "react";
import CartResult from "./cart_result"
class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      var {cart} = this.props;
    return (
        <tr>
        <th scope="row">
          <img
          src= {cart.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.id}</strong>
          </h5>
        </td>
        <td>{cart.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.amount} </span>
          <div
            className="btn-group radio-group"
            data-toggle="buttons"
          >
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{cart.price * cart.amount}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
   
    );
  }
}

export default CartItem;
