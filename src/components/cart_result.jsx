
import React from 'react';
class CartResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
<tr>
                  <td colSpan="3" />
                  <td>
                    <h4>
                      <strong>Tổng Tiền</strong>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      <strong>15$</strong>
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


</React.Fragment>
);
    }
}
 
export default CartResult
