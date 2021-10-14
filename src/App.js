import logo from './logo.svg';
import './App.css'; 
import {Header, Body, Footer} from './testComp';

function App() {
  const head= "hello everybody header";
  const bod= "hello everybody body";
  const foot= "hello everybody footer";


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
        <Header title={head}/>
        <Body name={bod}/>
        <Footer name={foot}/>
      </header>
    </div>
  );
}

export default App;
