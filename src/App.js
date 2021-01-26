
import React from 'react';
import './App.css';


// const reptiles = ['alligator', 'snake', 'lizard', 'test'];

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
      // strikeThrough: '',
      randomNum: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.strikeThroughTodos = this.strikeThroughTodos.bind(this);
    this.removeTodos = this.removeTodos.bind(this);
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
    let randomNum = Math.random()
    // console.log(randomNum)
    this.setState({
      value: '',
      randomNum: randomNum
    })
  }

  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  strikeThroughTodos = (index) => {
    this.setState({
      strikeThrough: 'line-through'
    })
    

  }

  removeTodos = (index) => {
    // let { todos } = this.state;
    let copyTodos = [...this.state.todos]
    copyTodos.splice(index, 1);

    this.setState({
      todos: copyTodos
    }, () => console.log(this.state.todos))


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
              {/* {this.state.todos} */}
              {this.state.todos.map((item, index) =>
              (
                <div className="todolist" key={item + this.state.randomNum} style={{ textDecoration: this.state.strikeThrough }}>
                  {item}
                  <button className="remove-btn" onClick={() => this.removeTodos(index)}>Remove</button>
                  <button className="done-btn" onClick={() => this.strikeThroughTodos(index)}>Done</button>
                </div>
              )
              )}

            </div>
          </div>

        </form>

      </div>





    );

  }

}


export default ListForm;
