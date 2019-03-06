import React, { Component } from 'react';

class Display extends Component {
  render() {
    const string = this.props.data.join('')
    return <div className="viewer"> {string} </div>
  }
}

export default Display;