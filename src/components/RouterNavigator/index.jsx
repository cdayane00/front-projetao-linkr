import React from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "../../pages/SignUpPage";
import SignInPage from "../../pages/SignInPage";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/timeline" />
    </Routes>
  );
}
