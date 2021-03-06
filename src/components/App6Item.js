import React from "react";

class Ap6Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? 'line-through' : 'none'

    return (
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    )
  }
}

export default Ap6Item