
import React from 'react';
import './App.css';



class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
      editInput: false,
      randomNum: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.strikeThroughTodos = this.strikeThroughTodos.bind(this);
    this.removeTodos = this.removeTodos.bind(this);
    this.editTodos = this.editTodos.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    let randomNum = Math.random()
    this.setState({
      todos: [...this.state.todos, {
        todo: this.state.value,
        done: false
      }],
      value: '',
      editInput: false,
      randomNum: randomNum
    })
    // console.log('handleSubmit')
  }

  handleInput(e) {
    this.setState({ value: e.target.value })
  }

  strikeThroughTodos = (selectedTodoIndex) => {
    const strikeThrough = this.state.todos.map((todo, index) => {
      if (selectedTodoIndex === index) {
        todo.done = true
        return todo
      } else {
        return todo
      }
    });

    this.setState({
      todos: strikeThrough
    });
  }

  removeTodos = (index) => {
    // let { todos } = this.state;
    let copyTodos = [...this.state.todos]
    copyTodos.splice(index, 1);

    this.setState({
      todos: copyTodos
    }, () => console.log(this.state.todos))
  }

  editTodos = (selectedTodoIndex) => {

    const edited = this.state.todos.map((todo, index) => {
      if (selectedTodoIndex === index) {
        return todo.todo = "edited!"
      } else {
        return todo.todo
      }

    });


    this.setState({
      todo: edited,
      editInput: true
    })

  }


  render() {
    return (
      <div className="wrap">
        <h1>To Do List</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" style={{
            display: this.state.editInput ? 'block' : 'none'
          }} />
          <input type="submit" value="Updated" style={{
            display: this.state.editInput ? 'block' : 'none'
          }} />
          <input type="text" name="name" value={this.state.value} onChange={this.handleInput} placeholder="Type things to do here" />
          <input type="submit" value="Add" />
          <div className="list">
            <h2>List</h2>
            <div>
              {/* {this.state.todos} */}
              {this.state.todos.map((item, index) =>
              (
                <div className="todolist" key={item.todo + this.state.randomNum} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                  {item.todo}
                  <button type='button' className="remove-btn" onClick={() => this.removeTodos(index)}>Remove</button>
                  <button type='button' className="edit-btn" onClick={() => this.editTodos(index)}>Edit</button>
                  <button type='button' className="done-btn" onClick={() => this.strikeThroughTodos(index)}>Done</button>
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
