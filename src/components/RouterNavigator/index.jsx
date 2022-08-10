import React from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "../../pages/SignUpPage";
import Timeline from "../../pages/TimelinePage";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}
