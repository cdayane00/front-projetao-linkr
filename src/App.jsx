import "./styles/reset.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/globalStyles";
import RouterNavigator from "./components/RouterNavigator";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
      <RouterNavigator />
    </BrowserRouter>
  );
}
