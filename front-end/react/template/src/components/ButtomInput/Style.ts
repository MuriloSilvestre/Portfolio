import styled from "styled-components";

export const Container = styled.div`

    > button{
        color: ${props => props.theme.color.cortextobotao};
        width: 130px;
        height: 40px;
        padding: 7px 10px;
        margin-right: 10px;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        background-color: ${props => props.theme.color.primary};
        cursor: pointer;
        
        transition: background-color .5s;
        transition: color .5s;

        &:hover {
            background-position: 100% 0;
            -o-transition: all .4s ease-in-out;
            -webkit-transition: all .4s ease-in-out;
            transition: all .4s ease-in-out;
            background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);
            box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
            }

        > svg {
            margin-left: 8px;
            }
    }
`;

