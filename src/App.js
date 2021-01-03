
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ''
    };

  }
  submitValue(params) {

  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  addTodo(e) {
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>

        </header>


        <div className="input-container">
          <form onSubmit={(e) => this.addTodo(e)}>
            <input className="input" placeholder="Type something..." type="text" name="name" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            <input className="add-btn" type="submit" value="Add" />
          </form>
{
  this.state.todos.map((todo, index) => {
    return (<div key={todo+index}>{todo}</div>)
  })
}


          <div className="todolist">list here</div>
        </div>

      </div>
    );
  }

}

export default App;
