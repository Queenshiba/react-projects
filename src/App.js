
import React from 'react';
import './App.css';



class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
      openInputForEdit: false,
      randomNum: '',
      updatedValue: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.strikeThroughTodos = this.strikeThroughTodos.bind(this);
    // this.removeTodos = this.removeTodos.bind(this);
    // this.showInputForEditTodos = this.showInputForEditTodos.bind(this);
    // this.updateEditedText = this.updateEditedText.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    let randomNum = Math.random()
    this.setState({
      todos: [...this.state.todos, {
        todo: this.state.value,
        done: false,
        openInputForEdit: false
      }],
      value: '',

      randomNum: randomNum
    })
    
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,

    })
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
    console.log(this.state.todos)
  }

  removeTodos = (index) => {
    // let { todos } = this.state;
    let copyTodos = [...this.state.todos]
    copyTodos.splice(index, 1);

    this.setState({
      todos: copyTodos
    }, () => console.log(this.state.todos))
  }


  // Click 'Edit' button and show the input that you selected
  showInputForEditTodos(selectedTodoIndex) {
    let item = []
    const selectedItem = this.state.todos.map((todo, index) => {
      if (index === selectedTodoIndex) {
        item = todo.todo
        todo.openInputForEdit = true
        return item

      } else {
        todo.openInputForEdit = false
        // todo.todo = this.state.updatedValue
        return ''
      }

    })
    console.log(item)

    this.setState({
      openInputForEdit: true,
      updatedValue: item
    })
    console.log(selectedItem)
    console.log(this.state.updatedValue)
    console.log(this.state.todos)
  }

  // it's onChange and gets a value of the edited text
  handleEditInput(e) {

    this.setState({
      updatedValue: e.target.value
    })

  }

  // Click 'Update' button and save the edited text
  editTodos = (selectedTodoIndex) => {
    const edited = this.state.todos.map((todo, index) => {
      if (selectedTodoIndex === index) {
        todo.todo = this.state.updatedValue
      }
      return todo.todo
    });


    this.setState({
      updatedValue: edited,
      editInput: false
    })
    console.log(this.state.updatedValue)
  }




  render() {
    return (
      <div className="wrap">
        <h1>To Do List</h1>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" name="name" value={this.state.value} onChange={(e) => this.handleInput(e)} placeholder="Type things to do here" />
          <input type="submit" value="Add" />
          <div className="list">
            <h2>List</h2>


            {this.state.todos.map((item, index) =>
            (
              <div className="todolist" key={item.todo + this.state.randomNum} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                {this.state.openInputForEdit && (
                  <div className="edit-input-container" style={{ display: item.openInputForEdit ? true : 'none'}}>
                    <input type="text" key={item + index} value={this.state.updatedValue} onChange={(e) => this.handleEditInput(e)} />
                    <button type="submit" onClick={() => this.editTodos()}>update</button>
                  </div>
                )} 
                {item.todo}
                <div className="buttons">
                  <button type='button' className="remove-btn" onClick={() => this.removeTodos(index)}>Remove</button>
                  <button type='button' className="edit-btn" onClick={() => this.showInputForEditTodos(index)}>Edit</button>
                  <button type='button' className="done-btn" onClick={() => this.strikeThroughTodos(index)}>Done</button>
                </div>

              </div>
            )
            )}

          </div>


        </form>

      </div>





    );

  }

}


export default ListForm;
