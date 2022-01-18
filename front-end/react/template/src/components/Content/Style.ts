import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.color.gray};
    
    height: calc(100vh - 50px);
    overflow-y: scroll;
`;