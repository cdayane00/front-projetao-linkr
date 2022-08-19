import "./styles/reset.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HandlerProvider from "./contexts/handlerContext";
import { GlobalStyles } from "./styles/globalStyles";
import RouterNavigator from "./components/RouterNavigator";
import DeleteDialog from "./components/Dialog";
import DialogShare from "./components/DialogShare";

export default function App() {
  return (
    <HandlerProvider>
      <BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
        <DeleteDialog />
        <DialogShare />
        <RouterNavigator />
      </BrowserRouter>
    </HandlerProvider>
  );
}
