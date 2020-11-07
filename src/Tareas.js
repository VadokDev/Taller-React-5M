import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Col, Row, Container, Card, Button, Alert } from 'react-bootstrap';
import Tarea from './Tarea.js';

function Tareas(props) {
	const isLogged = useSelector((store) => store.authReducer.isLogged);	

	return isLogged ? (
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
	) : (
		<Alert variant='danger'>
			Error!, necesitas estar logeado.
		</Alert>
	);
}

export default Tareas;