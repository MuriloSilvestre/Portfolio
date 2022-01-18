import React from "react";
import { 
    Container,
    Perfil,
    FotoPerfil,
    NomePerfil,
    NomeUsuario, 
    TituloMeio,
    Opcoes
 } from "./Style";
 import {FaSignOutAlt} from "react-icons/fa";

const Mainheader: React.FC = () => {
    return(
        <Container>
            <Perfil>
                <FotoPerfil>

                </FotoPerfil>
                <NomePerfil>
                    <NomeUsuario>
                        Nome de Usuario
                    </NomeUsuario>
                    <TituloMeio>
                        Tipo de Usuario
                    </TituloMeio>
                </NomePerfil>
                    <FaSignOutAlt />
            </Perfil>
            <Opcoes>
                
            </Opcoes>
        </Container>
    )
}

export default Mainheader;
