import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const numbers = [1,2,3,4,5,6,7]

const NumbersList = p =>{
  const numbers = p.numbers;
  const listItems = numbers.map(numbers=>
    <li key={numbers.toString()}>
      {numbers}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

class Topic extends Component {
  render() {
    return (
      <div>
        <input type="text" value="" />
        <NumbersList numbers={numbers}/>
      </div>
    );
  }
}

export default Topic;
