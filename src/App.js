import logo from './logo.svg';
import './App.css'; 
import {Header, Body, Footer} from './components/testComp';
import Test from './components/testComp';
import React, { useState } from 'react';
import {Item} from './components/Item'

export default function App() {
  const head= "hello everybody header";
  const bod= "hello everybody body";
  const foot= "hello everybody footer";
  // const state = {
  //   parent: "App component"
  // }

  // const state ={
  //   name: 'Rjab',
  //   age: 27
  // }
  const [student, setStudent] = useState({
    id:1,
    name: 'Rjab',
    age: 27
  })
  
  const state = {
    items : [
      {num:1, subject:'reactjs', level:"A"},
      {num:2, subject:'python', level:"B"},
      {num:3, subject:'bash', level:"C"}
    ]
  }

  const studentChange = () => {
    setStudent({
      name: 'Mohamed',
      age:'31'
    })
  }

  const handleClick = () => {
    console.log("clicked");
  }

  const handleMouse = () =>{
    console.log("Mouse clicked")
  }
  const handleChange = (e) => {
    setStudent({name: e.target.value})
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(student.name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        {/* <Child name="Rjab" value={bod} state={state.parent}/> */}
        <button onClick={handleClick}>
          Click
        </button>
        <button onMouseMove={handleMouse}>Move mouse </button>
        <button onClick={studentChange}>change state </button>
        <p>the name is {student.name} and age {student.age}</p>
        {/* <Item id='1' name='Rjab' age="27  "/> */}
        <Item items={state.items} />

        <form onSubmit={handleSubmit}>
          <div>Form part header </div>
          <input type="text" onChange={handleChange}/>
          <button type="submit">
            Submit
          </button>
          {student.name}
        </form>

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