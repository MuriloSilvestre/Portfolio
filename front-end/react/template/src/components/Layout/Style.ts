import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 50px auto;
    grid-template-areas:
    'MH MH'
    'AS CT';
    height: 100vh;
`;
