import styled from "styled-components";

export const HeaderConteudo = styled.div`
    width: auto;
    height: 80px;
    background-color: ${props => props.theme.color.fundo};
    
    display: flex;

    justify-content: space-between;
`;

export const TituloConteiner = styled.p`
    display: flex;
    height: 80px;
    align-items: center;
    margin: 0 25px;
`;

export const Titulo = styled.p`
    color: ${props => props.theme.color.tertiary};
    font-size: 1.5rem;
    font-weight: bold;

    &::after{
        content:'';
        display: block;
        width: 55px;
        border-bottom: 5px solid ${props => props.theme.color.primary};
    }
`;

export const Controllers = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    margin: 0 25px;
`;