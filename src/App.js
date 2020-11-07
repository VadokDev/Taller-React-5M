import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea from "./Tarea.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import ValorDolar from "./ValorDolar.js";
import Counter from "./Counter.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/contadores" href="#home">Contadores</Nav.Link>
            <Nav.Link as={Link} to="/dolar" href="#features">Dólar</Nav.Link>
            <Nav.Link as={Link} to="/tareas" href="#pricing">Tareas</Nav.Link>
          </Nav> 
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        
        <Switch>
          <Route path="/contadores">
            <Container fluid>
              <Row>
                <Col>
                  <Counter />
                </Col>
                <Col>
                  <Counter />
                </Col>
                <Col>
                  <Counter />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/dolar">
            <Container fluid>
              <Row>
                <Col>
                  <ValorDolar />
                </Col>
                <Col>
                  <ValorDolar />
                </Col>
                <Col>
                  <ValorDolar />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/tareas">
            <Container fluid>
              <Row>
                <Col>
                  <Tarea
                    encargado="VadokDev"
                    descripcion="Terminar de grabar el taller"
                  />
                </Col>
                <Col>
                  <Tarea
                    encargado="VadokDev"
                    descripcion="Terminar de grabar el taller"
                  />
                </Col>
                <Col>
                  <Tarea
                    encargado="VadokDev"
                    descripcion="Terminar de grabar el taller"
                  />
                </Col>
                <Col>
                  <Tarea
                    encargado="VadokDev"
                    descripcion="Terminar de grabar el taller"
                  />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/">
            <div>Ola</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
