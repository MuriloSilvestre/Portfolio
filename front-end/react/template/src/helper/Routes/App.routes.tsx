import React from "react";
import { 
    Route,
    Switch
 } from 'react-router-dom';

import Layout from "../Components/Layout";
import Dashboard from "../Dashboard";
import Venda from "../Venda";
import Estoque from "../Estoque";
import Gerencia from "../Gerencia";
import ContasReceber from "../ContasReceber";
import ContasPagar from "../ContasPagar";
import Relatorios from "../Relatorios";
import Adicionar from "../Adicionar";

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/principal" exact component={Dashboard} />
            <Route path="/Venda" exact component={Venda} />
            <Route path="/Estoque" exact component={Estoque} />
            <Route path="/Gerencia" exact component={Gerencia} />
            <Route path="/ContasReceber" exact component={ContasReceber} />
            <Route path="/ContasPagar" exact component={ContasPagar} />
            <Route path="/Relatorios" exact component={Relatorios} />
            <Route path="/Adicionar" exact component={Adicionar} />
        </Switch>
    </Layout>
);

export default AppRoutes;