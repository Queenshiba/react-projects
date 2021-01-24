
import React from 'react';
import './App.css';


// const reptiles = ['alligator', 'snake', 'lizard', 'test'];

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
      color: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.strikeThroughTodos = this.strikeThroughTodos.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.value]
    })

    // this.setState({
    //   todos: [...this.state.todos, this.state.value]
    // },()=>{console.log('second', this.state)})

    // console.log('first', this.state.value)
    this.setState({
      value: ''
    });
  }


  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  strikeThroughTodos(e) {
    // this.setState({
    //   color: "red"
    // })
    // style={{backgroundColor: this.state.color}}


    console.log('click div first item', this.state.todos)
  }

  removeTodos = () => {
alert('test')
  }

  render() {
    return (
      <div className="wrap">
        <h1>To Do List</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.value} onChange={this.handleInput} placeholder="Type things to do here" />
          <input type="submit" value="Add" />
          <div className="list">
            <h2>List</h2>
            <div>

              {this.state.todos.map(item => (
                <div className="todolist" onClick={this.strikeThroughTodos}>{item}<button className="remove-btn" onClick={this.removeTodos}>Remove</button></div>

              ))}

            </div>
          </div>

        </form>

      </div>





    );

  }

}


export default ListForm;
