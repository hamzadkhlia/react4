import './App.css';
import { Component } from 'react';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


class  App extends Component {
  state = {show:true}
  render() {
    return (
      <div>
      <button onClick= {() =>this.setState({show:false})}> click </button>
      hello react
      </div>
      )
 
    }
  }



    export default App;














