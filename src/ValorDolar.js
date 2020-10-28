import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ListGroup} from "react-bootstrap";

function ValorDolar(props) {
	const [valores, setValores] = useState([]);

	useEffect(() => {
		axios.get("https://mindicador.cl/api/dolar")
			.then(res => {
				const data = res.data;
				setValores(data.serie);
			});
	}, []);

	return (
		<ListGroup>
			{valores.map((v) => <ListGroup.Item> <b>Valor: </b> {v.valor}</ListGroup.Item>)}
		</ListGroup>
	);
}

export default ValorDolar;