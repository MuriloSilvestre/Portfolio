import styled from "styled-components";

export const Container = styled.div`
   color: ${props => props.theme.color.tertiary};

   #LinkAtivo{
      color: ${props => props.theme.color.primary};   
      background-color: ${props => props.theme.color.secondary};
      border-left:5px solid ${props => props.theme.color.primary}; 
      width: 99%;
      cursor: pointer;
   }
`;

export const Menus = styled.div`
   position: absolute;
   margin: 80px 0px;
   width: 250px;
`;

export const SideBarConteudo = styled.div`
   font-size: 1rem;
`;

export const SideBarLista = styled.a`
   font-size: 1rem;
   height: 60px;
   cursor: pointer;
   display: flex;
   align-items: center;
   color: ${props => props.theme.color.tertiary};
   text-decoration: none;

   transition: opacity .3s;

   &:hover {
      opacity: .6;
   }
   
   > svg {
      margin: 0 25px;
   }

`;

export const Footer = styled.div`
   display: block;
   position: absolute;
   bottom: 0;
   width: 250px;
   height: 140px;
`;

export const Logo = styled.img`
   display: block;
   margin-left: auto;
   margin-right: auto;
   margin-Bottom: 20px;
   width: 200px;
   position: absolute;
   bottom: 0;
   left: 25px;
   cursor: pointer;
`;
