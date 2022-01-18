import React from "react";
import {
    HeaderConteudo,
    TituloConteiner,
    Titulo,
    Controllers
 } from "./Style";

 interface IContentHeader{
    titulo: string;
    children: React.ReactNode;
 }

const ContentHeader: React.FC<IContentHeader> = ({ titulo, children }) => {
    return(
        <HeaderConteudo>
            <TituloConteiner>
                <Titulo>
                    {titulo}
                </Titulo>
            </TituloConteiner>
            <Controllers>
                    {children}
            </Controllers>
        </HeaderConteudo>
    )
}

export default ContentHeader;
