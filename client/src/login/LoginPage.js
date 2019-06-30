import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Form, FormGroup, TextInput, Button
} from 'carbon-components-react';
import styled from 'styled-components';
import { formatWithOptions } from 'util';

const FormWrapper = styled.div`
  margin: 2rem auto;
  max-width: 15rem;
  padding: 1rem;
  border: 1px solid #222;
`

class LoginPage extends Component {
  render() {
    return (
      <FormWrapper>
        <Form>
          <FormGroup>
            <TextInput labelText="Username"/>
            <TextInput type="password" labelText="Password"/>
          </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    )
  }
}

export default LoginPage;