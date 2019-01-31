import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about';
import Home from './home';
import { Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container, Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Hello extends React.Component{
  render() {
    return (
        <Router>
          <Container>
            <Row>
            <Col xs="3">
            <h2>Therichpost</h2>
            <Navbar light expand="md">
              <NavbarBrand></NavbarBrand>
              <Nav vertical navbar>
                <NavItem>
                  <Link to={'/home'}>Home</Link>
                </NavItem>
              <NavItem>
                <Link to={'/about'}>About</Link>
              </NavItem>
              </Nav>
            </Navbar>
            </Col>
                <Col xs="9">
            <h4><small>Lokesh Gupta</small></h4>
                <hr />
            <Switch>
            
              <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    </Switch>
                </Col>
              <footer class="container-fluid">
              <center><p>Therichpost</p></center>
            </footer>
           </Row>
        </Container>
      </Router>
    );
  }
  }

  ReactDOM.render(<Hello />, document.getElementById('root'));