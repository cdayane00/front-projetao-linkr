import React from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "../../pages/SignUpPage";
import SignInPage from "../../pages/SignInPage";
import Timeline from "../../pages/TimelinePage";
import HashtagPage from "../../pages/HashtagPage";
import UserPage from "../../pages/UserPage";

export default function RouterNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/hashtags/:hashtag" element={<HashtagPage />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  );
}
