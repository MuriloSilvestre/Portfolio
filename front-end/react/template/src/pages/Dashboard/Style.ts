import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    `;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

        > .HalfWidth{
            margin: 15px; 
            padding: 10px;
            align-content: center;
            border-radius: 5px;
            height: 30%;
            width: 50%;
            background-color: ${props => props.theme.color.fundoconteudo};
        }
        
        > .FullWidht{
            margin: 15px; 
            padding: 10px;
            align-content: center;
            border-radius: 5px;
            height: 50%;
            width: 100%;
            background-color: ${props => props.theme.color.fundoconteudo};
            display: grid;
            grid-template-rows: 50px auto;
            grid-template-columns: auto;
            > .Valor{
                display: flex;
                align-items:center;
                >h5{
                    color: ${props => props.theme.color.secondary};
                    margin: 10px 10px;
                    font-size: 1.5rem;
                }
                > h6{
                    color: ${props => props.theme.color.primary};
                    margin: 10px 0;
                    font-size: 1.5rem;
                }
            }
        }
`;

export const ListaHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;
    
    >h2 {
        color: ${props => props.theme.color.primary};
        font-weight: bold;
        font-size: 1.2rem;
    }
    `;

export const ItemDisplay = styled.div`
    height: 350px;
    width: 100%;
    overflow: auto;
`;

export const ItemDisplayNoScroll = styled.div`
    height: 390px;
    width: 100%;
`;

export const ItemDisplayVendas = styled.div`
    height: 100%;
    width: 100%;
`;
