import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea from "./Tarea.js";
function App() {
  return (
    <div className="App">
      <Tarea
        encargado="VadokDev"
        descripcion="Terminar de grabar el taller"
      />
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
