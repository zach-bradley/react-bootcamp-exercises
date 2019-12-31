import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './Box.css'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state={ boxes: [] }
    this.addBox = this.addBox.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  addBox(box) {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
      <Box key={box.id} id={this.id} width={box.width} height={box.height} color={box.color} remove={() => this.remove(box.id)} />
      )
    })
    return (
      <div>
        <NewBoxForm addBox={this.addBox}/>
        {boxes}
      </div>
    )
  }
}

export default BoxList;