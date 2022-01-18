import React from "react";
import { 
    Container
 } from "./Style";

const Content: React.FC = ({ children }) => {
    return(
        <Container>
            { children }
        </Container>
    )
}

export default Content;
