import React, {useState, useEffect} from "react";

function Tarea(props) {
	const [estadoTarea, setEstadoTarea] = useState("Pendiente");

	return (
		<div className="row">
			<div className="block">
				<img src={"https://avatars.dicebear.com/api/bottts/" +props.encargado + ".svg"} />
			</div>			
			<div className="block">{props.descripcion}</div>
			<div className="block">{estadoTarea}</div>
			<div className="block">
				<button onClick={() => setEstadoTarea("Terminada")}>
					Terminar
				</button>
			</div>
		</div>
	)
}

export default Tarea;