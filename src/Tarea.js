import React, {useState, useEffect} from "react";
import {Card, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from './redux/actions/taskActions.js';

function Tarea(props) {

	const {id, name, description, finished} = useSelector((s) => s.taskReducer.tasks.find((v) => v.id == props.id));
	const dispatch = useDispatch();

	return id ? (
		<Card>
		  <Card.Img variant="top" src={"https://avatars.dicebear.com/api/bottts/" + name + ".svg"} />
		  <Card.Body>
		    <Card.Title>{name}</Card.Title>
		    <Card.Text>
		      {description}
		    </Card.Text>
		    <Card.Title>{finished ? 'Finalizada' : "Finalizadan't"}</Card.Title>
		    <Button variant="primary" onClick={() => dispatch(updateTask(id, !finished))}>{finished ? 'Desfinalizar' : "Terminar"}</Button>
		  </Card.Body>
		</Card>
	) : (
		<div>error con task {props.id}</div>
	)
}

export default Tarea;