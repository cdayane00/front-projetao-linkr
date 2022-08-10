import React from "react";
import Banner from "../../components/Banner";
import SignUpForms from "../../components/SignUpForms";
import { Main, Container } from "./styles";

export default function SignUpPage() {
  return (
    <Main>
      <Container>
        <Banner />
        <SignUpForms />
      </Container>
    </Main>
  );
}
