import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Nav, NavItem, Navbar, Jumbotron, Button } from 'react-bootstrap';

var navbar =
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <img src="https://image.flaticon.com/icons/svg/174/174862.svg"></img>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem>
      AlgumaCoisa
    </NavItem>
    <NavItem>
      OutraCoisa
    </NavItem>
  </Nav>
</Navbar>;

class navbarClass extends React.Component {
  render () {
    return React.createElement (
      'NavBar',
      null,
      React.createElement(
        'Navbar.Header',
        null,
        React.createElement(
          'Navbar.Brand',
          null,
          React.createElement(
            'img',
            ['src',"https://image.flaticon.com/icons/svg/174/174862.svg"],
            null
          )
        )
      )
    )
  }
}



var element =
<div>
  <p>
    teste bootstrap
  </p>
  <Button>euSouUmBotao</Button>
</div>

class App extends Component {
  render() {
    return (
      <navbarClass></navbarClass>
    );
  }
}

export default App;
