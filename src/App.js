import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Nav, NavItem, Navbar, Jumbotron, Button } from 'react-bootstrap';

var imgSrc = "https://image.flaticon.com/icons/svg/174/174862.svg"

function Navbara(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={props.Src} />
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
    </Navbar>
  )
};

var test = 'asd';

var element =
<div>
  <p>
    teste bootstrap
  </p>
  <Button>euSouUmBotao</Button>
</div>;

var NavbarApp = <Navbara Src={imgSrc}></Navbara>;



class App extends Component {
  render() {
    return (
        [NavbarApp,
        element]
    );
  }
}

export default App;
