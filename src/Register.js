import React, { useState, useEffects } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function Register(props) {
	
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [username, setUsername] = useState('');
	const [estado, setEstado] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlePass = (e) => {
		setPass(e.target.value);
	}

	const handleUsername = (e) => {
		setUsername(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('https://taller-react-5min-back.herokuapp.com/auth/register', {
			email: email,
			pass: pass,
			username: username,
		}).then((data) => {
			setEstado('OK');
			console.log(data);
		}).catch((error) => {
			setEstado('ERROR')
		});
	}

	return (
		<Form>
			{estado !== '' && (
				<Alert variant={estado === 'OK' ? 'success' : 'danger'}>
					{estado}
				</Alert>
			)}
		  <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
		    <Form.Text className="text-muted">
		      We'll never share your email with anyone else.
		    </Form.Text>
		  </Form.Group>

		  <Form.Group>
		    <Form.Label>Username</Form.Label>
		    <Form.Control onChange={handleUsername} type="text" placeholder="Enter username" />
		  </Form.Group>

		  <Form.Group controlId="formBasicPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control onChange={handlePass} type="password" placeholder="Password" />
		  </Form.Group>

		  <Button onClick={handleSubmit} variant="primary" type="submit">
		    Enviar
		  </Button>
		</Form>
	);
}

export default Register;
