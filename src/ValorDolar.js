import React, {useState, useEffect} from 'react';
import axios from "axios";

function ValorDolar(props) {
	const [valores, setValores] = useState([]);

	useEffect(() => {
		axios.get("https://mindicador.cl/api/dolar")
			.then(res => {
				const data = res.data;
				setValores(data.series);
			})
	}, []);

}