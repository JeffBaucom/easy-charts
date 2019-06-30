import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Button,
} from 'carbon-components-react';
import styled from 'styled-components';
import './App.css';
import LoginPage from './login/LoginPage';

const StyledNav = styled.div`
  padding: 2rem;
  display: flex;
  background-color: #616161;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const StyledHeader = styled.h1`
  display: block;
  font-size: 2rem;
`

class App extends Component {
  render() {
    return (
      <div>
        <StyledNav>
          <div>
            <StyledHeader>Easy Charts</StyledHeader>
          </div>
          <div>
            <Link to="/login"><Button>Login</Button></Link>
          </div>
        </StyledNav>
        <Switch>
          <Route path="/login" component={LoginPage} />
          

        </Switch>
      </div>
    );
  }
}

export default App;
