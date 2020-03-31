import React from 'react';
import shortid from 'shortid';
import '../assets/styles/TodoForm.css';
export default class TodoForm extends React.Component {

  state = {
    text: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex">
        <input name="text" className="form-control" placeholder="Add todo..." onChange={this.handleChange} value={this.state.text} />
        <button className="btn ml-2 rounded-circle addBtn text-light"> + </button>
      </form>
    );


  }

}