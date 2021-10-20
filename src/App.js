import logo from './logo.svg';
import './App.css'; 
import {Header, Body, Footer} from './testComp';
import Test from './testComp';
import React from 'react';

export default function App() {
  const head= "hello everybody header";
  const bod= "hello everybody body";
  const foot= "hello everybody footer";
  const state = {
    parent: "App component"
  }

  const handleClick = () => {
    console.log("clicked");
  }

  const handleMouse = () =>{
    console.log("Mouse clicked")
  }

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
        {/* <Header title={head}/>
        <Body name={bod}/>
        <Footer name={foot}/> */}
        <Test name="testing" />
        <Child name="Rjab" value={bod} state={state.parent}/>
        <button onClick={handleClick}>
          Click
        </button>
        <button onMouseMove={handleMouse}>
          Move mouse
        </button>
      </header>
    </div>
  );
}

class Child extends React.Component{

  render(){
    return (
      <div>
        this is a child Component and the props is {this.props.name}
      </div>
    )
  }
}