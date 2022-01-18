import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;
    background: ${props => props.theme.color.primary};
`;

export const Opcoes = styled.div`
    position: absolute;
    margin: 10px 25px;
    width: 250px;
    color: ${props => props.theme.color.tertiary};
`;

export const Perfil = styled.div`
    display: grid;
    grid-template-columns: 80px 200px 20px;
    grid-template-rows: 50px;
    align-items: center;
    color: ${props => props.theme.color.tertiary};
`;

export const FotoPerfil = styled.div`
   background-color: ${props => props.theme.color.tertiary};
   display: block;
   margin-left: auto;
   margin-right: auto;
   width: 35px;
   height: 35px;
   border-radius: 50%;
   cursor: pointer;
   `;

export const NomePerfil = styled.div`
   `;

export const NomeUsuario = styled.h1`
   font-size: 1rem;
   color: ${props => props.theme.color.tertiary};
   cursor: pointer;
   font-weight: bold;
   `;

export const TituloMeio = styled.h2`
    color: ${props => props.theme.color.white};
    margin-top: 5px;
    font-size: 0.8rem;
    cursor: pointer;
`;