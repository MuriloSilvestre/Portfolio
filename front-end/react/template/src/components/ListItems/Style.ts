import styled from "styled-components";

export const Container = styled.div`
    
    > div{
        color: ${props => props.theme.color.secondary};
        display: flex;
        height: 40px;
        width: auto;
        align-items: center;
        justify-content: space-between;
        
        > h1 {
            font-size: 0.8rem;
            width: 140px;
            margin:0 4px;
        }

        > h4{
            font-size: 0.7rem;
            width: 50px;
            text-align: center;
            margin:0 4px;
        }
    
        > h2{
            font-size: 0.8rem;
            width: 60px;
            text-align: center;
            margin:0 4px;
        }
    }

`;

