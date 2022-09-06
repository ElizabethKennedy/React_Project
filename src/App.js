import React from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> My First React App</h1>
        <p>This is new and exciting terrain we are exploring!</p>
        <p>Here is an overview of our introduction to working with React.</p>
        <h2>Takeaways from Intro to React:</h2>
        <ul>
          <li>React is a JavaScript Library for creating <b>dynamic</b> single-page applications.</li>
          <li>Components are the building blocks of an application, that return jsx or JavaScript xml.</li>
          <li>The ReactDOM is the <i>virtual dom</i> that manages and syncs updates with the real browser DOM.</li>
        </ul>

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

export default App;
