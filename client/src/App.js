import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Button,
} from 'carbon-components-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Link</Button>
        <Button>Link</Button>
        <Button>Link</Button>
      </div>
    );
  }
}

export default App;
