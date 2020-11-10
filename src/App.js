import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {  
  
  //State is the property in React. State is the special property. 
  //Whilst props allow you to pass data down the component tree (and hence trigger an UI update), 
  //state is used to change the component, well, state from within. Changes to state also trigger an UI update.
  //props  and state  are CORE concepts of React. 
  //Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser.

  state = {
    persons: [
      {name: 'Max', age:28},
      {name:'Manu', age:27},
      {name:'Stephanie', age:21}
    ],

    otherState: 'some other value'
  }
  
  //Use ES6 Aerrow function to define a click event
  switchNameHandler = () => {
    //console.log('Was clicked!');
    // Reactwill give your warning: this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        {name:'Maximilian', age:30},
        {name:'Matthias', age:99},
        {name:'Moritz', age:70},
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} /*This refers to the class in the ES6 Syntax*/ age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies: Swimming </Person>
      </div>
    );
  }
}

export default App;