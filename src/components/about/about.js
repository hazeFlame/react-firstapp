import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

let alerts = () =>{
  alert(1)
}

class about extends Component {
  render() {
    return (
      <div>
        <input type="button" value="button" onClick={alerts} />
      </div>
    );
  }
}

export default about;
