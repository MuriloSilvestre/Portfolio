import React from "react";
import Primerio from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div>
        <h1>Fundamentos React</h1>
        <Aleatorioio min={1} max={60} />
        <Primerio />
        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Super Legal!!" />
        <Fragmento />
    </div>
