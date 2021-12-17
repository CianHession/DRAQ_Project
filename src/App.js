//Application Imports, neccessary for functionality.
import React, { Component } from 'react';
import './App.css';
import  Add  from './Components/add';
import { Content }  from './Components/content';
import  View  from './Components/view';
import Items from './Components/items';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Update from './Components/update';

class App extends Component {

    render() {
    return (
      <Router>
        <div className="App">
          {/* NavBar -- Visually Appealing, whilst providing Routing. */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/"><i><b>Hesh™</b></i></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/additem">Add Item</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
          <Switch>
            {/* Routing */}
            <Route path='/' component={Content} exact/>
            <Route path='/products' component={View} exact/>
            <Route path='/additem' component={Add} exact/>
            <Route path='/updateitem/:id' component={Update} exact/> 
          </Switch>
        </div>
      </Router>
    );
  }
}
    export default App;