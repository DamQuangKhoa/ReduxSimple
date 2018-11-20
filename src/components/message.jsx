import React from "react";
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h3>
          <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
        </h3>
      </React.Fragment>
    );
  }
}

export default Message;
