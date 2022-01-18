import React from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./Style"

interface IPesquisaInputProps{
    id: string;
}

const ButtomInput: React.FC<IPesquisaInputProps> = ({ id }) => {
    return (
        <Container>
            <input />
            <FaSearch/>
        </Container>    
    )
}

export default ButtomInput;
