import React, { Component } from 'react';

class Box extends Component {
  render() {
     return(
    <div className='Box' onClick={this.props.remove}
      style={{
        height: `${this.props.height}em`,
        width: `${this.props.width}em`,
        backgroundColor: this.props.color
      }}>
    </div>
  )}
}

export default Box;