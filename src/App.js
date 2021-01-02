
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>

      </header>

      <body>
        <div className="input-container">
          <form>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </body>
    </div>
  );
}

export default App;
