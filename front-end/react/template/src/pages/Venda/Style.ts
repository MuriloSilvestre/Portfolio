import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.color.gray};
    height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    overflow: auto;
    
`;

export const ProdutosVenda = styled.div`
`;