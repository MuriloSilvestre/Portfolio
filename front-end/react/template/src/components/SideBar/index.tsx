import React from 'react';
import {     
    Container,
    Menus,
    SideBarConteudo, 
    SideBarLista,
    Footer,
    Logo
} from "./Style";
import { 
    FaTachometerAlt,
    FaCashRegister,
    FaCubes,
    FaAddressCard,
    FaArrowUp,
    FaArrowDown,
    FaChartBar,
    FaPlus
  } from "react-icons/fa"

const SideBar: React.FC = () => {
  return (
      <Container>
            <Menus>
                <SideBarConteudo>
                    <SideBarLista href="/Principal" id={window.location.pathname == "/Principal" ? "LinkAtivo" : ""}>
                        <FaTachometerAlt />
                        Principal
                    </SideBarLista>
                    <SideBarLista href="/Venda" id={window.location.pathname == "/Venda" ? "LinkAtivo" : ""}>
                        <FaCashRegister />
                        Venda
                    </SideBarLista>
                    <SideBarLista href="/Estoque" id={window.location.pathname == "/Estoque" ? "LinkAtivo" : ""}>
                        <FaCubes />
                        Estoque
                    </SideBarLista>
                    <SideBarLista href="/Gerencia" id={window.location.pathname == "/Gerencia" ? "LinkAtivo" : ""}>
                        <FaAddressCard />
                        Gerencia
                    </SideBarLista>
                    <SideBarLista href="/ContasReceber" id={window.location.pathname == "/ContasReceber" ? "LinkAtivo" : ""}>
                        <FaArrowUp />
                        Contas a Receber
                    </SideBarLista>
                    <SideBarLista href="/ContasPagar" id={window.location.pathname == "/ContasPagar" ? "LinkAtivo" : ""}>
                        <FaArrowDown />
                        Contas a Pagar
                    </SideBarLista>
                    <SideBarLista href="/Relatorios" id={window.location.pathname == "/Relatorios" ? "LinkAtivo" : ""}>
                        <FaChartBar />
                        Relatorios
                    </SideBarLista>
                    <SideBarLista href="/Adicionar" id={window.location.pathname == "/Adicionar" ? "LinkAtivo" : ""}>
                        <FaPlus />
                        Adicionar
                    </SideBarLista>
                </SideBarConteudo>
            </ Menus>
    </Container>
  );
}

export default SideBar;
