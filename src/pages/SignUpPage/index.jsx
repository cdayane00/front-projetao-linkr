import React from "react";
import { Main, Banner, SignUpContainer } from "./styles";

export default function SignUpPage() {
  return (
    <Main>
      <Banner>
        <h1>Linkr</h1>
        <p>save, share and discover the best links on the web</p>
      </Banner>
      <SignUpContainer>{/* 4 inputs, 1 button, 1 Link */}</SignUpContainer>
    </Main>
  );
}
