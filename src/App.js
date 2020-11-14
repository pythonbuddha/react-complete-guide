import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
          {name: 'Richard', age: 28 , hobby: 'Music'},
          {name: 'Vrajesh', age:30, hobby: 'Cooking'},
          {name: 'Gaurav', age:30, hobby: 'Art'}
      ],
       otherState: true
    }
  }
  switchNameHandler = (arg) => {
    //console.log('Was clicked!');
    //DON'T Do THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: 'Prithvi', age:60, hobby: 'Art'},
        {name: 'Parth', age:90, hobby: 'Cooking'},
        {name: 'Kuldeep', age:100, hobby: 'Music'}
      ]
    })
    // let clickCounts = {...this.state.otherState};
    // console.log(this.state.otherState);
    switch(this.state.otherState) {
      case true:
          this.setState({
            persons: [
              {name: 'Prithvi', age:60, hobby: 'Art'},
              {name: 'Parth', age:90, hobby: 'Cooking'},
              {name: 'Kuldeep', age:100, hobby: 'Music'}
            ],
            otherState: false
          })      
        break;
      case false:
        this.setState({
          persons: [
                    {name: 'Richard', age: 28 , hobby: 'Music'},
                    {name: 'Vrajesh', age:30, hobby: 'Cooking'},
                    {name: 'Gaurav', age:30, hobby: 'Art'}
                  ],
                  otherState: true
          })
        break;
      default:
    }
  }
  // previousNameHandler = () => {
  //   //console.log('Was clicked!');
  //   //DON'T Do THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       {name: 'Richard', age: 28 , hobby: 'Music'},
  //       {name: 'Vrajesh', age:30, hobby: 'Cooking'},
  //       {name: 'Gaurav', age:30, hobby: 'Art'}
  //   ]
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this)}>Switch Name</button>
        {/* <button onClick={this.previousNameHandler}>Previous Data</button> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  hobby={this.state.persons[0].hobby}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  hobby={this.state.persons[1].hobby}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  hobby={this.state.persons[2].hobby}/>
      </div>
    );
  }
}

export default App;