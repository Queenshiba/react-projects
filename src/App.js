
import React from 'react';
import './App.css';


// const reptiles = ['alligator', 'snake', 'lizard', 'test'];

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleSubmit(e) {

    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.value]
    })

    // this.setState({
    //   todos: [...this.state.todos, this.state.value]
    // },()=>{console.log('second', this.state)})

    console.log('first', this.state.value)
    this.setState({
      value: ''
    });
  }


  handleInput(e) {
    this.setState({ value: e.target.value })
  }


  render() {
    return (
      <div className="wrap">
        <h1>To Do List</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.value} onChange={this.handleInput} placeholder="Type things to do here"/>
          <input type="submit" value="Add" />
          <div className="list">
            <h2>List</h2>
            <ul>

              {this.state.todos.map(item => (
                <li >{item}</li>
              ))}
            </ul>
          </div>

        </form>

      </div>





    );

  }

}


export default ListForm;
