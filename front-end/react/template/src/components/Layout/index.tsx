import React from "react";
import { Container } from "./Style";
import Mainheader from "../Mainheader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
    return(
        <Container>
            <Mainheader />
            <Aside />
            <Content>
                { children }
            </Content>
        </Container>
    )
}

export default Layout;
