import "./styles/reset.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/globalStyles";
import RouterNavigator from "./components/RouterNavigator";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RouterNavigator />
    </BrowserRouter>
  );
}
