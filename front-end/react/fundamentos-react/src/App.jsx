import React from "react";
import Primerio from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';

export default _ =>
    <div>
        <h1>Fundamentos React</h1>
        <Primerio />
        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Super Legal!!" />
    </div>
