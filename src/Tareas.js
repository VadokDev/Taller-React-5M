import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container, Card, Button, Alert } from "react-bootstrap";
import Tarea from "./Tarea.js";
import axios from "axios";
import { fetchTasks } from "./redux/actions/taskActions.js";
import TaskForm from './TaskForm.js';

function Tareas(props) {
	const isLogged = useSelector((store) => store.authReducer.isLogged);
	const dispatch = useDispatch();
	const tasks = useSelector((store) => store.taskReducer.tasks);

	useEffect(() => {
		if (isLogged) {
			axios
				.get("https://taller-react-5min-back.herokuapp.com/task", {
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				})
				.then((data) => {
					console.log(data);
					dispatch(fetchTasks(data.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return isLogged ? (
		<Container fluid>
			<Row>
				<TaskForm />
			</Row>
			<Row>
				{tasks.map((v) => (
					<Col key={v.id} md={2}>
						<Tarea id={v.id} />
					</Col>
				))}
			</Row>
		</Container>
	) : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);
}

export default Tareas;
