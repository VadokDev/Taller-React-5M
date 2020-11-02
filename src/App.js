import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea from "./Tarea.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import ValorDolar from "./ValorDolar.js";
import Counter from "./Counter.js";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> 
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      
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

      <Tarea
        encargado="VadokASDAFSDev"
        descripcion="Terminar de ASDgrabar el taller"
      />
      <Tarea
        encargado="VadoSDFSDFkDev"
        descripcion="Terminar de gASDrabar el taller"
      />
      <Tarea
        encargado="VadokASDASDDev"
        descripcion="Terminar de grabar ASDel taller"
      />
      <Tarea
        encargado="VadokDASDASDDASASDASDev"
        descripcion="Terminar de grabar eASDASDl taller"
      />
    </div>
  );
}

export default App;
