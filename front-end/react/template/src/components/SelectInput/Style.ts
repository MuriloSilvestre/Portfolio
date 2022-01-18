import styled from "styled-components";

export const Container = styled.div`

    > select{
        padding: 7px 10px;

        position: relative;

        margin-left: 7px;
  
        border: 0;
        outline: 0;
        background-color: transparent;

        cursor: pointer;

        border-radius: 2px;
        
        padding: 8px 16px;

        color: ${props => props.theme.color.secondary};

        background-color: ${props => props.theme.color.cortextobotao};
    }
`;

