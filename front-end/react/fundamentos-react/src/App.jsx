import React from "react";
import Primerio from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Cards from "./components/layout/Cards";

export default _ =>
    <div>
        <h1>Fundamentos React</h1>
        <Cards titulo="#4 - Desafio Aleatorio">
            <Aleatorio min={1} max={60} />
        </Cards>

        <Cards titulo="#3 - Fragmento">
            <Fragmento />
        </Cards>


        <Cards titulo="#2 - Com Parametro">
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Super Legal!!" />
        </Cards>

        <Cards titulo="#1 - Primeiro Componente">
            <Primerio />
        </Cards>
    </div>
