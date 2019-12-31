import React, { Component } from 'react';
import uuid from "uuid/v4";
import "./NewBoxForm.css";

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "",
      height: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name] : evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id:uuid()};
    this.props.addBox(newBox);
    this.setState({width: "", height: "", color: ""})
  }

  render() {
    return (
      <div>
        <h1>Make a Box:</h1>
        <form className="BoxList" onSubmit={this.handleSubmit}>
          <label htmlFor='width'>Width:</label>
          <input type='text' id='width' name='width' value={this.state.width} onChange={this.handleChange} />
          <label htmlFor='height'>Height:</label>
          <input type='text' id='height' name='height' value={this.state.height} onChange={this.handleChange}/>
          <label htmlFor='color'>Background Color:</label>
          <input type='text' id='color' name='color' value={this.state.color} onChange={this.handleChange}/>
          <button>Add New Box</button>
        </form>
      </div>

    )
  }
}

export default NewBoxForm;