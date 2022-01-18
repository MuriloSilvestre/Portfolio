import React from "react";
import { 
    Container,
    Content,
    ProdutosVenda
} from "./Style";
import { FaCashRegister, FaRegFileCode } from "react-icons/fa"
import ContentHeader from "../../components/ContentHeader";
import ButtomInput from "../../components/ButtomInput";

const Venda: React.FC = () => {
    return(
        <Container>
            <ContentHeader titulo="Venda">
                <ButtomInput label="Nova Venda" id="Venda" >
                    <FaCashRegister />
                </ButtomInput>
                <ButtomInput label="Nova Compra" id="Compra" >
                    <FaRegFileCode />
                </ButtomInput>
            </ContentHeader>
            <Content>
                <ProdutosVenda>
                    
                </ProdutosVenda>
            </Content>
        </Container>
    )
}

export default Venda;
