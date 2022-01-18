import React from "react";
import { Container } from "./Style"

interface IButtomInputProps{
    label?: string;
    id: string;
    children?: React.ReactNode;
}

const ButtomInput: React.FC<IButtomInputProps> = ({ label, id, children }) => {
    return (
        <Container>
            <button id={id}>
                        {label}
                        {children}
            </button>
        </Container>    
    )
}

export default ButtomInput;
