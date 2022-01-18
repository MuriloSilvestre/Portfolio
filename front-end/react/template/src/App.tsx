import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./pages/Styles/GlobalStyles";

import Routes from "./pages/Routes";

import Dark from "./pages/Styles/Themes/Dark";
import Light from "./pages/Styles/Themes/Light";

const App: React.FC = () =>{
    return(
        <ThemeProvider theme={Light}>
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    );
};

export default App;
