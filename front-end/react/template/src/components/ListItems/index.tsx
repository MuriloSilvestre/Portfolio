import React from "react";
import { Container } from "./Style"

interface IListItemsProps{
    codigo: number | string;
    nome: string;
    data: string;
    valor: number | string;
    quantidade?: number | string;
    ativo?: string;
    iconEditar?:React.ReactNode;
    iconRemover?:React.ReactNode;
    observacao?: string;
}

const ListItems: React.FC<IListItemsProps> = ({
    codigo,
    nome,
    data,
    valor,
    quantidade,
    ativo,
    iconEditar,
    iconRemover,
    observacao,
}) => {
    return (
        <Container>
            <div>
                <h4>{codigo}</h4>
                <h1>{nome}</h1>
                <h2>{data}</h2>
                <h2>{valor}</h2>
                <h2>{quantidade}</h2>
                <h3>{ativo}</h3>
                {iconEditar}
                {iconRemover}
                <h3>{observacao}</h3>
            </div>            
        </Container>    
    )
}

export default ListItems;
