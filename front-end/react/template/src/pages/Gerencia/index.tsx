import React from "react";
import { 
    Container,
    Content
} from "./Style";
import { FaCashRegister, FaRegFileCode } from "react-icons/fa"
import ContentHeader from "../../components/ContentHeader";
import ButtomInput from "../../components/ButtomInput";

const Gerencia: React.FC = () => {
    return(
        <Container>
            <ContentHeader titulo="Gerencia">
                <ButtomInput label="Nova Venda" id="Venda" >
                    <FaCashRegister />
                </ButtomInput>
                <ButtomInput label="Nova Compra" id="Compra" >
                    <FaRegFileCode />
                </ButtomInput>
            </ContentHeader>
            <Content>
            </Content>
        </Container>
    )
}

export default Gerencia;
