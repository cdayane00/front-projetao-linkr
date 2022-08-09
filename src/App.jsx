import "./styles/reset.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/userContext";
import { GlobalStyles } from "./styles/globalStyles";
import RouterNavigator from "./components/RouterNavigator";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyles />
        <RouterNavigator />
      </BrowserRouter>
    </UserProvider>
  );
}
