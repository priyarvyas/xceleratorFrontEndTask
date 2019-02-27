
import React, { Component } from 'react';

class Button extends Component {

  render() {
    const prefix = this.props.faSolid ? `fas` : `far`;
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        <i className={`${prefix} ${this.props.faIcon}`}></i> {this.props.title}
      </button>
    )
  }
}

export default Button