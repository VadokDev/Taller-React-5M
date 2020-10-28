import React, {useState, useEffect} from "react";
import {Card, Button} from 'react-bootstrap';

function Tarea(props) {
	const [estadoTarea, setEstadoTarea] = useState("Pendiente");

	return (
		<Card>
		  <Card.Img variant="top" src={"https://avatars.dicebear.com/api/bottts/" +props.encargado + ".svg"} />
		  <Card.Body>
		    <Card.Title>{estadoTarea}</Card.Title>
		    <Card.Text>
		      {props.descripcion}
		    </Card.Text>
		    <Button variant="primary" onClick={() => setEstadoTarea("Terminada")}>Terminar</Button>
		  </Card.Body>
		</Card>
	)
}

export default Tarea;