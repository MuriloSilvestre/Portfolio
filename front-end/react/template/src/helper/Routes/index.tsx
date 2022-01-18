import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./App.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
)

export default Routes;