import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
// import HelloComponent from './components/HelloComponent';

// Stateless Component
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href='/HelloComponent'
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// StateFullComponent
// class StateFullComponent extends Component {
//   render() {
//     return (
//       <div>StateFullComponent</div>
//     )
//   }
// }

export default App;
