import React, { useState, useEffects } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { createTask } from './redux/actions/taskActions.js';

function TaskForm(props) {

	const [nombre, setNombre] = useState('');
	const [desc, setDesc] = useState('');

	const dispatch = useDispatch();

	const handleNombre = (e) => {
		setNombre(e.target.value);
	}

	const handleDesc = (e) => {
		setDesc(e.target.value);
	}

	const handleSubmit = (e) => { 
		e.preventDefault();
		axios.post('https://taller-react-5min-back.herokuapp.com/task', {
			name: nombre,
			description: desc,
		}, {
			headers: {
				'auth-token': localStorage.getItem('token'),
			}
		}).then((data) => {
			dispatch(createTask(data.data));
		})
	}

	return (
		<Form>
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Nombre</Form.Label>
		    <Form.Control onChange={handleNombre} type="email" placeholder="Enter nombre" />
		  </Form.Group>

		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Descripción</Form.Label>
		    <Form.Control onChange={handleDesc} type="email" placeholder="Enter descripción" />
		  </Form.Group>

		  <Button onClick={handleSubmit} variant="primary" type="submit">
		    Enviar
		  </Button>

		</Form>
	);
}

export default TaskForm;